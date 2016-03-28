(function () {
    function BlocChatCookies($cookies, $uibModal){
       if(!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser =="") {
           $uibModal.open({
               controller: 'CookieModalCtrl as cookieModal',
               templateUrl: '/templates/cookieModal.html'
           })
       }
       function createUser (input, closeModal) {
            $cookies.put(userName, input);
            closeModal();
       }
        return {
            createUser: createUser,
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
