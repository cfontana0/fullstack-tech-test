import { GraphQLResolveInfo } from 'graphql';
import { DataSourceContext } from '../types/DataSourceContext';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};

export type Bar = {
  __typename?: 'Bar';
  appendedName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Drink = {
  __typename?: 'Drink';
  img: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Foo = {
  __typename?: 'Foo';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type PriceDetails = {
  __typename?: 'PriceDetails';
  bundle: Array<Scalars['String']>;
  price: Scalars['Float'];
};

export type PriceWithDetails = {
  __typename?: 'PriceWithDetails';
  details: Array<PriceDetails>;
  total: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  bar?: Maybe<Bar>;
  calculatePrice: PriceWithDetails;
  drinks: Array<Drink>;
  foos?: Maybe<Array<Maybe<Foo>>>;
  hello?: Maybe<Scalars['String']>;
};


export type QueryBarArgs = {
  id: Scalars['ID'];
};


export type QueryCalculatePriceArgs = {
  drinks: Array<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ReferenceResolver<TResult, TReference, TContext> = (
      reference: TReference,
      context: TContext,
      info: GraphQLResolveInfo
    ) => Promise<TResult> | TResult;

      type ScalarCheck<T, S> = S extends true ? T : NullableCheck<T, S>;
      type NullableCheck<T, S> = Maybe<T> extends T ? Maybe<ListCheck<NonNullable<T>, S>> : ListCheck<T, S>;
      type ListCheck<T, S> = T extends (infer U)[] ? NullableCheck<U, S>[] : GraphQLRecursivePick<T, S>;
      export type GraphQLRecursivePick<T, S> = { [K in keyof T & keyof S]: ScalarCheck<T[K], S[K]> };
    

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Bar: ResolverTypeWrapper<Bar>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Drink: ResolverTypeWrapper<Drink>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Foo: ResolverTypeWrapper<Foo>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  PriceDetails: ResolverTypeWrapper<PriceDetails>;
  PriceWithDetails: ResolverTypeWrapper<PriceWithDetails>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Bar: Bar;
  String: Scalars['String'];
  Drink: Drink;
  Float: Scalars['Float'];
  Foo: Foo;
  ID: Scalars['ID'];
  PriceDetails: PriceDetails;
  PriceWithDetails: PriceWithDetails;
  Query: {};
  Boolean: Scalars['Boolean'];
}>;

export type ContactDirectiveArgs = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type ContactDirectiveResolver<Result, Parent, ContextType = DataSourceContext, Args = ContactDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BarResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Bar'] = ResolversParentTypes['Bar']> = ResolversObject<{
  appendedName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DrinkResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Drink'] = ResolversParentTypes['Drink']> = ResolversObject<{
  img?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FooResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Foo'] = ResolversParentTypes['Foo']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Foo']>, { __typename: 'Foo' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceDetailsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PriceDetails'] = ResolversParentTypes['PriceDetails']> = ResolversObject<{
  bundle?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceWithDetailsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PriceWithDetails'] = ResolversParentTypes['PriceWithDetails']> = ResolversObject<{
  details?: Resolver<Array<ResolversTypes['PriceDetails']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  bar?: Resolver<Maybe<ResolversTypes['Bar']>, ParentType, ContextType, RequireFields<QueryBarArgs, 'id'>>;
  calculatePrice?: Resolver<ResolversTypes['PriceWithDetails'], ParentType, ContextType, RequireFields<QueryCalculatePriceArgs, 'drinks'>>;
  drinks?: Resolver<Array<ResolversTypes['Drink']>, ParentType, ContextType>;
  foos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Foo']>>>, ParentType, ContextType>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = DataSourceContext> = ResolversObject<{
  Bar?: BarResolvers<ContextType>;
  Drink?: DrinkResolvers<ContextType>;
  Foo?: FooResolvers<ContextType>;
  PriceDetails?: PriceDetailsResolvers<ContextType>;
  PriceWithDetails?: PriceWithDetailsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = DataSourceContext> = ResolversObject<{
  contact?: ContactDirectiveResolver<any, any, ContextType>;
}>;
