(function (){
    function CookieModalCtrl ($uibModalInstance, $cookies) {
        this.input;
        this.error;
        this.createUser = function (input, elem) {
            if (this.input && this.input !== ""){
                $cookies.put('userName', this.input);
                this.closeModal();
            } else {
                this.error = "No name, no ticket";
            }
        }

        this.closeModal = function () {
            $uibModalInstance.close();
            var cookie = $cookies.get('userName');
             console.log(cookie);
        }
    }

    angular
        .module('blocChat')
        .controller('CookieModalCtrl',['$uibModalInstance','$cookies', CookieModalCtrl]);

})();


//$resource
//promises
