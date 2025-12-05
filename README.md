📦 MyStore – Angular Project

This project is a simple e-commerce frontend built with Angular, created as part of the Udacity Full Stack JavaScript Nanodegree.
The application allows users to browse products, view detailed information, add items to the cart, update quantities, and complete a mock checkout flow.

🚀 Features
1️⃣ Product Listing

Displays all products from a local JSON file.
Responsive grid layout with images, names, and prices.
Each product includes an “Add to Cart” button.

2️⃣ Product Details Page
Shows full product information (image, name, description, price).
User can select quantity (1–10).
Adds selected quantity to the cart.

3️⃣ Shopping Cart
Shows all items added by the user.
Quantities can be updated and the total updates instantly.
Items can be removed from the cart with feedback.
Displays total cost and number of items.

4️⃣ Checkout Form
Form validation using Angular FormsModule.
Validates:
Full name (required, min length 3)
Address (required)
Credit card number (required, numbers only, 16 digits)
After successful submission, cart is cleared and user is redirected.

5️⃣ Order Success Page
Confirmation page showing order completion details.

🧩 Component Architecture
The application is built using Angular Standalone Components, and follows Udacity’s requirements for component interaction:
✔ Parent → Child communication
Using @Input to pass item data into the cart-item component.
✔ Child → Parent communication
Using @Output + EventEmitter to notify the cart component when:
An item quantity changes
An item is removed
✔ Sibling communication
Implemented using Angular Services, specifically the CartService, which manages:
Cart items
Adding/removing products
Total price calculation
This ensures a clean and scalable architecture.

📁 Project Structure
src/
│── app/
│   ├── product-list/
│   ├── product-details/
│   ├── cart/
│   │    ├── cart.component.ts
│   │    ├── cart-item.component.ts   ← (child component)
│   ├── order-success/
│   ├── models/
│   └── services/
│       └── cart.service.ts
│
│── assets/
│   ├── data.json
│   └── images/

⚙️ How to Run the Project
Install dependencies:
npm install

Start the development server:
ng serve --port 3000


Open in browser:
http://localhost:3000/

📄 Data Source
Products are loaded from:
src/assets/data.json

Example product object:
{
  "id": 1,
  "name": "Sample Product",
  "price": 20.5,
  "description": "High-quality product description.",
  "url": "assets/images/product1.webp"
}

🛠 Technologies Used
Angular 18 (Standalone Components)
TypeScript
Angular Router
Angular Forms
HTML / CSS

👨‍💻 Author: Developed by Noor Jaber