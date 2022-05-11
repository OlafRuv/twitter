const User = require("../models/User")

class UserService{
    static create(id, username, name){
        return new User(id,username,name,"Sin Bio")
    }

    static getInfo(user){
        const list = [
            user.getId(),
            user.getUsername(),
            user.getName(),
            user.getBio()
        ]
        return list
    }

    static updateUserUsername(user, newUserName){
        user.setUsername(newUserName)
    }

    static getAllUsernames(listUsers){
        const list = []
        listUsers.forEach(user => {
            list.push(user.getUsername())
        });
        return list
    }
}

module.exports = UserService