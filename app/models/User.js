class User{
    constructor(id, username, name, bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()      
    }

    getId(){
        return this.id;
    }

    getUsername(){
        return this.username;
    }

    getName(){
        return this.name;
    }

    getBio(){
        return this.bio;
    }

    getDateCreated(){
        return this.dateCreated;
    }

    getLastUpdated(){
        return this.lastUpdated;
    }

    setUsername(username){
        this.username = username
    }    

    setBio(bio){
        this.bio = bio
    }

}

module.exports = User