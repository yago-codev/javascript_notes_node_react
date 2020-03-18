const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String, 
    required: true,
    unique: true,
  },
  password: {
    type: String, 
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

// operação realizada antes dos dados serem persistidos na tabela
userSchema.pre('save', function(next) {
  if (this.isNew || this.isModified('password')) {
    bcrypt.hash(this.password, 10, (err, hashedPassword) => {
      if (err) {
        next(err);
      } else {
        this.password = hashedPassword;
        next();
      }
    });
  }
});

// método auxiliar do mongoose: será utilizado para fazer a verificação da senha na rota de autenticação.
userSchema.methods.validatePassword = function(password, callback) {
  // comparando o password informado pelo usuário com o password do banco de dados
  bcrypt.compare(password, this.password, function(err, same) {
    if (err)
      callback(err);
    else 
      callback(err, same);
  });
}

module.exports = mongoose.model('User', userSchema);