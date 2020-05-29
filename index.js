// объявление дискорда
const Discord = require('discord.js');
const bot = new Discord.Client();
// подключение файла для получения токена и префикса
let config = require('./botconfig.json');
// после этого достаём префикс и токен для подключения
let token = config.token;
let prefix = config.prefix;
// создаём ссылку для приглашения бота
bot.on('ready',() =>{
    console.log('Бот запущен '+bot.user.username);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => {
        console.log(link);
    });
});
//команда, и то она должна выполнить
bot.on('message', msg =>{
    if(msg.content === prefix+'region'){
        msg.reply('Регион сервера ' + msg.region);
    }
    console.log(msg);
    if(msg.content === prefix+'play'){
        msg.reply('Имя отправителя '+ msg.author.username + ' Текст сообщения << '+msg.content+' >>');
    }
});
