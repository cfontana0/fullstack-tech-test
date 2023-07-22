# The Drink Shop - Frontend

## Description

The Drink Shop is a single-page website built with Next.JS and Typescript, aiming to provide a user-friendly platform for displaying a grid of products. The website showcases a variety of drinks, each accompanied by an image and an "add to basket" button. Its primary purpose is to allow users to add products to their basket and conveniently calculate the total price of the selected items. Moreover, the website offers discounts to users based on their purchase choices: buying two, three, four, or all five different flavoured drinks triggers various discount percentages. For added convenience, the website includes a "clear basket" button to remove all items from the basket, providing an efficient shopping experience for the users.

## Getting Started

This project was bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
cd frontend
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
npm run dev
# or
yarn dev
# or
pnpm dev
```

Once the server runs, open [http://localhost:3000](http://localhost:3000) with your preferred browser to view the website.

## Usage

You will receive a grid of various drink products upon accessing the website. Each product will have an associated image and an "add to basket" button. You can click the "add to basket" button to add a product to your shopping basket.

The website will automatically calculate the total price of all items in your basket, considering any applicable discounts based on your purchase choices. Purchasing two, three, four, or all five different flavoured drinks will trigger different discount percentages.

If you wish to clear your basket and start anew, click the "clear basket" button.

## Test

In the current front-end implementation, tests of any kind have not been included as they were outside the project's scope. However, for future considerations, Jest and Testing Library are the best testing frameworks for applications using Next.JS and Typescript. 

Jest, a widely used testing framework, offers powerful features like snapshot testing and robust mocking capabilities. It smoothly integrates with Typescript, enabling type-checking during test runs.

On the other hand, Testing Library adopts a user-centric approach, enabling developers to focus on user interactions and behaviour, resulting in more reliable and maintainable tests.

Combining Jest and Testing Library will provide a comprehensive and effective solution for Next.JS and Typescript applications, ensuring high code quality and a smooth testing experience for future development efforts.

## Contributing

We welcome contributions to enhance The Drink Shop website. If you have any suggestions, bug fixes, or new features to propose, please follow these steps:

1. Fork the repository from [here](https://github.com/cfontana0/drink-shop-frontend).
2. Create a new branch with a descriptive name for your feature or bug fix.
3. Commit your changes and push them to your forked repository.
4. Create a pull request to the main repository explaining your changes.

We will review your pull request and reply as soon as possible.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for more details.