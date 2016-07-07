angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('myService', [ function($scope){
	var service = {
        getUser: getUser,
        getName: getName
    };
    return service;
    
    function getUser($scope, $firebaseArray, id){
    	debugger;
    	var messagesRef = new Firebase("https://comparte-piso.firebaseio.com/users");
		$scope.messages = $firebaseArray(messagesRef);

	    $scope.messages.$add({
	        emaail: "mail auto",
	        name: "name auto",
	        pass: "pass auto"
      	});

      	return  $scope.messages;
    }

    function getName($scope, $firebaseObject, id){
    	var firebase = new Firebase("https://comparte-piso.firebaseio.com/");
	    var syncObject = $firebaseObject(firebase.child('users').child('0'));	
	    syncObject.$bindTo($scope, "data");
    }
}]);

