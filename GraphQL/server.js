const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql')

const port = 5000;


const schema = buildSchema(`
    type Query{
        prooducts: [Product]
        order: [Order]
    }

    type Product {
        id: ID!
        description: String!
        price: Float!
        reviews: [Review]
    }

    type Review {
        rating: Int!
        comment: String
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
`)

const app = express();

const root = {
    products: [
        {
            id: 'redshoe',
            description: "Red Shoe",
            price: 42.12
        },
        {
            id: 'bluejeans',
            description: "Blue Jeans",
            price: 55.55,
        }
    ],
    orders: [
        {
            data: '2005-05-05',
            subtotal: 90.22,
            items: [
                {
                    product: {
                        id: 'redhsoe',
                        description: "Red Shoe",
                        price: 42.12
                    }
                }
            ]
        }
    ]
}


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`This server is running on ${port}`);
})