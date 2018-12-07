/**
 * Created by mbadea on 12/7/2018.
 */

demo.state4 = function(){};
demo.state4.prototype ={
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state4');

        addChangeStateEventListeners();
    },
    update: function(){}
}