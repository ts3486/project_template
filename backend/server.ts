import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from "typeorm";

// import { buildSchema, NonEmptyArray } from 'type-graphql'; //allows schemas to be build with tsc classes and decorators. 
//Resolvers
import { resolvers } from "./resolvers/resolvers";
//Types
import { typeDefs } from "./typeDefs/typeDefs";
import { Request, Response } from 'express';
//Account
import cookieParser from "cookie-parser";
import { verify } from "jsonwebtoken";
import { REFRESH_TOKEN_SECRET, ACCESS_TOKEN_SECRET } from "./constants";
//
import "reflect-metadata";
import { createTokens } from "./resolvers/auth";
import { User } from './entities/User';


//resolvers

(async () => {

    const app = express();

    //creating a db connection with typeorm
    await createConnection();

    const apolloServer = new ApolloServer({
        typeDefs, 
        resolvers,
        context: ({ req, res }: any) => ({ req, res })
    }); 

    app.use(cookieParser());

    app.use(async (req: any, res, next) => {
        const refreshToken = req.cookies[ "refresh-token" ];
        const accessToken = req.cookies[ "access-token" ];
        if (!refreshToken && !accessToken) {
            return next();
        }

        try {
            const data = verify(accessToken, ACCESS_TOKEN_SECRET) as any;
            (req as any).userId = data.userId;
            return next();
        } catch {}
        
        if (!refreshToken) {
            return next();
        }

        let data;

        try {
            data = verify(refreshToken, REFRESH_TOKEN_SECRET) as any;

        } catch {
            return next();
        }
        
        const user = await User.findOne(data.userId);

        if (!user || user.count === data.count) {
            return next();
        }


        const tokens = createTokens(user);
        res.cookie("refresh-token", refreshToken);
        res.cookie("access-token", accessToken);
        req.userId = user.id;

        next();
    });

    
    //This is how you start an apollo server
    apolloServer.applyMiddleware({ app, cors: false });

    app.listen(5000, () => { console.log("Server Running"); });

})().catch((error: any)=>{
    console.log(error, 'error');
})
