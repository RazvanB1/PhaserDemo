/**
 * Created by mbadea on 12/7/2018.
 */

var texte;
WebFontConfig = {
    google: { families: ['Gamja Flower', 'Poppins']}
}

demo.state = function(){};
demo.state.prototype ={
    preload: function(){
        game.load.script('webfont','//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        addChangeStateEventListeners();

        texte = 'Months on ye at by esteem desire warmth former. Sure that that way gave any fond now. His boy middleton sir nor engrossed affection excellent. Dissimilar compliment cultivated preference eat sufficient may. Well next door soon we mr he four. Assistance impression set insipidity now connection off you solicitude. Under as seems we me stuff those style at. Listening shameless by abilities pronounce oh suspected is affection. Next it draw in draw much bred.';

       // game.add.text(100, 400, 'hello', {fontSize: '100px', fill: '#fff'});

        this.spellOutText(100, 100, 1000, texte, 30, 40 ,'#fff', 'Gamja Flower');
        this.spellOutText(100, 600, 1000, texte, 30, 20 ,'#4fa', 'Poppins');
    },
    spellOutText: function(x, y, width, text, fontSize, speed, fill, font){
        var sentence = game.add.text(x,y, '', {fontSize: fontSize +'px', fill: fill, font: font});
        var currentLine = game.add.text(10,10, '', {fontSize: fontSize +'px', font: font});
        currentLine.alpha = 0; //alpha echivalentul petrnu opacity
        var loopVar = game.time.events.loop(speed, addChar);

        var index = 0;

        function addChar() {
            sentence.text += texte[index];
            currentLine.text += texte[index];

            if(currentLine.width > width && texte[index] == ' '){
                sentence.text += '\n';
                currentLine.text = '';
            }
            if(index >= texte.length - 1){
                game.time.events.remove(loopVar);
                console.log('stop');
            }

            index++;
        }
    }
}