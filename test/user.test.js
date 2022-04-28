const user=require("./../app/user")

describe("I´m testing the class user", ()=>{

    test("Case 1: creating an object", ()=>{

        const User=new user(2,"AlanCanalesM", "Alan", "I´m a student of software engineering")

        expect(User.id).toBe(2)
        expect(User.username).toBe("AlanCanalesM")
        expect(User.name).toBe("Alan")
        expect(User.bio).toBe("I´m a student of software engineering")

    })


})