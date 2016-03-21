(function() {
  function Message($firebaseArray) {
    var firebaseRef = new Firebase("https://boiling-fire-2312.firebaseio.com/");
    var messagesRef = firebaseRef.child('messages');
    var messages = $firebaseArray(messagesRef);

    Message.all = function() {
        return messages;
    };

    Message.create = function(message) {
        return messages.$add(message);
    };

    Message.delete = function(message) {
        messages.$remove(message);
    };

    Message.findByRoom = function(roomId, callback) {
        messagesRef.orderByChild('roomId').equalTo(roomId).once('value', function(snapshot) {
            callback(snapshot.val());
            console.log(snapshot.val());
        });
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
