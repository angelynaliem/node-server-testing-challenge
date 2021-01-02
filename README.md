# Welcome to African Marketplace 199 API

The deployed link for the API is; https://africanmarketplace199.herokuapp.com/

## Endpoints

### Auth

1. To Register: https://africanmarketplace199.herokuapp.com/api/auth/register

- POST
- Data shape:
  {
  "username": "ADD USERNAME OF YOUR CHOOSING",
  "password": "ADD PASSWORD OF YOUR CHOOSING",
  "email": "ADD EMAIL OF YOUR CHOOSING"
  }

2. To Login: https://africanmarketplace199.herokuapp.com/api/auth/login

- POST
- Data shape:
  {
  "username": "YOUR REGISTERED USERNAME",
  "password": "YOUR REGISTERED PASSWORD"
  }
- Provided dummy user so you can login with registration with data shape:
  {
  "username": "santaclaus",
  "password": "password
  }
- Upon successful login, a Bearer token is provided. Store the token in the authorization header so you can access restricted API routes.

### Users

3. To get a list of all products sold by all users: https://africanmarketplace199.herokuapp.com/api/users

- GET

4. To get a list of all products sold by a specified user id: https://africanmarketplace199.herokuapp.com/api/users/:id

- GET

### Products

5. To add a new product for a specified user id: https://africanmarketplace199.herokuapp.com/api/products

- POST
- Example data shape:
  {
  "name": "cream cheese" STRING,
  "description": "best cream cheese you've ever tasted" STRING,
  "price": 499 FLOAT,
  "locationId": 1 INTEGER (See below table for location number references),
  "categoryId": 1 INTEGER (See below table for category number references),
  "userId": 1 INTEGER (This is the user id you're given when you register/login)
  }

6. To see a specified product id: https://africanmarketplace199.herokuapp.com/api/products/:id

- GET
- The id in the link refers to the product id, not the user id

7. To update an existing product: https://africanmarketplace199.herokuapp.com/api/products/:id

- PUT
- The id in the link refers to the product id, not the user id
- Example data shape:
  {
  "name": "organic cream cheese" STRING,
  "description": "best organic cream cheese you've ever tasted" STRING,
  "price": 899 FLOAT,
  "locationId": 2 INTEGER (See below table for location number references),
  "categoryId": 1 INTEGER (See below table for category number references),
  "userId": 1 INTEGER (This is the user id you're given when you register/login)
  }

8. To delete an existing product: https://africanmarketplace199.herokuapp.com/api/products/:id

- DELETE
- The id in the link refers to the product id, not the user id

_Location_

| Location    | Number |
| ----------- | ------ |
| Kenya       | 1      |
| Uganda      | 2      |
| Tanzania    | 3      |
| Rwanda      | 4      |
| South Sudan | 5      |
| Burudni     | 6      |
| DRC         | 7      |

_Category_

| Category        | Number |
| --------------- | ------ |
| Animal Products | 1      |
| Beans           | 2      |
| Cereal - Maize  | 3      |
| Cereal - Other  | 4      |
| Cereal - Rice   | 5      |
| Fruits          | 6      |
| Other           | 7      |
| Peas            | 8      |
| Roots & Tubers  | 9      |
| Seeds & Nuts    | 10     |
| Vegetables      | 11     |
