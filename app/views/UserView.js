const   UserService=require("../services/UserService")

class userView{


    static createUser(payload){

        if(payload==null){
            return {error: "Payload doesn´t exist"}
        }else if(payload.username == null || payload.username !== 'string' || payload.name == null ||
        payload !== 'string' || payload.id == null || payload.id !== 'number'){

            return {error: "It need a valid value"}
        }

    }



}

module.exports=userView