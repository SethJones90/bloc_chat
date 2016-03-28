(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        vm = this;

        vm.rooms = Room.all;

        vm.getRoom = function(){
            var newRoom = document.getElementById('newRoom').value;
            return newRoom;
        }

         vm.createRoom = function(){
             var newRoom = vm.getRoom();
             console.log(vm.getRoom());

             vm.add = vm.rooms.$add({
                 $value: newRoom
             });

             $uibModalInstance.close(event);
             window.alert('You created a new room! ' + '(' + newRoom + ')');
          }

         vm.cancel = function(){
             $uibModalInstance.dismiss();
        };

 }
    angular
        .module('blocChat')
        .controller('ModalCtrl',['Room','$uibModalInstance', ModalCtrl]);

})();
