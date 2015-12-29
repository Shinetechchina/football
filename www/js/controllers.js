angular.module('starter.controllers', [])

.controller('MatchesCtrl', function($scope, Matches) {
  $scope.matches = Matches.all();
  $scope.remove = function(match) {
    Matches.remove(match);
  }
})
.controller('MatchDetailCtrl', function($scope, $stateParams, Matches) {
  $scope.match = Matches.get($stateParams.matchId);
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {

})

.controller('PointCtrl', function($scope, $stateParams, Points) {
   $scope.points = Points.all();
   $scope.remove = function(point) {
     Points.remove(point);
   };
})
.controller('PointDetailCtrl', function($scope, $stateParams, Points) {
  $scope.point = Points.get($stateParams.pointId);
});
