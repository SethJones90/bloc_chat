(function() {
    function HomeCtrl(Room, Message, $uibModal, $scope, $firebase, $cookies) {
        vm = this;
        vm.activeRoom = null;
        vm.rooms = Room.all;
//        console.log(vm.rooms);

        vm.messages = Message.all;
//        console.log(vm.rooms);

        vm.open = function (){
            console.log($uibModal);
            var modalInstance = $uibModal.open({
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html'
            });
        };

        vm.setMessages = function(messages) {
            vm.messages = messages
        };

        vm.getActiveRoom = function(room) {
            vm.activeRoom = room;
//            console.log(vm);
            Message.findByRoom(room.$id, vm.setMessages);
        };

        vm.createMessage = function(message){
//            console.log(vm);
            message.userName = $cookies.get('userName');
            message.SentAt = Firebase.ServerValue.TIMESTAMP;
            message.roomId = vm.activeRoom.$id;
            Message.create(message);
            Message.findByRoom(vm.activeRoom.$id, vm.setMessages);
        };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$scope', '$firebase', '$cookies', HomeCtrl]);
 })();

