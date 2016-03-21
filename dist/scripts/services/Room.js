(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://boiling-fire-2312.firebaseio.com/");
    var roomRef = firebaseRef.child('rooms');
    var rooms = $firebaseArray(roomRef);

    return {
      all: rooms,
    };

  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
