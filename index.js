// объявление дискорда
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
bot.commands = new Discord.Collection(); 
// подключаю список похих слов
const bwfunc = require('./bedwords/bwfunc.js');
//const bwords = bwfunc.bwcheck;
// подключение файла для получения токена и префикса
let config = require('./botconfig.json');
let warns = require('./bedwords/warns.json');
let addrep = require('./reputation/addrep.js');
// после этого достаём префикс и токен для подключения
let token = config.token;
let prefix = config.prefix;
// создаём ссылку для приглашения бота
bot.on('ready',() =>{
    console.log('Бот запущен '+bot.user.username);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => {
        console.log(link);
    });

    fs.readdir('./funct', (err, files) => {
        if (err) console.log(err);
    
        let jsfile = files.filter(f => f.split('.').pop() === 'js');
        if (jsfile.length <= 0) return console.log('Команды не найдены!');
    
        console.log(`Loaded ${jsfile.length} commands`);
        jsfile.forEach((f, i) => {
            let props = require(`./funct/${f}`);
            bot.commands.set(props.help.name, props);
        });
    }); // чтение папки commands

});
//команда, и то она должна выполнить

const cmdRep = prefix+'rep';
const cmdClear = require('./funct/clear.js');

bot.on('message', msg =>{
    var authorid = msg.author.id;
    switch(msg.content){
        case cmdRep:
            //вызыв функции
        break;
        default:
            require('./bedwords/bwfunc.js')(msg);
        break; 
    }

    let messageArray = message.content.split(' ')
    let command = msgArray[0]
    let args = msgArray.slice(1)
    let command_file = bot.commands.get(command.slice(prefix.length))
    if (command_file) command_file.run(client, message, args)

    if (msg.content.startsWith(prefix + "hi")) {
        msg.channel.send('Hello!')
    }

});


bot.login(token);
