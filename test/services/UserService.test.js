const UserService = require('../../app/services/UserService')
// Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
// Criterios de aceptación:
// 1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
// 2. El valor de `bio` deberá ser por default para todos los `user` creados.

// Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.

// Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 

// Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos. 

describe("Test for User Service", () => {
    test("1) Create a new user using the UserService", () => {
        const user = UserService.create(1,"OlafRuv","Olaf")
        expect(user.username).toBe("OlafRuv")
        expect(user.name).toBe("Olaf")
        expect(user.bio).not.toBeUndefined()
    })

    test("2) Getting info from user", () => {
        const user = UserService.create(1,"OlafRuv","Olaf")
        infoList = UserService.getInfo(user)
        expect(infoList[0]).toBe(1)
        expect(infoList[1]).toBe("OlafRuv")
        expect(infoList[2]).toBe("Olaf")
        expect(infoList[3]).toBe("Sin Bio")
    })

    test("3) Updating User Username", () => {
        const user = UserService.create(1,"OlafRuv","Olaf")
        UserService.updateUserUsername(user,"OlafRuv99")
        expect(user.username).toBe("OlafRuv99")
    })

    test("4) Get all usernames from user list", () => {
        const user1 = UserService.create(1,"OlafRuv","Olaf")
        const user2 = UserService.create(1,"Max1000","Max")
        const user3 = UserService.create(1,"Andrea0.0","Andrea")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("OlafRuv")
        expect(usernames).toContain("Max1000")
        expect(usernames).toContain("Andrea0.0")
    })

})