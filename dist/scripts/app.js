(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });

         $stateProvider
             .state('rooms', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
             })

             .state('chatRoom', {
                url: '/chatroom',
                controller: 'chatRoomCtrl as chatRoom',
                templateUrl: '/templates/chatRoom.html'
             });
    }

    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config);
})();

