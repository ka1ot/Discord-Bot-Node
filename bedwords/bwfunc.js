const Discord = require('discord.js');
const bot = new Discord.Client();
// подключаю список похих слов
const bwlist = require('./bwlist.json');
const bwords = bwlist.bedwords;

var bwcheck = function(msg){
    var bedwordsinthemsg = 0;
    var arrmsg = msg.content.split(' ');
    for(var msgindex=0;msgindex<=arrmsg.length-1;msgindex++){
    arrmsg[msgindex] = arrmsg[msgindex].toLowerCase();
        for(var bwordsindex = 0;bwordsindex <= bwords.length-1; bwordsindex++){
            if(arrmsg[msgindex] == bwords[bwordsindex]){
                require('./warns.js')(msg.author.id);
                msg.delete(msg.content);
                return msg.reply('Ты бяка, материться плохо! :yum::poop:');
                bedwordsinthemsg++;
            }
        }
    }
    //вызываем функцию для реп листа и отсекаем добавление бота в него
    if(bedwordsinthemsg == 0){
        if(msg.author.id != '648953830255362078'){
        require('./../reputation/addrep.js')(msg);
        }
    }
    bedwordsinthemsg=undefined;
}

module.exports = bwcheck;
