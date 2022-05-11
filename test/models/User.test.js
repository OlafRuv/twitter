const User =  require("../../app/models/User.js")

describe("Unit Test for User class", () => {
    test("1) Create an user Object", ()  => {
        const user = new User(1,"OlafRuv", "Olaf", "Bio")
        expect(user.getId()).toBe(1)
        expect(user.getUsername()).toBe("OlafRuv")
        expect(user.getName()).toBe("Olaf")
        expect(user.getBio()).toBe("Bio")
        expect(user.getDateCreated()).not.toBeUndefined()
        expect(user.getLastUpdated()).not.toBeUndefined()
    })

    test("2) Add setters", () => {
        const user = new User(1,"OlafRuv", "Olaf", "Bio")
        user.setUsername("OlafRuv99")
        // user.setUsername = "OlafRuv99"
        user.setBio("This is my bio")
        // user.setBio = "This is my bio"
        expect(user.getUsername()).toBe("OlafRuv99")
        expect(user.getBio()).toBe("This is my bio")
    })
})