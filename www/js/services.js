angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 2,
    name: '伊哈洛',
    lastText: '26岁/沃特福德/24号/前锋',
    face: 'img/adam.jpg'
  }, {
    id: 0,
    name: '瓦尔蒂',
    lastText: '28岁/莱斯特城/9号/前锋',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: '卢卡库',
    lastText: '22岁/埃弗顿/10号/前锋',
    face: 'img/max.png'
  }, {
    id: 4,
    name: '哈尼凯恩',
    lastText: '22岁/托特纳姆热刺/10号/前锋',
    face: 'img/mike.png'
  }, {
    id: 3,
    name: '马赫雷斯',
    lastText: '24岁/莱斯特城/26号/前锋',
    face: 'img/perry.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Points', function() {
  var points = [{
    id: 0,
    name: '瓦尔蒂',
    lastText: '28岁/莱斯特城/9号/前锋',
    face: 'img/ben.png'
  },
  {
    id: 2,
    name: '伊哈洛',
    lastText: '26岁/沃特福德/24号/前锋',
    face: 'img/adam.jpg'
  },
  {
    id: 1,
    name: '卢卡库',
    lastText: '22岁/埃弗顿/10号/前锋',
    face: 'img/max.png'
  },
  {
    id: 4,
    name: '哈尼凯恩',
    lastText: '22岁/托特纳姆热刺/10号/前锋',
    face: 'img/mike.png'
  },
  {
    id: 3,
    name: '马赫雷斯',
    lastText: '24岁/莱斯特城/26号/前锋',
    face: 'img/perry.png'
  },
  ];

  return {
    all: function() {
      return points;
    },
    remove: function(point) {
      points.splice(points.indexOf(point), 1);
    },
    get: function(pointId) {
      for (var i = 0; i < points.length; i++) {
        if (points[i].id === parseInt(pointId)) {
          return points[i];
        }
      }
      return null;
    }
  };
})

.factory('Matches', function() {
  var matches = [
  {
    id: 1,
    name: '卢卡库',
    lastText: '22岁/埃弗顿/10号/前锋',
    face: 'img/max.png'
  },
    {
    id: 0,
    name: '瓦尔蒂',
    lastText: '28岁/莱斯特城/9号/前锋',
    face: 'img/ben.png'
  },
  {
    id: 2,
    name: '伊哈洛',
    lastText: '26岁/沃特福德/24号/前锋',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: '马赫雷斯',
    lastText: '24岁/莱斯特城/26号/前锋',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: '哈尼凯恩',
    lastText: '22岁/托特纳姆热刺/10号/前锋',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return matches;
    },
    remove: function(match) {
      matches.splice(matches.indexOf(match), 1);
    },
    get: function(matchId) {
      for (var i = 0; i < matches.length; i++) {
        if (matches[i].id === parseInt(matchId)) {
          return matches[i];
        }
      }
      return null;
    }
  };
})

.factory('Accounts', function() {
  var accounts = [{
    id: 0,
    name: '瓦尔蒂',
    lastText: '28岁/莱斯特城/9号/前锋',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: '卢卡库',
    lastText: '22岁/埃弗顿/10号/前锋',
    face: 'img/max.png'
  }, {
    id: 2,
    name: '伊哈洛',
    lastText: '26岁/沃特福德/24号/前锋',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: '马赫雷斯',
    lastText: '24岁/莱斯特城/26号/前锋',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: '哈尼凯恩',
    lastText: '22岁/托特纳姆热刺/10号/前锋',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return accounts;
    },
    remove: function(match) {
      accounts.splice(accounts.indexOf(account), 1);
    },
    get: function(accountId) {
      for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].id === parseInt(accountId)) {
          return accounts[i];
        }
      }
      return null;
    }
  };
})

.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
          scope.$on('$ionicView.beforeEnter', function() {
            $rootScope.hideTabs = true
            // scope.$watch(attributes.hideTabs, function(value){
            //   $rootScope.hideTabs = value;
            // });
          });

          scope.$on('$ionicView.beforeLeave', function() {
            $rootScope.hideTabs = false;
          });
            // scope.$watch(attributes.hideTabs, function(value){
            //     $rootScope.hideTabs = value;
            // });

            // scope.$on('$destroy', function() {
            //     $rootScope.hideTabs = false;
            // });
        }
    };
});
