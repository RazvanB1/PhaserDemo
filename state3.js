/**
 * Created by mbadea on 12/7/2018.
 */

var barrel;
var bullets;
var velocity = 1000; // bulllet speed
var nextFire = 0;
var fireRate = 200;
var enemy;
var bullet;
var enemyGroup;

demo.state3 = function(){};
demo.state3.prototype ={
    preload: function(){
        game.load.image('base', 'assets/sprite/base.png')
        game.load.image('barrel', 'assets/sprite/cannonBarrel.png')
        game.load.image('bullet', 'assets/sprite/bullet.png')
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        addChangeStateEventListeners();

        var base = game.add.sprite(centerX,centerY,'base');
        base.anchor.setTo(0.4);
        base.scale.setTo(1);

        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(50, 'bullet');
        //mai sus am definit 50 de bullets. mai jos le resetam o data ce ies din ecran
        bullets.setAll('checkWorldBounds', true);
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('anchor.y', 0.5);
        //bullets.setAll('scale.x', 0.5);

        barrel = game.add.sprite(centerX,centerY,'barrel');
        barrel.anchor.setTo(0.3);
        barrel.scale.setTo(0.6, 0.6);

        enemy = game.add.sprite(100,200,'spider');
        game.physics.enable(enemy);

        enemyGroup = game.add.group();
        enemyGroup.enableBody = true;
        enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;
        //mai jos creeam enemyes
        for(var i = 0; i< 3; i++){
            //primul arg este x, al 2 lea este y, al 3 este imagiena pe care o folosim
            enemyGroup.create(1300,350 * i + 100,'spider');
        }

    },
    update: function(){
        barrel.rotation = game.physics.arcade.angleToPointer(barrel);
        if(game.input.activePointer.isDown){
            this.fire();
        }
        //se verifica daca bullet loveste paianjenul. primele 2 sunt elementele care se lovesc si al treilea arg este metoda apelata cand se intampla asta
        game.physics.arcade.overlap(bullets, enemy,this.hitEnemy);
        game.physics.arcade.overlap(bullets, enemyGroup,this.hitGroup);
    },
    fire: function(){
        if(game.time.now > nextFire){
            nextFire = game.time.now + fireRate;
            console.log('firing');
            //definire bullet
            bullet = bullets.getFirstDead();
            bullet.reset(barrel.x,barrel.y);

            //to move the bullet to mouse pointer
            game.physics.arcade.moveToPointer(bullet,velocity);
            bullet.rotation = game.physics.arcade.angleToPointer(bullet);
        }

    },
    hitEnemy: function(){
        console.log('hit');
        enemy.kill();
        bullet.kill();
    },
    hitGroup: function(b,e){
        b.kill();
        e.kill();
    }
}