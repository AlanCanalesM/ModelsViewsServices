const userService=require("../../app/services/UserService")

describe("Testing for the UserService class", ()=>{

    test("Case 1 creating an object", ()=>{


        const user=userService.create(1, "AlanCanalesM", "Alan")

        expect(user.username).toBe("AlanCanalesM")
        expect(user.name).toBe("Alan")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()


    })

    test("Case 2 get all user data in a list", ()=>{

        const user = userService.create(1, "AlanCanalesM", "Alan")
        const dataUser = userService.getInfo(user)
        expect(dataUser[0]).toBe(1)
        expect(dataUser[1]).toBe("AlanCanalesM")
        expect(dataUser[2]).toBe("Alan")
        expect(dataUser[3]).not.toBeUndefined()



    })

    test("Case 3 update username",()=>{


        const user=userService.create(1,"AlanCanalesM", "Alan")
        userService.updateUserName(user, "ArturoCanalesM")
        expect(user.name).toBe("ArturoCanalesM")

    })


})