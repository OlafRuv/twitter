const User = require("../models/User")

class UserService{
    static create(id, username, name){
        return new User(id,username,name,"Sin Bio")
    }

    static getInfo(user){
        const list = []
        list[0] = user.getId()
        list[1] = user.getUsername()
        list[2] = user.getName()
        list[3] = user.getBio()
        return list
    }

    static updateUserUsername(user, newUserName){
        user.setUsername(newUserName)
    }
}

module.exports = UserService