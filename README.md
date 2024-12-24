# Spend Bill Gates' Money

Spend Bill Gates' Money is an online simulation or game where players are given virtual money, and they can use it to purchase various items in a virtual shopping experience. This project used technologies such as React, TypeScript, CSS, and Context API.

## Features

- **Account Limit:** Displays the remaining amount of virtual money available to the player, updating dynamically as items are added or removed from the shopping cart.
- **Buttons for Buying and Selling:** Allows players to incrementally buy or sell items, with disabled buttons when they exceed their account limit or attempt to sell items they don't own.
- **Input Fields:** Enables players to enter specific quantities for each item, with validation to ensure they don't exceed their account limit.
- **Receipt Display:** Shows a detailed receipt of the items purchased, including their names, quantities, and total prices. The total amount spent is also calculated and displayed at the bottom.

## Technologies Used

- **React:** Developed with React, a JavaScript library for building user interfaces, allowing for efficient component-based development and state management.
- **TypeScript:** Utilizes TypeScript, a statically typed superset of JavaScript, to enhance code quality, improve maintainability, and provide better developer tooling.
- **Context API:** Implements React's Context API for state management, allowing data to be shared between components without having to pass props manually.
- **useEffect Hook:** Utilizes the useEffect hook to perform side effects in functional components, such as updating the remaining money when items are added or removed from the shopping cart.

## Live Site

You can access the live website [here](https://billgatesmoney.netlify.app/).

https://github.com/OguzcanIzanli/Spend-Bill-Gates-Money/assets/95178772/0d20a85b-5fd7-450d-b222-90672997f975

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en) installed on your computer.
From your comment line:

```
# Clone this repository
$ git clone https://github.com/OguzcanIzanli/Spend-Bill-Gates-Money.git

# Go into the repository
$ cd Spend-Bill-Gates-Money

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```
