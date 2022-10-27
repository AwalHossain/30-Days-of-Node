const express = require('express');
const {buildSchema} = require('graphql');
const {graphqlHTTP} =require('express-graphql')

const port = 5000;


const schema = buildSchema(`
    type Query{
        description: String,
        price: Float
    }
`)

const app = express();

const root = {
    description: 'Red Shoe',
    price: 42.12,
}


app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root
}))

app.listen(port, ()=>{
    console.log(`This server is running on ${port}`);
})