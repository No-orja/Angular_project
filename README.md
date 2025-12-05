MyStore – Angular Project

This project is a simple e-commerce frontend built with Angular, following the Udacity Full Stack JavaScript Nanodegree requirements.
The application allows users to browse products, view details, add items to a cart, and complete a mock checkout flow.

🚀 Features:

1. Product Listing
Displays all products from a local JSON file.
Stylish responsive grid layout.
Each product shows image, title, price, and description preview.
“Add to Cart” button included.

2. Product Details Page
Displays full product information.
Quantity selection (1–10).
Add selected quantity to cart.
Navigation back to product list.

3. Shopping Cart
View all selected products.
Update quantities.
Displays subtotal and total.
Proceed to checkout.

4. Order Success Page
Simple confirmation screen after checkout.

📦 Project Structure
src/
│── app/
│   ├── product-list/
│   ├── product-details/
│   ├── cart/
│   ├── order-success/
│   ├── models/
│   └── services/
│
│── assets/
│   ├── data.json
│   └── images/

⚙️ How to Run the Project:

1. Install dependencies
npm install

2. Start the development server
ng serve --port 3000

3. Open in browser
http://localhost:3000/

📁 Data Source

All products are fetched from:
src/assets/data.json


Each product contains:
{
  "id": number,
  "name": string,
  "price": number,
  "description": string,
  "url": string
}

🛠 Technologies Used
Angular 18 (Standalone Components)
TypeScript
HTML & CSS
Angular Router
Angular Forms Module

👨‍💻 Author: Developed by Noor Jaber