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

    test("Case 4 given a list of users give me the list of usernames",()=>{

        const user1= userService.create(2, "AlanC1", "Alan")
        const user2= userService.create(3, "AlanC2", "Alan")
        const user3= userService.create(4, "AlanC3", "Alan")

        const userNames= userService.getAllUsernames([user1, user2, user3])

        expect(userNames).toContain("AlanC1")
        expect(userNames).toContain("AlanC2")
        expect(userNames).toContain("AlanC3")
    })


})