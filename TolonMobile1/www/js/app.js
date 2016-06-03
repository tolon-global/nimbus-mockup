// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var db={
  "flow": {
    "start": "button-pressed",
    "cards": [
      {
        "check-alarm": {
          "title": "Check alarm",
          "processes": [
            "check-emergency-stop-alarm"
          ],
          "question": "Has the alarm message been removed?",
          "positive": {
            "label": "Yes, clear",
            "target": "problem-solved"
          },
          "negative": {
            "label": "No, still there",
            "target": "escalate"
          }
        },
        "button-pressed": {
          "title": "Check button pressed state",
          "processes": [
            "check-esb-mechanically"
          ],
          "question": "Is the button in the pressed state?",
          "positive": {
            "label": "Yes, pressed",
            "target": "replace-esb"
          },
          "negative": {
            "target": "replace-esb"
          }
        },
        "release-esb": {
          "title": "Release ESB",
          "processes": [
            {
              "title": "Release the ESB",
              "steps": [
                "Twist the Emergency Stop Button clockwise ⟳ to release it",
                "The button should be pushed up by its springs"
              ]
            }
          ],
          "question": "Has the button been released?",
          "positive": {
            "label": "Yes, released",
            "target": "release-esb/check-alarm"
          },
          "negative": {
            "label": "No, depressed",
            "target": "replace-esb"
          }
        },
        "release-esb/check-alarm": {
          "template": "check-alarm",
          "negative": {
            "target": "check-contact"
          }
        },
        "replace-esb": {
          "title": "Check button pressed state1",
          "processes": [
            "check-esb-mechanically1",
            "check-esb-mechanically2",
            "check-esb-mechanically3",
            "check-esb-mechanically4",
            "check-esb-mechanically5"

          ],
          "question": "Is the button in the pressed state?1123123123",
          "positive": {
            "label": "Yes, pressed",
            "target": "button-pressed"
          },
          "negative": {
            "target": "button-pressed"
          }
        },
        "check-contact": {
          "title": "Check ESB contact",
          "processes": [
            {
              "title": "Check the contacts on the ESB",
              "steps": [
                {
                  "include": "we60-general/left-panel/open"
                },
                "Check the conductivity of the contact sockets with short-circuit test\nby inserting the multimeter leads into the contact sockets or the contact\nscrews and testing for both positions of the contact switch. The contact\nshould be in short-circuit when the switch is in open position (unpressed)\nand the contrary in closed position (pressed)"
              ]
            }
          ],
          "question": "Is the contact functioning?",
          "negative": "replace-esb-contact",
          "positive": "check-unbridged-power-output"
        },
        "replace-esb-contact": {
          "template": "check-alarm",
          "title": "Replace ESB contact",
          "processes": [
            {
              "title": "Replace the contact on the ESB",
              "steps": [
                {
                  "include": "we60-general/left-panel/open"
                },
                "Unscrew the ESB cable terminals from the ESB contact socket",
                "Remove the contact of the ESB from its back by using a screwdriver",
                "Plug the new ESB contact into its socket",
                "Screw the ESB cable terminals into the ESB contact socket"
              ]
            },
            "$template"
          ]
        }
      }
    ]
  }
};
var historyOpen=0;
var detailOpen=0;
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(false);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  .config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'start.html'
    })
    .state('main', {
      url: '/',
      templateUrl: 'main.html'
    })

  $urlRouterProvider.otherwise('/');

})
  .controller('OpenCtrl', function($scope, $state) {
    $scope.Servis = function() {
      $state.go('main');
      //$cordovaBarcodeScanner.scan().then(function(imageData) {
      //  console.log("Barcode Format -> " + imageData.format);
      //  console.log("Cancelled -> " + imageData.cancelled);
      //  res1 = AESDecryptCtr(imageData.text,'tolon001',256);
      //  alert(res1);
      //  if(res1=="WE110"){
      //    //$state.go('main');
      //  }else{
      //    alert("QrCode is not Valid Please Try Again!");
      //  }
      //}, function(error) {
      //  console.log("An error happened -> " + error);
      //});
    };

  })
  .controller('mainCtrl', function($scope) {

    $scope.db=db.flow;
    $scope.start=db.flow.start;
    console.log($scope.db.cards[0][$scope.start]);
    $scope.val=$scope.db.cards[0][$scope.start];
    $scope.val1=$scope.db.cards[0][$scope.val.negative.target];
    console.log($scope.val);
    copyDiv('fake-card2');
    if($scope.val.negative.label== null){
      $scope.val.negative.label="No";
    };
    if($scope.val.positive.label== null){
      $scope.val.positive.label="Yes";
    };
    var swiperH = new Swiper('.swiper-container-h', {
      spaceBetween: 0,
      loop:true,
      initialSlide:1,
      nextButton: '.n-positive',
      prevButton: '.n-negative'
    });
    var swiperV = new Swiper('.swiper-container-v', {
      direction: 'vertical',
      spaceBetween: 0,
      initialSlide:1

    });
    swiperH.on('SlideNextStart', function () {
      console.log('slide change end');
      copyDiv('fake-card3');
    });
    swiperH.on('SlidePrevStart', function () {
      console.log('slide change start');
      copyDiv('fake-card1');
    });
    function copyDiv(id) {
      var mainDivContent = document.getElementById('main-card');
      var firstDivContent = document.getElementById(id);
      firstDivContent.innerHTML = mainDivContent.innerHTML;
    }

  })


/*$('#a').on('swipeleft',function(){
 if(historyOpen==0){
 $scope.val1=$scope.db.cards[0][$scope.val.negative.target];
 console.log( $scope.val)
 if($scope.val1.negative.label== null){
 $scope.val1.negative.label="No";
 }
 if($scope.val1.positive.label== null){
 $scope.val1.positive.label="Yes";
 }
 $(".serhat1").css('left','50%')
 $(".serhat").addClass('slideLeft');
 $(".serhat1").addClass('slideLeft1');

 setTimeout(function(){
 $(".serhat").removeClass('slideLeft');
 $(".serhat1").removeClass('slideLeft1');
 $scope.val=$scope.db.cards[0][$scope.val.negative.target];
 $scope.val1=$scope.db.cards[0][$scope.val1.negative.target];
 $scope.$apply();
 },500);

 }
 } );
 });
 $('#a').on('swiperight',function(){
 if(historyOpen==0) {
 $scope.val1 = $scope.db.cards[0][$scope.val.positive.target];
 console.log($scope.val)
 if ($scope.val1.negative.label == null) {
 $scope.val1.negative.label = "No";
 }
 if ($scope.val1.positive.label == null) {
 $scope.val1.positive.label = "Yes";
 }
 $(".serhat1").css('left', '-50%')
 $(".serhat").addClass('slideRight');
 $(".serhat1").addClass('slideRight1');

 setTimeout(function () {
 $(".serhat").removeClass('slideRight');
 $(".serhat1").removeClass('slideRight1');
 $scope.val = $scope.db.cards[0][$scope.val.positive.target];
 $scope.val1 = $scope.db.cards[0][$scope.val1.positive.target];
 $scope.$apply();
 }, 500);
 }
 } );*/
