import { Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";

@Resolver()
export class UserResolver{
  private data: User[] = [];

  @Query(()=>[User])
  async users(){
    return this.data
  }
  @Mutation(()=>User)
  async craeteUser(){
    const user ={id: '1',name: "Tomate"}
    this.data.push(user)
    return user
  }
}