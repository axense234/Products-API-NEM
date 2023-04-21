# **Products API NEM**

A node, express, mongodb with mongoose simple project that i created in order to test my skills and play around with the mongodb database using mongoose.

## **Description**

A node, express, mongodb with mongoose simple project that i created in order to test my skills and play around with the mongodb database using mongoose.
The project is built around a Product model where a product has a name, tag, macros(for 100g), price, original price(original price before all sales), sale(format: "procentageNumber%"), purchases, expiration date.

Also the Product model has a method that, on product creation, if an initial sale was provided along with a price, it will automaticly change that price based on the sale procentage and another method that, on trying to update a product's sale through the normal update request, if a sale, an id and the original price of the product with the mentioned id are provided, the pre method will fire and update the update query details, otherwise it will just move along(using next()).

## **Getting Started**

### Dependencies

- check package.json for details
- might also want to have a mongodb database(through mongodb atlas preferably)

### Installing

- Clone the repository and move into it

```
git clone https://github.com/axense234/Notes-API-NEM.git
cd Notes-API-NEM
npm install
```

- Rename **.env.sample** to **.env** and put your own environment variables
  - **MONGO_URU** = the uri of your mongodb database
  - **SECRET_JWT_KEY** = a random, secret key for jwt use
  - **SWAGGER_UI_PASS** = the pass for your swagger authorization route
  - **SWAGGER_UI_USERNAME** = the username for your swagger authorization route
- **OPTIONAL**: if you want you can create a **nodemon.json** config file so that nodemon can watch .yaml files too(useful during development) with the following content:

```
{
    "ext": ".js, .mjs, .coffee, .litcoffee, .json, .yaml"
}
```

### Executing program

- Test the server using nodemon

```
npm test
```

## **Authors**

- axense234(me)

## **Version History**

- 1.0.0
  - First release after refactoring some code in here for fun
  - See [commit change](https://github.com/axense234/Notes-API-NEM/commits/master) or see [release history](https://github.com/axense234/Notes-API-NEM/releases)
