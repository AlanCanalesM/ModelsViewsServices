const userView=require("../../app/views/UserView")
const UserService=require("../../app/services/UserService")

describe("Test for class UserView", ()=>{


    test("Return an error when try to create a new user with a null payload", ()=>{


        const payload = null
        const result = userView.createUser(payload)

        expect(result.error).toMatch(/Payload doesn´t exist/)

    })

    test("test 2 return an error when try create an user with invalid propierties", ()=>{


        const payload ={username: null, name: "Alan", id: 2}
        const result = userView.createUser(payload)

        expect(result.error).toMatch("It need a valid value")



    })

    test("test 3 create a valid user", ()=>{

        const payload = {username:"AlanCanalesM", name:"Alan", id:1}

        const result = userView.createUser(payload)

        expect(result.id).toBe(1)
        expect(result.username).toBe("AlanCanalesM")
        expect(result.name).toBe("Alan")
        
    })

    


})