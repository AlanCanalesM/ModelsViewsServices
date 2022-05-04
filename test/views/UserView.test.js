const userView=require("../../app/views/UserView")
const UserService=require("../../app/services/UserService")

describe("Test for class UserView", ()=>{


    test("Return an error when try to create a new user with a null payload", ()=>{


        const payload = null
        const result = userView.createUser(payload)

        expect(result.error).toMatch(/Payload doesn´t exist/)

    })

    


})