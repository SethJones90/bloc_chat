(function() {
    function HomeCtrl(Room) {
        this.text = "TEST"
        this.rooms = Room.all;
        console.log(this.rooms);
//        this.rooms = [];
//            for (var i=0; i < 12; i++) {
//            this.rooms.push(i);
//            console.log(this.rooms);
//        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
 })();
