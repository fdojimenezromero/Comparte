angular.module('app.controllers', ['firebase'])
.controller('comprasCtrl', function($scope, $firebaseObject,  $firebaseArray){
  	    $scope.data;
	    $scope.allData;
	    var firebase = new Firebase("https://comparte-piso.firebaseio.com/");
	    var syncObject = $firebaseObject(firebase.child('users').child('0'));	
	    syncObject.$bindTo($scope, "data");

	  //  var syncArray = $firebaseArray(firebase.child('users'));
	  //  syncArray.$bindTo($scope, "allData");

	   var messagesRef = new Firebase("https://comparte-piso.firebaseio.com/users");
	   $scope.messages = $firebaseArray(messagesRef);

	    $scope.messages.$add({
	        emaail: "mail auto",
	        name: "name auto",
	        pass: "pass auto"
      	});


		console.log($scope.user);
	   /* firebase.on("value", function(addedSnap) {
	        var item = addedSnap.val();
	        vm.data = item;
	        console.log(vm.data.);
	    });*/
})
