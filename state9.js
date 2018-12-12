/**
 * Created by mbadea on 12/7/2018.
 */

var texte;

demo.state9 = function(){};
demo.state9.prototype ={
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        addChangeStateEventListeners();

        texte = 'Months on ye at by esteem desire warmth former. Sure that that way gave any fond now. His boy middleton sir nor engrossed affection excellent. Dissimilar compliment cultivated preference eat sufficient may. Well next door soon we mr he four. Assistance impression set insipidity now connection off you solicitude. Under as seems we me stuff those style at. Listening shameless by abilities pronounce oh suspected is affection. Next it draw in draw much bred.';

        game.add.text(100, 400, 'hello', {fontSize: '100px', fill: '#fff'});

        this.spellOutText(100, 100, 1000, texte, 50, 40 ,'#fff');
    },
    spellOutText: function(x, y, width, text, fontSize, speed, fill, font){
        var sentence = game.add.text(x,y, '', {fontSize: fontSize +'px', fill: fill, font: font});
        var loopVar = game.time.events.loop(speed, addChar);

        var index = 0;

        function addChar() {
            sentence.text += texte[index];
            index++;
        }
    }
}