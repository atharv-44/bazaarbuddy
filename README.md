# BazaarBuddy - Fresh Groceries Delivered Fast

A modern, responsive e-commerce website for grocery delivery services built with HTML, CSS, and JavaScript.

## Features

### Landing Page (`index.html`)
- **Hero Section**: Eye-catching hero with call-to-action
- **About Section**: Company information and mission
- **Features Section**: Key benefits with icons
- **Product Categories**: Showcase of main product categories
- **Responsive Navigation**: Mobile-friendly navigation menu
- **Footer**: Contact information and social links

### Products Page (`products.html`)
- **Search Functionality**: Search products by name or category
- **Category Filters**: Filter products by category
- **Product Grid**: Responsive product cards with images
- **Stock Status**: Real-time stock information
- **Add to Cart**: Interactive cart functionality
- **Responsive Design**: Optimized for all device sizes

## Product Categories

1. **Fresh Produce**: Apples, Tomatoes
2. **Dairy & Eggs**: Fresh Milk, Butter, Eggs
3. **Bakery & Snacks**: Whole Wheat Bread, Biscuits
4. **Beverages**: Tea, Orange Juice
5. **Grains & Staples**: Basmati Rice
6. **Oils & Spices**: Cooking Oil, Turmeric Powder

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and dynamic content
- **Font Awesome**: Icons for enhanced UI
- **Google Fonts**: Poppins font family for typography
- **Unsplash**: High-quality product images

## Design Features

- **Color Scheme**: Green-based palette representing freshness and nature
- **Typography**: Clean, modern Poppins font family
- **Responsive Grid**: CSS Grid and Flexbox for layout
- **Hover Effects**: Smooth animations and transitions
- **Mobile First**: Responsive design for all screen sizes
- **Accessibility**: Keyboard navigation and focus states

## File Structure

```
bazaarbuddy/
├── index.html          # Landing page
├── products.html       # Products page
├── login.html          # Login/Registration page
├── styles.css          # Main stylesheet (includes products page styles)
├── script.js           # Main JavaScript functionality (includes products page functionality)
└── README.md           # Project documentation
```

## Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in your web browser to view the landing page
3. **Click "Shop Now"** or navigate to "Products" to view the products page
4. **Use the search bar** to find specific products
5. **Filter by category** using the category buttons
6. **Click "Add to Cart"** to add products to your cart

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features in Detail

### Search Functionality
- Real-time search as you type
- Search by product name or category
- Debounced input for performance
- Clear visual feedback

### Category Filtering
- Filter products by category
- Active state indication
- Smooth transitions
- Mobile-optimized layout

### Product Cards
- High-quality product images
- Product information display
- Stock status indicators
- Interactive hover effects
- Add to cart functionality

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Flexible grid layouts
- Touch-friendly interactions

## Customization

### Adding New Products
Edit the `products` array in `products.js`:

```javascript
{
    id: 13,
    name: "New Product",
    category: "category-name",
    categoryName: "Category Display Name",
    price: 100,
    stock: "In stock",
    stockStatus: "in",
    image: "image-url"
}
```

### Styling Changes
- Main colors defined in `styles.css`
- All styles (including products page) consolidated in `styles.css`
- Responsive breakpoints clearly marked
- CSS custom properties for easy theming

### Adding New Categories
1. Add category button to HTML
2. Update category filter logic in JavaScript
3. Add corresponding CSS styles

## Performance Features

- **Lazy Loading**: Images load as needed
- **Debounced Search**: Optimized search performance
- **Efficient DOM Updates**: Minimal re-rendering
- **CSS Transitions**: Hardware-accelerated animations

## Future Enhancements

- Shopping cart persistence
- User authentication system
- Product reviews and ratings
- Advanced filtering options
- Wishlist functionality
- Order tracking system

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue in the project repository. 