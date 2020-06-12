var fs = require('fs');

var adduserwarn = 0;


var giveWarn = function(beduser){
    var tackewarns = fs.readFileSync('./bedwords/warns.json');
    var code = JSON.parse(tackewarns);
    tackewarns = undefined;
    for(var index = 0; index <= code.length-1;index++){
        if(code[index].ID == beduser){
            if(code[index].warns < 3){
                //обновляем JSON файл фарнов
                let tackewarns = fs.readFileSync('./bedwords/warns.json');
                var stwarns = JSON.parse(tackewarns);
                stwarns[index].warns = stwarns[index].warns+1;
                fs.writeFileSync('./bedwords/warns.json', JSON.stringify(stwarns, null, 4), finished);
                function finished(err){
                    console.log('err addwarns');
                }
            }else{
                //eсли варнов 3 и более, то
                code[index].warns = 0;
                //funct mute user
                console.log('Вам мут');
                //....
                //Корректирока JSON warns
                let tackewarns = fs.readFileSync('./bedwords/warns.json');
                var stwarns = JSON.parse(tackewarns);
                stwarns[index].warns = code[index].warns;
                console.log(stwarns);
                fs.writeFileSync('./bedwords/warns.json', JSON.stringify(stwarns, null, 4), finished);
                function finished(err){
                    console.log('err adduser in JSON');
                }
            }
        }else{
            adduserwarn++;
        }
    }

    if(adduserwarn == code.length){
        //добавить человека в базу json
        var tackewarns = fs.readFileSync('./bedwords/warns.json');
        var stwarns = JSON.parse(tackewarns);
        stwarns[stwarns.length] = {ID:beduser, warns:1};
        console.log(stwarns);
        fs.writeFileSync('./bedwords/warns.json', JSON.stringify(stwarns, null, 2), finished);
        function finished(err){
            console.log('err adduser in JSON');
        }
    }
    adduserwarn=undefined;
}

module.exports = giveWarn;




//var warnlist = JSON.parse(require('fs').readFileSync(__dirname + '/warns.json', 'utf8'));
//console.log(warnlist);    
//warnlist.Push("4+':'+2");
//fs.readFile('./warns.json', (err, data) =>{
//    fs.writeFile("./warns.json", JSON.stringify(warnlist));
//});