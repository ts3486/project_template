import { Query, Resolver } from "type-graphql";
//Account
import { User } from "../entities/User";
import { IResolvers } from "graphql-tools";
import * as bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../constants";
import { createTokens } from "./auth";


export const resolvers: IResolvers = {
  Query: {
    me: (_, __, { req }) => {
      if (!req.userId) {
        return null;
      }

      return User.findOne(req.userId);
    }
  },
  Mutation: {
    register: async (_, { email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({
        email,
        password: hashedPassword
      }).save();

      return true;
    },

    login: async (_, { email, password }, { res }) => {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return null;
      }

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return null;
      }

      const { accessToken, refreshToken} = createTokens(user)

      res.cookie("refresh-token", refreshToken);
      res.cookie("access-token", accessToken);

      return user;
    },

    invalidateTokens: async (_, __, {req}) => {
      if (!req.userId) {
        return false;
      }

      const user = await User.findOne(req.userId);
      if (!user) {
        return false;
      }
      user.count += 1;
      await user.save();

      // res.clearCookie('access-token')

      return true;
    }
  }
};


//A graphql schema = resolvers = the request function. 