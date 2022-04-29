const user=require("../models/user")


class userService{

    static create(id, username, name){

       return new user(1, "AlanCanalesM", "Alan", "Without Bio")

    }

    static getInfo(user){

        const data=[]
        data.push(user.id)
        data.push(user.username)
        data.push(user.name)
        data.push(user.bio)

        return (data)


    }
    
    static updateUserName(user, name){

        user.name=name
        
    }


    
}

module.exports=userService