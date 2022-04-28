const user=require("../models/user")


class userService{

    static create(id, username, name){

       return new user(1, "AlanCanalesM", "Alan", "Without Bio")

    }

    
}

module.exports=userService