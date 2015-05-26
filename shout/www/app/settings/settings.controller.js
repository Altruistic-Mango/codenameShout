angular
  .module('shout.settings')
  .controller('SettingsCtrl', SettingsCtrl);

SettingsCtrl.$inject = ['$state', '$ionicHistory'];

function SettingsCtrl($state, $ionicHistory) {
  console.log('SettingsCtrl');

  var vm = this;

  vm.radius = 5; //TODO: determine an appropriate initial value
  vm.TTL = 5; //TODO: determine an appropriate initial value
  vm.watch = true; 
  vm.acceptSettings = acceptSettings;

  function acceptSettings() {
    //do something with the settings, probably involving sending the information
    //to the settings factory
    //then go back to the last view
    
    if ($ionicHistory.backView()) {
      $state.go('tab.' + $ionicHistory.backTitle().toLowerCase());
    } else {
      $state.go('tab.inbox');
    }
    console.log('radius set to: ', parseInt(vm.radius));
    console.log('TTL set to: ', parseInt(vm.TTL))
  }

}
