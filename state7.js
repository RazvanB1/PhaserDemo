/**
 * Created by mbadea on 12/7/2018.
 */

demo.state7 = function(){};
demo.state7.prototype ={
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state7');

        addChangeStateEventListeners();
    },
    update: function(){}
}