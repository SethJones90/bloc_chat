(function() {
    function ModalCtrl(Room, $uibModalInstance) {

        this.rooms = Room.all;
        this.getRoom = function(){
            var newRoom = document.getElementById('newRoom').value;
            return newRoom;
        }

         this.createRoom = function(){
             var newRoom = this.getRoom();
             console.log(this.getRoom());

             this.add = this.rooms.$add({
                 $value: newRoom
         });
             $uibModalInstance.close(event);
             window.alert('You created a new room! ' + '(' + newRoom + ')');
          }

         this.cancel = function(){
             $uibModalInstance.dismiss();
        };

 }
    angular
        .module('blocChat')
        .controller('ModalCtrl',['Room','$uibModalInstance', ModalCtrl]);

})();
