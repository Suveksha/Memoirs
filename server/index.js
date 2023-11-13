const express=require('express')
const cors=require('cors')
const { graphqlHTTP } = require('graphql-http')
const { GraphQLSchema } = require('graphql')
const { createHandler } =require('graphql-http/lib/use/express')
const { mongoose }=require('mongoose')
require('dotenv').config({path: './enviroment/.env'})

console.log("URI",process.env.MONGO_CONNECT_URI)
mongoose.connect(process.env.MONGO_CONNECT_URI).then((data)=>{
    console.log("MONGO DB connected.")
}).catch(error=>console.log("Error while connecting to MONGO DB.",error))

const app=express();
// app.all('/graphql', createHandler({ schema }));

app.get("/", function (req, res) {
    res.send({
        "statusCode":"200",
        "statusMessge":"The server is up and running!"
    })
  })

app.listen(process.env.PORT || 4000, ()=>{
    console.log("Server is hosted on port 4000")
})