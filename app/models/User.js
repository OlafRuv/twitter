// Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
// Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
// Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
// Solución: Agrega los getters regresando la propiedad indicada, no olvides usar `this`.
// Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
// Solución: Agrega los setters usando la palabra `set` y modificando el atributo indicado.
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