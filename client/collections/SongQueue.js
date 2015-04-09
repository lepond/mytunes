// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  

  initialize: function(){
  this.on('add', function () {
    if (this.length === 1) {
      this.playFirst();
    }
  }, this);
  this.on('dequeue', this.dequeue, this);
  this.on('ended', function (){ 
    this.shift();
    if (this.length) {
    this.playFirst();
     }
    }, this);
  },


  dequeue: function (){
    this.shift();
  },

  addSong: function (){
    // if song is only song in queue
      //play song
    // if song is not only song in queue
      //do nothing
  },

  endedSong: function () {
    // removes song from the queue
    // if there are songs left in queue
      //play first song in queue
    // if no songs left in queue
      //do nothing
  },

  playFirst: function (){
    this.at(0).play();
  }

});
