/**
 * Created by mbadea on 12/7/2018.
 */

demo.state7 = function(){};
demo.state7.prototype ={
    preload: function(){
        game.load.image('volcano','assets/sprite/volcano.png');
        game.load.image('redBall','assets/sprite/redBall.png');
        game.load.image('orBall','assets/sprite/orBall.png');

    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        addChangeStateEventListeners();

        var volcano = game.add.sprite(centerX, 0, 'volcano');
        volcano.anchor.setTo(0.5,-0.8);
        //sau asa  game.add.sprite(centerX, 0, 'volcano').anchor.setTo(0.5,-0.8);

        var emiter = game.add.emitter(centerX, centerY, 2000);
        emiter.makeParticles(['redBall','orBall'], 0,5000, false, true);
        emiter.maxParticleSpeed.set(300, -300);
        emiter.minParticleSpeed.set(-300, -100);
        emiter.gravity = 300;
        //emiter.start(false, 5000, 20); - pusa mai jos sa inceapa dupa 2 sec

        game.time.events.add(2000, function(){
            emiter.start(false, 5000, 20);
            game.time.events.loop(500, function(){
                if(emiter.on){
                    emiter.on = false;
                } else{
                    emiter.on = true;
                }
            })
        })
    },
    update: function(){}
}