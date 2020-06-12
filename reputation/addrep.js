
var fs = require('fs');

var adduser = 1;
var addrepmsg = function(msg){
    //проверил на принятое сообщение в котором есть что-либо
if(msg.content != undefined){
    //получение json инфы
    var tackewarns = fs.readFileSync('./reputation/rep.json');
    var code = JSON.parse(tackewarns);
    tackewarns=undefined;
    //создаём цикл для переборя юзера
        for(var index = 0; index <= code.length-1;index++){
            // преверяем существование юзера
            if(code[index].ID == msg.author.id){
                adduser=0;
                var tackewarns = fs.readFileSync('./reputation/rep.json');
                var stwarns = JSON.parse(tackewarns);
                stwarns[index].msg = stwarns[index].msg+1;
                fs.writeFileSync('./reputation/rep.json', JSON.stringify(stwarns, null, 2), finished);
                function finished(err){
                    console.log('err addwarns');
                }
            }
        }

        if(adduser != 0){
            adduser=undefined;
                var tackewarns = fs.readFileSync('./reputation/rep.json');
                var stwarns = JSON.parse(tackewarns);
                stwarns[stwarns.length] = {ID:msg.author.id, msg:1, muted:0, bans:0};
                fs.writeFileSync('./reputation/rep.json', JSON.stringify(stwarns, null, 2), finished);
                function finished(err){
                    console.log('err adduser in JSON with addrep.js');
                }
        }
    }else{
        console.log('Ошибка в addrep.js');
    }
}

module.exports = addrepmsg;