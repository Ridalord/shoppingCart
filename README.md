# Shopping Cart

## Overview

This project is a checkout system for a shop that sells apples and oranges. It allows users to add items to their cart, apply special offers, and proceed to checkout.

## Core Functionality

### Basic Checkout System

- The checkout system supports two types of items: apples and oranges.
- Apples cost 60 cents each, and oranges cost 25 cents each.
- Users can add items to their cart, view the total price, and proceed to checkout.

### Special Offers

- The shop offers two special deals:
  - **Buy one, get one free** on apples.
  - **3 for the price of 2** on oranges.
- These offers are automatically applied when the user adds items to the cart.
- The total price is updated accordingly based on the applied offers.

## Implementation Details

### Technology Stack

- **React:** Used for building the user interface components and managing the application's front-end logic.
- **TypeScript:** Enhances code quality and maintainability by adding static typing to JavaScript.
- **Reducers for State Management:** Utilized reducers for managing the application's state, providing a structured and predictable way to handle complex state logic.

### Components

- **StorePage:** Displays available products and the user's shopping cart.
- **ItemCard:** Represents a product card with an image, name, and "Add to cart" button.
- **CartLineItem:** Displays a single item in the shopping cart with options to adjust quantity and remove the item.
- **ModalCheckout:** A modal that appears when the user proceeds to checkout, showing the items purchased, total quantity, total price, and a "Pay" button.

## UI Styling

- The UI is styled using CSS modules for each component.
- Clean and intuitive design with clear separation of components and functionality.
- The modal checkout interface provides a user-friendly experience, summarizing the items purchased and the total amount due.

## Trade-offs

- **Performance vs. Complexity:** Utilizing reducers for state management adds structure and predictability to the application's state logic. However, it may introduce some overhead in terms of performance compared to simpler state management solutions. The decision to use reducers was made to ensure scalability and maintainability as the project grows.
- **UI Flexibility:** The current UI styling focuses on simplicity and functionality to provide a seamless user experience. While more elaborate designs could enhance the visual appeal, they may also increase development time and maintenance efforts. The chosen styling approach strikes a balance between aesthetics and practicality.

## Why These Choices

- **React:** React is a widely-used library for building user interfaces, offering a component-based architecture that promotes reusability and maintainability. Its virtual DOM rendering and state management capabilities make it well-suited for complex web applications.
- **TypeScript:** TypeScript adds static typing to JavaScript, providing compile-time type checking and improved code quality. This helps catch errors early in the development process and enhances the overall reliability of the application, especially in larger codebases.
- **Reducers for State Management:** Using reducers allows for a centralized and predictable way to manage application state. Reducers provide a clear separation of concerns, making it easier to reason about state changes and debug issues. While there may be a slight performance overhead compared to simpler state management solutions, the benefits of scalability and maintainability outweigh this trade-off for larger applications.

## Future Considerations

- **Optimization:** As the project evolves, performance optimizations can be implemented to improve the efficiency of the application. This may involve code splitting, lazy loading, and memoization techniques to reduce the initial load time and enhance the user experience.
- **Accessibility:** Ensuring accessibility is an important aspect of web development. In future iterations, accessibility features such as keyboard navigation, screen reader support, and semantic HTML can be implemented to make the application more inclusive and usable for all users.
- **Testing:** Comprehensive testing, including unit tests, integration tests, and end-to-end tests, should be implemented to ensure the reliability and robustness of the application. Test-driven development (TDD) practices can be adopted to catch bugs early and prevent regressions.