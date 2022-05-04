const  UserService=require("../services/UserService")

class userView{


    static createUser(payload){

        

        if(payload===null){
            return {error: "Payload doesn´t exist"}
        }else if((typeof payload.username !== 'string' || payload.username === null) || (typeof payload.name !== 'string' || payload.name === null) || (typeof payload.id !== 'number' || payload.id === null)){
            return {error: "It need a valid value"}
        }else{
            
            return UserService.create(payload.id, payload.username, payload.name)
        } 

    }



}

module.exports=userView