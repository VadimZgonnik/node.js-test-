// Загрузим mongoose т.к. нам требуется несколько классов или типов для нашей модели
var mongoose = require('mongoose');
// Создаем новую схему!
var userSchema = new mongoose.Schema({
    // Логин
    username:{
        type:String, // тип: String
    },
    email:{
        type:String,
        unique: true// тип: String
    },
    // Пароль
    password:{
        type:String, // тип String
    },
});

// Теперь подключим плагины (внешние модули)

// Компилируем и Экспортируем модель
module.exports = mongoose.model('User',userSchema);