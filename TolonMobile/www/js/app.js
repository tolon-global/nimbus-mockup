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
            "target": "release-esb"
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
          "title": "Replace ESB",
          "processes": [
            {
              "title": "Replace the ESB",
              "steps": [
                {
                  "include": "we60-general/left-panel/open"
                },
                "Unscrew the ESB cable terminals from the ESB contact socket",
                "Remove the contact of the ESB from its back by using a screwdriver",
                "Unbolt the plastic nut from the back of the ESB",
                "Pull the ESB from the front of the CP",
                "Put a new ESB into the empty ESB slot",
                "Bolt the plastic nut onto its bolt at the back of the ESB",
                "Plug the contact of the ESB into its socket",
                "Screw the ESB cable terminals into the ESB contact socket",
                {
                  "include": "we60-general/left-panel/close"
                }
              ]
            }
          ],
          "append": "release-esb/check-alarm"
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
    $(document).ready(function(){
      $(".btn1").click(function(){
        $("p").slideUp("fast","linear");
      });
      $(".btn2").click(function(){
        $("p").css('visibility','visible');
        $("p").slideDown();
      });
      function load() {
        $(".history").slideUp();
        $("#detail").addClass("detail");
      }
      window.onload = load;
      var historyOpen=0;
      var detailOpen=0;
      $('#a').on('swipedown',function(){
        if (historyOpen==0 && detailOpen==0) {
          $(".history").css('visibility','visible');
          $(".history").slideDown();
          historyOpen++;
          console.log("History = > "+historyOpen);
          console.log("Detail = > "+detailOpen);
        }
        else if (detailOpen==1 && historyOpen==0 ) {
          $("#replace-esb").css('visibility','visible');
          $("#detail").css('visibility','hidden');
          $("nav").removeClass("has-subheader");
          detailOpen--;
          console.log("History = > "+historyOpen);
          console.log("Detail = > "+detailOpen);
        }
      } );
      $('#a').on('swipeup',function(){
        if (historyOpen==1 && detailOpen==0) {
          $(".history").slideUp();
          historyOpen--;
          console.log("History = > "+historyOpen);
          console.log("Detail = > "+detailOpen);
        }
        else if (detailOpen==0 && historyOpen==0) {
          $("#replace-esb").css('visibility','hidden');
          $("#detail").css('visibility','visible');
          $("nav").addClass("has-subheader");
          detailOpen++;
          console.log("History = > "+historyOpen);
          console.log("Detail = > "+detailOpen);
        }

      } );
    });
  })
