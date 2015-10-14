angular.module('starter.controller', ['ionic'])

.controller('HomeCtrl', function($scope, $rootScope, $ionicActionSheet, $timeout) {
  var vm = this;
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	// Form data for the login modal
	$scope.loginData = {};

	// Triggered on a button click, or some other target
 $scope.show = function() {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>Traduzir</b>' },
       { text: '<b>Melhorar</b>' },
       { text: '<b>Salvar</b>' }
     ],
     titleText: 'Deseja enviar por e-mail seu Elevator Pitch para',
     cancelText: 'Cancelar',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }
   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
  }, 8000);

 };
});
