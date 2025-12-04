# E-commerce API

A RESTful E-commerce API built with NestJS, TypeORM, and PostgreSQL.

## Features

- 🔐 **Authentication & Authorization** - JWT-based auth with role-based access control
- 👥 **User Management** - Registration, login, and user CRUD operations
- 📦 **Product Management** - Full CRUD for products with categories
- 🛒 **Order Management** - Create, view, update, and cancel orders
- ✅ **Input Validation** - Request validation using class-validator
- 🛡️ **Error Handling** - Global exception filter for consistent error responses
- 🧪 **Unit Tests** - Jest-based testing

## Tech Stack

- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: Passport.js + JWT
- **Validation**: class-validator & class-transformer

## Project Structure

```
src/
├── auth/                 # Authentication module
│   ├── decorators/       # Custom decorators (CurrentUser, Roles)
│   ├── dto/              # Login & Register DTOs
│   ├── guards/           # JWT & Roles guards
│   └── strategies/       # JWT strategy
├── users/                # Users module
│   ├── dto/              # User DTOs
│   ├── entities/         # User entity
│   └── enums/            # User roles enum
├── products/             # Products module
│   ├── dto/              # Product DTOs
│   └── entities/         # Product entity
├── categories/           # Categories module
│   ├── dto/              # Category DTOs
│   └── entities/         # Category entity
├── orders/               # Orders module
│   ├── dto/              # Order DTOs
│   ├── entities/         # Order & OrderItem entities
│   └── enums/            # Order status enum
└── common/               # Shared utilities
    └── filters/          # Global exception filter
```

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/Ankita0037/E-commerce.git
cd E-commerce
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup PostgreSQL Database

1. Install PostgreSQL from https://www.postgresql.org/download/
2. Open pgAdmin or psql
3. Create a new database:

```sql
CREATE DATABASE ecommerce_db;
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=ecommerce_db

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRATION=24h

# Application
PORT=3000
NODE_ENV=development
```

### 5. Run the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

The API will be available at `http://localhost:3000/api`

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |
| GET | `/api/auth/profile` | Get current user profile |

### Users (Admin only)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| PATCH | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |
| POST | `/api/products` | Create product (Admin) |
| PATCH | `/api/products/:id` | Update product (Admin) |
| DELETE | `/api/products/:id` | Delete product (Admin) |

### Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | Get all categories |
| GET | `/api/categories/:id` | Get category by ID |
| POST | `/api/categories` | Create category (Admin) |
| PATCH | `/api/categories/:id` | Update category (Admin) |
| DELETE | `/api/categories/:id` | Delete category (Admin) |

### Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/orders` | Get all orders (own orders for users) |
| GET | `/api/orders/:id` | Get order by ID |
| POST | `/api/orders` | Create new order |
| PATCH | `/api/orders/:id` | Update order status (Admin) |
| DELETE | `/api/orders/:id` | Cancel order |

## API Usage Examples

### Register User

![Register User](images/register.png)

```json
POST /api/auth/register
{
  "email": "ankita@gmail.com",
  "password": "ankita123",
  "firstName": "Ankita",
  "lastName": "Prajapati"
}
```

### Login

![Login](images/login.png)

```json
POST /api/auth/login
{
  "email": "ankita@gmail.com",
  "password": "ankita123"
}
```

**Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "ankita@gmail.com",
    "firstName": "Ankita",
    "lastName": "Prajapati",
    "role": "user"
  }
}
```

### Create Product (Admin)

```json
POST /api/products
Authorization: Bearer <token>

{
  "name": "iPhone 15",
  "description": "Latest Apple smartphone with A17 chip",
  "price": 999.99,
  "stock": 100,
  "categoryId": "category-uuid"
}
```

### Create Order

```json
POST /api/orders
Authorization: Bearer <token>

{
  "items": [
    {
      "productId": "product-uuid",
      "quantity": 2
    }
  ],
  "shippingAddress": "123 Main St, City, Country"
}
```

## Running Tests

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:cov

# Run tests in watch mode
npm run test:watch
```

## Screenshots

Place your Postman screenshots in the `images/` folder:

- `images/register.png` - Registration endpoint
- `images/login.png` - Login endpoint
- `images/products.png` - Products endpoint
- `images/orders.png` - Orders endpoint

## Author

**Ankita Prajapati**
- GitHub: [@Ankita0037](https://github.com/Ankita0037)

## License

This project is licensed under the ISC License.
