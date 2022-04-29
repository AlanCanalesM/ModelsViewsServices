const user=require("../models/user")


class userService{

    static create(id, username, name){

       return new user(id, username, name, "Without Bio")

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

    static getAllUsernames(usuarios){

        const usernames=[]

        usernames.push(usuarios[0].username)
        usernames.push(usuarios[1].username)
        usernames.push(usuarios[2].username)

        return (usernames)

    }


    
}

module.exports=userService