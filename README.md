# E-commerce Store - JavaScript Frameworks Course Assignment

## Project Description

The E-commerce Store is a fully functional online shopping application built with React. It provides a complete shopping experience with product browsing, detailed product pages with reviews, a dynamic shopping cart, and checkout functionality. The application integrates with the Noroff API to display real products with dynamic pricing and inventory information.

## Live Demo

[View the live application](https://ecom-store-app-hajnalka.netlify.app/)

## Repository

[View the GitHub repository](https://github.com/yourusername/02_ecom-store) (Replace with your actual GitHub repository URL)

## Features

- **Product Catalog**: Browse all products with images, descriptions, and prices
- **Search Functionality**: Real-time search with auto-complete that filters products as you type
- **Product Details**: View detailed product information including reviews and ratings
- **Discount Calculation**: Automatic calculation and display of product discounts
- **Shopping Cart**: Add/remove items with persistent storage using localStorage
- **Checkout**: Complete purchase flow with order summary
- **Order Confirmation**: Success page confirming your order
- **Contact Form**: Get in touch with validation for all fields
- **Responsive Design**: Fully responsive layout that works on all devices

## Technologies Used

- **Frontend Framework**: React 19.2.0
- **Routing**: React Router DOM 7.9.6
- **Styling**: TailwindCSS 3.4.18
- **Build Tool**: Create React App (Vite)
- **Design**: Figma
- **Project Management**: Trello
- **Hosting**: Netlify
- **API**: Noroff v2 API

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd 02_ecom-store
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (if needed):
Create a `.env.local` file in the root directory:
```
REACT_APP_API_URL=https://v2.api.noroff.dev/online-shop
```

## Running the Project

### Development Mode
```bash
npm start
```
The application will open automatically at `http://localhost:3000`

### Production Build
```bash
npm run build
```

### Running Tests
```bash
npm test
```

## How to Use

1. **Browse Products**: The homepage displays all available products from the Noroff API
2. **Search Products**: Use the search bar to filter products by name in real-time
3. **View Details**: Click on any product card to view detailed information, reviews, and ratings
4. **Add to Cart**: Use the "Add to Cart" button to add items to your shopping cart
5. **View Cart**: Click the cart icon in the header to see all items in your cart
6. **Checkout**: Review your items and total price, then proceed to checkout
7. **Confirm Order**: View your order confirmation on the success page
8. **Contact Us**: Use the contact form to send messages with full validation

## Project Structure

```
src/
├── App.jsx                    # Main application component with routing
├── index.js                   # Application entry point
├── cartContext.js             # React Context for cart state management
├── pages/
│   ├── Home.jsx              # Homepage with product grid and search
│   ├── Product.jsx           # Product detail page
│   ├── Contact.jsx           # Contact form page
│   ├── CartPage.jsx          # Shopping cart page
│   └── CheckoutSuccess.jsx   # Order confirmation page
├── components/                # Reusable UI components
│   ├── header.jsx            # Navigation header with cart counter
│   ├── footer.jsx            # Site footer
│   ├── card.jsx              # Product card component
│   ├── cartItem.jsx          # Cart item display component
│   ├── button.jsx            # Styled button component
│   ├── tag.jsx               # Product tag component
│   ├── review.jsx            # Product review component
│   └── OverviewItem.jsx      # Order summary item component
└── utils/
    ├── formatCurrency.js     # Currency formatting utility
    └── formatCurrency.test.js # Unit tests for currency formatter
```

## API Integration

The application fetches products from the Noroff v2 API:

- **Get All Products**: `GET https://v2.api.noroff.dev/online-shop`
- **Get Single Product**: `GET https://v2.api.noroff.dev/online-shop/{id}`

## Key Functionality

### Shopping Cart
- Items are stored in browser's localStorage
- Cart persists across page refreshes
- Real-time cart counter in the header
- Add/remove items with immediate UI updates

### Product Search
- Type to search for products in real-time
- Results update as you type
- Click on search results to go to product details

### Checkout
- View all items and total price
- Order confirmation with successful checkout
- Automatic cart clearing after successful order

### Contact Form
- Validates all required fields
- Email format validation
- Minimum character requirements
- Success message after submission

## Technologies & Dependencies

- **React**: Modern JavaScript library for building user interfaces
- **React Router**: Client-side routing for multi-page navigation
- **TailwindCSS**: Utility-first CSS framework for styling
- **Axios/Fetch**: API data fetching
- **localStorage**: Client-side data persistence

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Notes

- Images are optimized for web display
- CSS is minified and bundled efficiently
- React components use hooks for optimal performance
- Cart state is managed globally with Context API

## Troubleshooting

### Port 3000 Already in Use
The app will try to use port 3001 or notify you to free up the port.

### API Connection Issues
Check your internet connection and ensure the Noroff API is accessible.

### localStorage Not Working
Ensure your browser allows localStorage and you're not in private/incognito mode.

### Build Issues
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Future Enhancements

Potential improvements for future versions:
- Product filtering and sorting
- Product categories
- Wishlist functionality
- User account system with order history
- Product quantity selection in cart
- Advanced search with filters
- Payment gateway integration

## Contributing

This is a course assignment project. For feedback or contributions, please contact the project owner.

## License

This project was created as a course assignment for Noroff School of Technology and Digital Media.

## Acknowledgments

- API: Noroff v2 Online Shop API
- Design: Created in Figma
- Project Management: Trello
- Build Tool: Create React App
- Styling: TailwindCSS
- Hosting: Netlify
