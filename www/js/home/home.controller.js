angular.module('app.controllers', ['firebase'])
.controller('homeCtrl', function($scope, $firebaseObject,  $firebaseArray, myService){
  	    $scope.data;
	    $scope.allData;
	   	
	  //  var syncArray = $firebaseArray(firebase.child('users'));
	  //  syncArray.$bindTo($scope, "allData");

	 	$scope.test = myService.getName($scope, $firebaseObject, "test");
      	$scope.messages = myService.getUser($scope, $firebaseArray, "test");

		console.log($scope.user);
	   /* firebase.on("value", function(addedSnap) {
	        var item = addedSnap.val();
	        vm.data = item;
	        console.log(vm.data.);
	    });*/
})
