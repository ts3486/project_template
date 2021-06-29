import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  hello(){
    return "hi!";
  }
}


//A graphql schema = resolvers = the request function. 