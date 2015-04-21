'use strict';

var Ground = function(game, x, y, width, height) {

  Phaser.TileSprite.call(this, game, x, y, width, height, 'ground');
  this.game.physics.arcade.enableBody(this);
  this.autoScroll(-200,0);
  // initialize your prefab here

  //para o chão não ser afetado pela gravidade
  this.body.allowGravity = false;
  this.body.immovable = true;
};

Ground.prototype = Object.create(Phaser.TileSprite.prototype);
Ground.prototype.constructor = Ground;

Ground.prototype.update = function() {
  
  
  
};



module.exports = Ground;
