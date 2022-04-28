const userService=require("../../app/services/UserService")

describe("Testing for the UserService class", ()=>{

    test("Case 1 creating an object", ()=>{


        const user=userService.create(1, "AlanCanalesM", "Alan")

        expect(user.username).toBe("AlanCanalesM")
        expect(user.name).toBe("Alan")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()


    })


})