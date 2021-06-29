import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import  { createConnection } from "typeorm";
import { buildSchema } from 'type-graphql'; //allows schemas to be build with tsc classes and decorators. 
//Resolvers
import { HelloWorldResolver } from "./resolvers/HelloWorldResolver";
//Types
import { Request, Response } from 'express';
//
import "reflect-metadata";


//resolvers

(async () => {

    const app = express();

    //creating a db connection with typeorm
    await createConnection();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloWorldResolver]
        }),
        context: ({ req, res }: any) => ({ req, res })
    });
    //This is how you start an apollo server
    apolloServer.applyMiddleware({ app, cors: false });

    app.listen(5000, () => { console.log("Server Running"); });

})().catch((error: any)=>{
    console.log(error, 'error');
})
