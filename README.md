# Forever eCommerce Platform
## Project Overview
- This eCommerce platform is a full-stack web application that allows users to browse products by categories and subcategories, manage their cart, and proceed to checkout with various payment options. It includes user authentication and payment integration with Stripe and Cash on Delivery (COD).

## Features
1. User Authentication
- Users can register, log in, and log out securely.

2. Category & Subcategory Filtering
- Products are categorized under Men, Women, and Kids.
- Each category has the following subcategories:
Top Wear, Bottom Wear, Winter Wear.
- Users can filter products based on categories and subcategories for a refined shopping experience.

3. Cart Management
- Users can add products to their cart, view the cart summary, and update product quantities.
- The cart displays all added items, total price, and allows users to proceed to checkout.

4. Checkout Process
- Shipping Information: Users can provide their shipping details.
- Payment Options:
  - Stripe Payment Gateway: Users can securely pay using their credit or debit cards.
  - Cash on Delivery (COD): Users can opt for COD, allowing payment upon product delivery.

5. Order Management
- Orders Page: 
    - Users can view their past and current orders.
    - Each order includes details like product name, quantity, price, and order status (e.g., pending, shipped, delivered).

## Tech Stack

### Frontend
- React & Tailwind CSS: Used for building the user interface.
- Axios: Used for making HTTP requests to the backend API.
- React Toastify: Used for displaying notifications.

### Backend
- Node.js & Express.js: Backend server and API handling.
- MongoDB: Database for storing user, product, order, and payment information.
- JWT (JSON Web Token): Used for user authentication.

### Payment Gateway
- Stripe: Integrated for handling online payments.
- Cash on Delivery: Available as a payment option.


# Admin Panel
### Overview
- This admin panel allows the admin to manage products and orders for the e-commerce platform.

### Admin Credentials:-
- Email : admin@forever.com
- Password : AdminPassword@1234

### Admin Link:
- https://forever-ecommerce-admin.netlify.app/

### Features:
#### Add, Update, and Remove Products:

- Admin can add new products to the platform, providing details such as name, description, price, category, and images.
- Admin can update existing product details, including price, description, and images.
- Admin can remove products that are no longer available.

#### Update Order Status:

- Admin can view and update the status of placed orders (e.g., "Order Placed", "Shipped", "Delivered").
- This helps in tracking the progress of customer orders and ensuring timely delivery.

#### Tech Stack:
- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Image Handling: Cloudinary