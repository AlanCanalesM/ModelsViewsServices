const user=require("../../app/models/user")

describe("I´m testing the class user", ()=>{

    test("Case 1: creating an object", ()=>{

        const User=new user(2,"AlanCanalesM", "Alan", "I´m a student of software engineering")

        expect(User.id).toBe(2)
        expect(User.username).toBe("AlanCanalesM")
        expect(User.name).toBe("Alan")
        expect(User.bio).toBe("I´m a student of software engineering")
        expect(User.dateCreated).not.toBeUndefined()
        expect(User.lastUpdate).not.toBeUndefined()

    })

    test("Case 2: testing getters",()=>{

        const User=new user(2,"AlanCanalesM", "Alan", "I´m a student of software engineering")

        expect(User.getBio()).toBe("I´m a student of software engineering")
        expect(User.getUsername()).toBe("AlanCanalesM")
        expect(User.getDateCreated()).not.toBeUndefined()
        expect(User.getLastUpdate()).not.toBeUndefined()

    })


})