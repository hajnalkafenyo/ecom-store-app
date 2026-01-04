# E-commerce Store App

An online store application built with React that fetches product data from the Noroff API and provides shopping cart functionality. The application allows users to browse products, view detailed product pages, add items to their cart, and complete purchases.

## Description

This e-commerce application provides a complete online shopping experience with a responsive design built using React and TailwindCSS. The application integrates with the Noroff v2 online shop API to display products with pricing, images, ratings, and reviews. Users can navigate through different products, add them to a persistent cart, and complete checkout transactions.

## Features

- Product catalog display fetched from external API
- Individual product detail pages with reviews
- Shopping cart functionality with local storage persistence
- Add/remove items from cart with quantity management
- Price display with discount calculations (Norwegian kroner format)
- Checkout success page with order summary
- Contact page with store information
- Responsive design using TailwindCSS
- React Router for client-side navigation
- Error handling for API requests

## Project Structure

```
src/
├── App.jsx                 # Main application component with routing
├── index.js               # Application entry point
├── cartContext.js         # React Context for cart state management
├── Home.jsx               # Home page with product grid
├── Product.jsx            # Product detail page
├── Contact.jsx            # Store contact information page
├── CartPage.jsx           # Shopping cart page
├── CheckoutSuccess.jsx    # Order confirmation page
├── components/            # Reusable UI components
│   ├── header.jsx         # Navigation header with cart counter
│   ├── footer.jsx         # Site footer
│   ├── card.jsx           # Product card component
│   ├── cartItem.jsx       # Cart item display component
│   ├── button.jsx         # Styled button component
│   ├── tag.jsx            # Product tag component
│   ├── review.jsx         # Product review component
│   └── OverviewItem.jsx   # Order summary item component
└── utils/
    ├── formatCurrency.js  # Currency formatting utility
    └── formatCurrency.test.js # Unit tests for currency formatter
```

## Requirements

- Node.js (version compatible with React 19.2.0)
- npm or yarn package manager
- Modern web browser with JavaScript enabled

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecom-store-app
```

2. Install dependencies:
```bash
npm install
```

## Configuration

The application connects to the Noroff v2 API at `https://v2.api.noroff.dev/online-shop`. No additional configuration is required as the API endpoint is hardcoded in the source files.

### Cart Persistence
Cart data is automatically persisted in the browser's localStorage under the key "cart".

## Usage

### Development Mode
Start the development server:
```bash
npm start
```
The application will open at `http://localhost:3000`.

### Production Build
Build for production:
```bash
npm run build
```

### Testing
Run the test suite:
```bash
npm test
```

## API Integration

The application fetches data from the Noroff v2 online shop API:
- **Products List**: `GET https://v2.api.noroff.dev/online-shop`
- **Single Product**: `GET https://v2.api.noroff.dev/online-shop/{id}`

Product data includes:
- Product ID, title, description
- Price and discounted price
- Product images with alt text
- Product tags
- Customer reviews and ratings

## Development Notes

### Built With
- React 19.2.0 with functional components and hooks
- React Router DOM 7.9.6 for client-side routing
- TailwindCSS 3.4.18 for styling
- Create React App for build tooling

### Testing
- Jest testing framework via react-scripts
- @testing-library for React component testing
- Unit tests for currency formatting utility

### Code Style
- Uses modern JavaScript (ES6+) features
- Functional React components with hooks
- React Context API for state management
- Error boundaries and loading states

## Limitations and Known Issues

1. **Duplicate Cart Items**: The cart prevents adding the same product twice but doesn't increment quantity
2. **Missing Features**: 
   - Product search and filtering
   - Payment processing integration
   - Product categories
   - Wishlist functionality
3. **Static Assets**: References to images in public folder (map.png, contact.jpg, etc.) that may not exist
4. **Currency**: Hardcoded to Norwegian kroner (kr) with Hungarian number formatting
5. **Error Handling**: Basic error handling for API failures but no retry mechanisms
6. **Responsive Design**: Mobile-responsive but may need UX improvements on smaller screens


## Contributing

For contribution, you should:
- Fork the repository
- Create a new branch for your feature or bugfix. Naming: `feature/your-feature-name` or `bugfix/your-bug-name`
- Commit your changes with clear messages
- Push to your fork and create a pull request
- Ask for review from maintainers
- Fix any requested changes
- Merge once approved