/**
 * Created by mbadea on 12/7/2018.
 */

demo.state3 = function(){};
demo.state3.prototype ={
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        addChangeStateEventListeners();
    },
    update: function(){}
}