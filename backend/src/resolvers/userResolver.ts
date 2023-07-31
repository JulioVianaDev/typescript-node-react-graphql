import { Query, Resolver } from "type-graphql";
import { User } from "../models/User";

@Resolver()
export class UserResolver{
  private data: User[] = [];
  @Query(()=>[User])
  async hello(){
    return this.data
  }
}