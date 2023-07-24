import { ApolloServer } from 'apollo-server';
import { Dirent } from 'fs';
import { generateDataSources } from '../utils/generateDataSources';
import { generateSubgraphSchema, loadModule } from '../utils/schema';
import { gql } from 'apollo-server-core';

let mockedSubgraph: ApolloServer;

describe('Repository Template Functionality', () => {
  beforeAll(async () => {
    let schema = await generateSubgraphSchema();
    let dataSources = await generateDataSources();

    const server = new ApolloServer({
      schema,
      mocks: true,
      mockEntireSchema: false,
      dataSources,
    });
    await server.listen({ port: 4001 })
    mockedSubgraph = server;
  });
  afterAll(async () => {
    await mockedSubgraph.stop();
  });

  it('Mocks typeDefs when resolvers are not defined - helloWorld.graphql', async () => {
    const query = 'query { hello }';
    const expected = { hello: 'Hello World' };

    const res = await mockedSubgraph.executeOperation({ query });

    expect(res.data).toEqual(expected);
  });

  it('Load resolvers for .graphql file - bar.ts', async () => {
    const query = 'query { bar(id:"1") { name appendedName } }';
    const expected = { bar: { name: 'Bar', appendedName: 'Bar - appended' } };

    const res = await mockedSubgraph.executeOperation({ query });

    expect(res.data).toEqual(expected);
  });

  it('Executes Location Entity Resolver', async () => {
    const query = `query ($representations: [_Any!]!) {
      _entities(representations: $representations) {
        ...on Foo {
          name
        }
      }
    }`;
    const variables = {
      representations: [{ __typename: 'Foo', id: '1' }],
    };
    const expected = {
      _entities: [{ name: 'Foo' }],
    };

    const res = await mockedSubgraph.executeOperation({
      query,
      variables,
    });

    expect(res.data).toEqual(expected);
  });

  it('Module not found returns undefined', async () => {
    const emptyDirent = new Dirent();

    const undefinedModule = await loadModule(emptyDirent);

    expect(undefinedModule).toBeUndefined();
  });

  it('Calculates discounted price for two different drinks', async () => {
    const drinks = ['Coca Cola', 'Fanta'];
    const query = gql`query ($drinks: [String!]!) { calculatePrice(drinks: $drinks) { total details { price bundle } } }`;
    const res = await mockedSubgraph.executeOperation({ query, variables: { drinks } });
    expect(res?.data?.calculatePrice?.total).toEqual(1.9);
  });

  it('Calculates discounted price for three different drinks', async () => {
    const drinks = ['Coca Cola', 'Fanta', 'Sprite'];
    const query = gql`query ($drinks: [String!]!) { calculatePrice(drinks: $drinks) { total details { price bundle } } }`;
    const res = await mockedSubgraph.executeOperation({ query, variables: { drinks } });
    expect(res?.data?.calculatePrice?.total).toEqual(2.7);
  });

  it('Calculates discounted price for four different drinks', async () => {
    const drinks = ['Coca Cola', 'Fanta', 'Sprite', 'Dr Pepper'];
    const query = gql`query ($drinks: [String!]!) { calculatePrice(drinks: $drinks) { total details { price bundle } } }`;
    const res = await mockedSubgraph.executeOperation({ query, variables: { drinks } });
    expect(res?.data?.calculatePrice?.total).toEqual(3.2);
  });

  it('Calculates discounted price for five different drinks', async () => {
    const drinks = ['Coca Cola', 'Fanta', 'Sprite', 'Dr Pepper', 'Iron Bru'];
    const query = gql`query ($drinks: [String!]!) { calculatePrice(drinks: $drinks) { total details { price bundle } } }`;
    const res = await mockedSubgraph.executeOperation({ query, variables: { drinks } });
    expect(res?.data?.calculatePrice?.total).toEqual(3.75);
  });

  it('Calculates price for two same drinks', async () => {
    const drinks = ['Coca Cola', 'Coca Cola'];
    const query = gql`query ($drinks: [String!]!) { calculatePrice(drinks: $drinks) { total details { price bundle } } }`;
    const res = await mockedSubgraph.executeOperation({ query, variables: { drinks } });
    expect(res?.data?.calculatePrice?.total).toEqual(2);
  });

  it('Calculates discounted price for four different drinks and one same drink', async () => {
    const drinks = ['Coca Cola', 'Coca Cola', 'Fanta', 'Sprite', 'Dr Pepper'];
    const query = gql`query ($drinks: [String!]!) { calculatePrice(drinks: $drinks) { total details { price bundle } } }`;
    const res = await mockedSubgraph.executeOperation({ query, variables: { drinks } });
    expect(res?.data?.calculatePrice?.total).toEqual(4.2);
  });
});
