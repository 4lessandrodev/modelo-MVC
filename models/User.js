const database = require("../config/database");

class User{
    constructor() {
        this._id = Number();
        this._email = String();
        this._password = String();
        this.generateId();
    }
    
    get id() {
        return this._id;
    }
    
    get email() {
        return this._email;
    }
    
    get password() {
        return this._password;
    }
    
    set id(value) {
        if (typeof value !== 'number') {
            throw new Error('Informe um id válido: Number');
        } else {
            this._id = value;
        }
    }
    
    set email(value) {
        if (value.trim() === '' || typeof value !== 'string' || !value.includes('@')) {
            throw new Error('Informe um email válido: String');
        } else {
            this._email = value.toLowerCase();
        }
    }
    
    set password(value) {
        if (value.trim() === '' || typeof value !== 'string') {
            throw new Error('Informe uma senha: String');
        } else {
            this._password = value.toLowerCase();
        }
    }

    generateId() {
        if (database.users.length === 0) {
            this._id = 1;
        } else {
            this._id = database.users[database.users.length].id + 1;
        }
    }

    static save(user) {
        database.users.push(user);
    }

    static index() {
        console.table(database.users);
    }
}

module.exports = User;