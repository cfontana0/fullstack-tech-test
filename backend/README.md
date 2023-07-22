# The Drink Shop - Backend

## Description

The Drink Shop is a single-page website built with Apollo Server and Typescript, aiming to provide a user-friendly platform for displaying a grid of products. The website showcases a variety of drinks, each accompanied by an image and an "add to basket" button. Its primary purpose is to allow users to add products to their basket and conveniently calculate the total price of the selected items. Moreover, the website offers discounts to users based on their purchase choices: buying two, three, four, or all five different flavoured drinks triggers various discount percentages. For added convenience, the website includes a "clear basket" button to remove all items from the basket, providing an efficient shopping experience for the users.

## Getting Started

This template repository contains the necessary boilerplate code to develop your Subgraph quickly with Apollo Server and Typescript. We recommend using code generation for your types in Typescript; this repository supports code generation for resolver types using [GraphQL Code Generator](https://www.graphql-code-generator.com/) and a REST API data source using [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api). A rich set of npm scripts are included in the repository to provide a smoother developer experience along with working tests using [`jest`](https://jestjs.io/). Working examples for using GitHub Actions to integrate with Apollo Studio for registering your schema and running schema validation. 

### Prerequisites

Before running the development server, you must install Node.js and npm (Node Package Manager) on your system.

### Installation

To set up the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/cfontana0/drink-shop-frontend.git
```

2. Navigate to the project directory:

```bash
cd backend
```

3. Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

To start the development server, use one of the following commands:

```bash
npm run start:dev-mocked
```

Once the server is running, the URL is http://localhost:4001/](http://localhost:4001/)

## Usage

You will receive a grid of various drink products upon accessing the website. Each product will have an associated image and an "add to basket" button. You can click the "add to basket" button to add a product to your shopping basket.

The website will automatically calculate the total price of all items in your basket, considering any applicable discounts based on your purchase choices. Purchasing two, three, four, or all five different flavoured drinks will trigger different discount percentages.

If you wish to clear your basket and start anew, click the "clear basket" button.


## Test

To execute the unit tests, please use the following command:

```
npm test
```

The provided tests employ the Jest framework, a widely used testing tool for JavaScript and Typescript applications. Jest enables developers to create test cases that validate different functionalities of the application. The test suite in this code snippet is structured using Jest's testing functions, including `describe`, `beforeAll`, `afterAll`, and `it`.

These test cases encompass various validations, such as data verification and calculations, achieved through the use of the `expect` function, which is an integral part of the Jest framework.

Additionally, the tests utilize Apollo Server's `executeOperation` method to simulate GraphQL queries and obtain responses from the mocked Subgraph. This enables efficient testing of GraphQL-related functionalities.

## Contributing

We welcome contributions to enhance The Drink Shop website. If you have any suggestions, bug fixes, or new features to propose, please follow these steps:

1. Fork the repository from [here](https://github.com/cfontana0/drink-shop-frontend).
2. Create a new branch with a descriptive name for your feature or bug fix.
3. Commit your changes and push them to your forked repository.
4. Create a pull request to the main repository explaining your changes.

We will review your pull request and reply as soon as possible.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for more details.