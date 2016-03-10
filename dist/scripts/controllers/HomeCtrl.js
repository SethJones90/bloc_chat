(function() {
    function HomeCtrl(Room, $uibModal) {
        this.text = "TEST"
        this.rooms = Room.all;
        console.log(this.rooms);

        this.open = function (){

            var modalInstance = $uibModal.open({
            controller: 'ModalCtrl as modal',
            templateUrl: '/templates/modal.html'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
 })();
