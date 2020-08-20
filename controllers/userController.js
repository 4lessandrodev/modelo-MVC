const User = require('../models/User');

module.exports = {

    create: function (email, senha) {
        try {
            const user = new User();

            user.email = email;
            user.password = senha;
    
            User.save(user);
            return 'Usuário salvo com sucesso!';
            
        } catch (error) {
            return error.message;
        }
    }

};