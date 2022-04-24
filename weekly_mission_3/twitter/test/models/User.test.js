const User = requiere('./../../app/models/user')

describe("Unit Tests for User class", () => {

    test('Create an User objet', () => {
        // Aqui invocas el codigo que vas usar en tu app
        const user = new User(1, "krlosbyte", "Carlos", "Bio", "dateCreated", "lastUpdated")

        // Aqui validas los resultados de ese codigo
        // Esta es una comparacion que va igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("krlosbyte")
        expect(user.name).toBe("Carlos")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    });

})