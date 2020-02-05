# Inventory System
Build a Simple Inventory Management System API

# Requirement

Using the CRUD HTTP API over a local MongoDB instance as your database back-end, build a logging API for supermarket purchase receipts that has the following functionality:

## Prerequisites
1. [Node js](https://nodejs.org/en/)
2. [Postman](https://www.getpostman.com/) To test the endpoints
3. Any text Editor
4. [Git](https://git-scm.com/downloads)
4. Local MongoDB instance

## Installing

Clone this project

```shell
npm install
npm start
```
make your environment variable `.env file`
Fill in this data for mongodb
```
server=
database=
```

## Test
```shell
No test for now
```

## Features
- Ability to log purchase receipts
- Ability to query DB for total sales in a given month
- Ability to query DB for complete product list
- Ability to add/modify/delete products
- Ability to query DB for monthly sales by product

## API Routes

| HTTP verb | Routes  | Description |
|-----------| ------------- | ------------- |
| GET | /api/v1/products | Get all products |
| POST | /api/v1/products/add | add a product - params [name, amount]|
| DELETE | /api/v1/products/:id | Delete a specific product by id |
| PUT | /api/v1/products/:id | Update a particular product [name, amount] |
| GET | /api/v1/purchase/:id  | Purchase a product and get receipt [quantity]  |
| GET | /api/v1/total  | Get total sale in a month [takes a query params month] |
| GET | /api/v1/month  | get monthly sale by product [takes a query param product]|
