/**
 * Created by mbadea on 12/7/2018.
 */

var arrow;
var startPointX;
var startPointY;
var endPointX;
var endPointY;
var swipeDirection;


demo.state8 = function(){};
demo.state8.prototype ={
    preload: function(){
        game.load.image('arrow','assets/sprite/arrow.png');
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        addChangeStateEventListeners();

        arrow = game.add.sprite(centerX, centerY, 'arrow');
        arrow.anchor.setTo(0.5);

        game.input.onDown.add(this.startSwipe);
        game.input.onUp.add(this.getSwipeDirection);
    },
    update: function(){},
    startSwipe: function(){
        startPointX = game.input.x;
        startPointY = game.input.y;
    },
    getSwipeDirection: function(){
        endPointX =game.input.x;
        endPointY = game.input.y;

        if(Math.abs(endPointY - startPointY) < 10 &&  Math.abs(endPointX - startPointX)< 10 ){
            return false;
        }

        if (Math.abs(endPointY - startPointY) < Math.abs(endPointX - startPointX )){
            console.log('horizontal');
            if (endPointX > startPointX){
                swipeDirection = 90;
            } else {
                swipeDirection = 270;
            }

        }else {
            console.log('vertical');
            if (endPointY > startPointY){
                swipeDirection = 180;
            } else {
                swipeDirection = 0;
            }
        }

        arrow.angle = swipeDirection;
    }
}