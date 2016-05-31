// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requiresv'
var datas={"flowchart": {
  "header": "Emergency Stop Alarm",
  "element_list": [
    {"id": "1","title": "Emergency Stop Alarm","content":[{"id":"1", "src":""}],"detail": [{"id":"1", "text":"The \"Emergency Stop Alarm\" message is displayed on the panel."}],"type": "Terminal","next":"2","left":"null","right":"null"},
    {"id": "2","title": "Check the \"Emergency Stop Button\" (ESB) mechanically","content": [{"id":"1", "src":"https://fog.bilims.com/beta/video/ht_0002.mp4"}],"detail":[{"id":"1", "text":"Press the left ESB to check if the button can be pressed"}],"type": "Process","next":"3","left":"null","right":"null"},
    {"id": "3","title": "Is the button in the \"pressed\" state?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"4","right":"5"},
    {"id": "4","title": "Replace the left ESB","content":[{"id":"1", "src":"https://fog.bilims.com/beta/video/ht_0021.mp4"},
      {"id":"2", "src":"https://fog.bilims.com/beta/video/ht_0022.mp4"},{"id":"3", "src":"https://fog.bilims.com/beta/video/ht_0023.mp4"},{"id":"4", "src":"https://fog.bilims.com/beta/video/ht_0020.mp4"},
      {"id":"5", "src":"https://fog.bilims.com/beta/video/ht_0023.mp4"},{"id":"6", "src":"https://fog.bilims.com/beta/video/ht_0024.mp4"},{"id":"7", "src":"https://fog.bilims.com/beta/video/ht_0023.mp4"},
      {"id":"8", "src":"https://fog.bilims.com/beta/video/ht_0024.mp4"}],
      "detail":[{"id":"1", "text":"Unscrew the ESB cable terminals from the ESB contact socket"},{"id":"2", "text":"Remove the contact of the ESB from its back by using a screwdriver"},
        {"id":"3", "text":"Plug the new ESB contact into its socket"},{"id":"4", "text":"Screw the ESB cable terminals into the ESB contact socket"},{"id":"5", "text":"Check the conductivity of the contact sockets with short-circuit test by inserting the multimeter leads into the contact sockets or the contact screws and testing for both positions of the contact switch. The contact should be in short-circuit when the switch is in open position (unpressed) and the contrary in closed position (pressed)"},
        {"id":"6", "text":"Close the front left cover of the machine"}, {"id":"7", "text":"Rotate the lock handle CCW, push it into its slot, and lock it with its key"},{"id":"8", "text":"Power on the machine"}],
      "type": "Process","next":"6","left":"null","right":"null"},
    {"id": "5","title": "Release the left ESB","content":[{"id":"1", "src":"https://fog.bilims.com/beta/video/ht_0004.mp4"},{"id":"2", "src":"https://fog.bilims.com/beta/video/ht_0005.mp4"}],"detail":[{"id":"1", "text":"Twist the left Emergency Stop Button to release it"},{"id":"2", "text":"The button should be pushed up by its springs"}],"type": "Process","next":"7","left":"null","right":"null"},
    {"id": "6","title": "Check the Emergency Stop Alarm Status","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"8","left":"null","right":"null"},
    {"id": "7","title": "Has the button been released?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"4","right":"6"},
    {"id": "8","title": "Has the alarm message been removed?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"9","right":"70"},
    {"id": "9","title": "Check the right ESB mechanically","content":[{"id":"1", "src":"https://fog.bilims.com/beta/video/ht_0003.mp4"}],"detail":[{"id":"1", "text":"Press the right ESB to check if the button can be pressed"}],"type": "Process","next":"10","left":"null","right":"null"},
    {"id": "10","title": "Is the button in the \"pressed\" state?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"11","right":"12"},
    {"id": "11","title": "Replace the right ESB","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"14","left":"null","right":"null"},
    {"id": "12","title": "Release the right ESB","content":[{"id":"1", "src":"https://fog.bilims.com/beta/video/ht_0006.mp4"},{"id":"2", "src":"https://fog.bilims.com/beta/video/ht_0007.mp4"}],"detail":[{"id":"1", "text":"Twist the right Emergency Stop Button to release it"},{"id":"2", "text":"The button should be pushed up by its springs"}],"type": "Process","next":"13","left":"null","right":"null"},
    {"id": "13","title": "Has the button been released?","content": "<video width=\"320\" height=\"240\" controls><source src=\"https://fog.bilims.com/beta/video/2.mp4\" type=\"video/mp4\"></video>","detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"11","right":"14"},
    {"id": "14","title": "Check the Emergency Stop Alarm Status","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"15","left":"null","right":"null"},
    {"id": "15","title": "Has the alarm message been removed?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"16","right":"70"},
    {"id": "16","title": "Check the contact of the left ESB","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"17","left":"null","right":"null"},
    {"id": "17","title": "Is the contact functioning?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"18","right":"21"},
    {"id": "18","title": "Replace the contact of the left ESB","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"19","left":"null","right":"null"},
    {"id": "19","title": "Check the Emergency Alarm status","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"20","left":"null","right":"null"},
    {"id": "20","title": "Has the alarm message been removed?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"21","right":"70"},
    {"id": "21","title": "Check the contact of the right ESB","content": "<video width=\"320\" height=\"240\" controls><source src=\"https://fog.bilims.com/beta/video/1.mp4\" type=\"video/mp4\"></video>","detail":[{"id":"", "text":""}],"type": "Process","next":"22","left":"null","right":"null"},
    {"id": "22","title": "Is the contact functioning?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"null","left":"23","right":"26"},
    {"id": "23","title": "Replace the contact of the right ESB","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"24","left":"null","right":"null"},
    {"id": "24","title": "Check the Emergency Alarm status","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"25","left":"null","right":"null"},
    {"id": "25","title": "Has the alarm message been removed?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"26","right":"70"},
    {"id": "26","title": "Check the unbridged power output of the \"Emergency Stop Relay\" (ESR) contacts","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"27","left":"null","right":"null"},
    {"id": "27","title": "Are the 14 and the 24 terminals powered?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"44","right":"28"},
    {"id": "28","title": "Check the cable between the ESR and the \"Electrical Terminal\" (ET)","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"29","left":"null","right":"null"},
    {"id": "29","title": "Is the cable functional?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"30","right":"33"},
    {"id": "30","title": "Replace the cables between ESR-ET","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"31","left":"null","right":"null"},
    {"id": "31","title": "Check the Emergency Stop Alarm status","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"32","left":"null","right":"null"},
    {"id": "32","title": "Has the alarm message been removed?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"33","right":"70"},
    {"id": "33","title": "Check the cables between the ET and the \"Control Panel\" (CP)","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"32","left":"null","right":"null"},
    {"id": "34","title": "Is the cable functional?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"35","right":"38"},
    {"id": "35","title": "Replace/Repair the ESR cables between ET-CP","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"36","left":"null","right":"null"},
    {"id": "36","title": "Check the Emergency Stop Alarm status","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"37","left":"null","right":"null"},
    {"id": "37","title": "Has the alarm message been removed?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"38","right":"70"},
    {"id": "38","title": "Check the ESB DI on the Diagnostic","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"39","left":"null","right":"null"},
    {"id": "39","title": "Is the DI functioning?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"40","right":"43"},
    {"id": "40","title": "Change the DI assignment for the ESB","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"41","left":"null","right":"null"},
    {"id": "41","title": "Check the Emergency Stop Alarm status","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"42","left":"null","right":"null"},
    {"id": "42","title": "Has the alarm message been removed?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"43","right":"70"},
    {"id": "43","title": "Send the CP to the service","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"-2","left":"null","right":"null"},
    {"id": "44","title": "Check the bridged power output of the \"Emergency Stop Relay\" (ESR) contacts","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"45","left":"null","right":"null"},
    {"id": "45","title": "Are the 14 and the 24 terminals powered?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"46","right":"49"},
    {"id": "46","title": "Replace the ESR","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"47","left":"null","right":"null"},
    {"id": "47","title": "Check the Emergency Stop Alarm status","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"48","left":"null","right":"null"},
    {"id": "48","title": "Has the alarm message been removed?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"49","right":"70"},
    {"id": "49","title": "Check the power output on the closed loop between ESR-ET-ESB","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"50","left":"null","right":"null"},
    {"id": "50","title": "Replace/Repair the faulty cable between the S11 ESR socket and the 7X1.1 ET socket","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"51","left":"null","right":"null"},
    {"id": "51","title": "Check the unbridged power output of the \"Emergency Stop Relay\" (ESR) contacts","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"52","left":"null","right":"null"},
    {"id": "52","title": "Are the 14 and the 24 terminals powered?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"54","right":"53"},
    {"id": "53","title": "Has the alarm message been removed?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"28","right":"70"},
    {"id": "54","title": "Replace/Repair the faulty cable between the 7X1.1ET socket and the 1. ESB input socket","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"55","left":"null","right":"null"},
    {"id": "55","title": "Check the unbridged power output of the \"Emergency Stop Relay\" (ESR) contacts","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"56","left":"null","right":"null"},
    {"id": "56","title": "Are the 14 and the 24 terminals powered?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"58","right":"57"},
    {"id": "57","title": "Has the alarm message been removed?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"28","right":"70"},
    {"id": "58","title": "Replace/Repair the faulty cable between the 1.ESB output socket and the 2.ESB input socket","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"59","left":"null","right":"null"},
    {"id": "59","title": "Check the unbridged power output of the \"Emergency Stop Relay\" (ESR) contacts","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"60","left":"null","right":"null"},
    {"id": "60","title": "Are the 14 and the 24 terminals powered?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"62","right":"61"},
    {"id": "61","title": "Has the alarm message been removed?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"28","right":"70"},
    {"id": "62","title": "Replace/Repair the faulty cable between the 2.ESB output scoket and the 7X1.2 ET socket","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"63","left":"null","right":"null"},
    {"id": "63","title": "Check the unbridged power output of the \"Emergency Stop Relay\" (ESR) contacts","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"64","left":"null","right":"null"},
    {"id": "64","title": "Are the 14 and the 24 terminals powered?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"66","right":"65"},
    {"id": "65","title": "Has the alarm message been removed?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"28","right":"70"},
    {"id": "66","title": "Replace/Repair the faulty cable between the 7X1.2 ET socket and the S52 ESR socket","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"67","left":"null","right":"null"},
    {"id": "67","title": "Check the unbridged power output of the \"Emergency Stop Relay\" (ESR) contacts","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Process","next":"68","left":"null","right":"null"},
    {"id": "68","title": "Are the 14 and the 24 terminals powered?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"46","right":"69"},
    {"id": "69","title": "Has the alarm message been removed?","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Decision","next":"null","left":"28","right":"70"},
    {"id": "70","title": "Problem Solved","content":[{"id":"", "src":""}],"detail":[{"id":"", "text":""}],"type": "Terminal","next":"-1","left":"null","right":"null"}

  ]
}};



var next_page=1;
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.hide();
    }
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
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
        templateUrl: 'open.html'
      })
      .state('main', {
        url: '/',
        templateUrl: 'main.html'
      })
      .state('detail', {
        url: '/',
        templateUrl: 'detail.html'
      });

    $urlRouterProvider.otherwise('/');

  })
  .filter('trusted', ['$sce', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  }])
  .controller('cll', function($scope, $ionicScrollDelegate) {
    $scope.detail = false;
    $scope.next_page=next_page-1;
    $scope.chats = datas.flowchart.element_list;
    $scope.list_before=[0];
    $scope.closeInfiniteScroll=true;
    $scope.hist1=false;
    $scope.answers=[];

    $scope.goHist= function (item) {
      $('.buddy').addClass('rotate-right').fadeOut(1000);
      if ( $('.buddy').is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(100);
      } else {
        $('.buddy').next().removeClass('rotate-left rotate-right rot').fadeIn(100);
      }
      $scope.next_page=item;
      next_page=item;

      $(".bar-subheader").removeClass('has-subheader');
      $(".bar-subheader").removeClass('den12');
      $(".den11").removeClass('deneme');
      $(".container").removeClass('containet-detail');
      $(".history").removeClass('hist-open');
      $(".buddy").removeClass('hist-open-buddy');
      $(".container").removeClass('hist-open-container');
      $(".buttons1").removeClass('den12');
      $(".buttons1").removeClass('den13');
      $scope.hist1=false;
    }
    $('.buddy2').removeClass('buddy1');

    $scope.data12 = {
      val: '-1'
    };

    $(".buddy").on("swiperight",function(){
      $(this).addClass('rotate-right').fadeOut(1000);
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(100);
      } else {
        $(this).next().removeClass('rotate-left rotate-right rot').fadeIn(100);
      }
      $('.buddy').removeClass('buddy1').delay(100);
      if(datas.flowchart.element_list[$scope.next_page].type == "Terminal" || datas.flowchart.element_list[$scope.next_page].type =="Process") {
        if($scope.list_before.indexOf(datas.flowchart.element_list[$scope.next_page].next-1)==-1){
          $scope.list_before.push(datas.flowchart.element_list[$scope.next_page].next-1);
          $scope.answers.push('Yes');
        }else{
          $scope.answers[$scope.next_page]='Yes';
        }
        $scope.next_page = datas.flowchart.element_list[$scope.next_page].next-1;
      }
      else
      {
        if($scope.list_before.indexOf(datas.flowchart.element_list[$scope.next_page].right-1)==-1){
          $scope.list_before.push(datas.flowchart.element_list[$scope.next_page].right-1);
          $scope.answers.push('Yes');
        }else{
          $scope.answers[$scope.next_page]='Yes';
        }
        $scope.next_page = datas.flowchart.element_list[$scope.next_page].right-1;
      }

      next_page=$scope.next_page;
      $scope.detail=false;
      $(".bar-subheader").removeClass('has-subheader');
      $(".bar-subheader").removeClass('den12');
      $(".den11").removeClass('deneme');
      $(".container").removeClass('containet-detail');
    });

    $(".buddy").on("swipeleft",function(){
      $(this).addClass('rotate-right').fadeOut(1000);
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(100);
      } else {
        $(this).next().removeClass('rotate-left rotate-right rot').fadeIn(100);
      }
      function findIndex(item,item1) {
        return item === 1;
      }
      $('.buddy3').removeClass('buddy1').delay(100);
      if(datas.flowchart.element_list[$scope.next_page].type == "Terminal" || datas.flowchart.element_list[$scope.next_page].type =="Process") {
        if($scope.list_before.indexOf(datas.flowchart.element_list[$scope.next_page].next-1)==-1){
          $scope.list_before.push(datas.flowchart.element_list[$scope.next_page].next-1);
          $scope.answers.push('No');
        }else{
          $scope.answers[$scope.next_page]='No';
        }
        $scope.next_page = datas.flowchart.element_list[$scope.next_page].next-1;
      }
      else{
        if($scope.list_before.indexOf(datas.flowchart.element_list[$scope.next_page].left-1)==-1){
          $scope.list_before.push(datas.flowchart.element_list[$scope.next_page].left-1);
          $scope.answers.push('No');
        }else{
          $scope.answers[$scope.next_page]='No';
        }

        $scope.next_page = datas.flowchart.element_list[$scope.next_page].left - 1;
      }

      next_page=$scope.next_page;
      $scope.detail=false;
      $(".bar-subheader").removeClass('has-subheader');
      $(".bar-subheader").removeClass('den12');
      $(".den11").removeClass('deneme');
      $(".container").removeClass('containet-detail');
    });


    $(".buddy").on("swipedown",function(){
        console.log($scope.list_before)
        $scope.data12= {};
        $scope.data12.val=-1;
      $(".history").removeClass('hist-close');
      $(".buddy").addClass('hist-open-buddy');

      console.log($scope.detail);
     if($scope.detail==false) {
       console.log('wwwwwwwwwwwww');
       $(".buttons1").addClass('den12');
       $(".buttons1").addClass('den13');
       $scope.hist1=true;
       $(".history").addClass('hist-open');
       $(".history").css('top','-40px');
       $(".buddy").addClass('hist-open-buddy');
       $(".container").addClass('hist-open-container');
       $ionicScrollDelegate.scrollBottom();
       //$ionicScrollDelegate.scrollBottom();
        /*var listPopup = $ionicPopup.show({
          template: '<ion-list onscroll="cntList()" style="background-color: rgba(20, 20, 20, 0.4)">                                ' +
          '  <ion-radio  style="background: rgba(20, 20, 20, 0.4)" ng-repeat="item in list_before"  ng-value="item" ng-model="data12.val"> ' +
          '    {{item}}                              ' +
          '  </ion-radio>                            ' +
          '</ion-list>                             ',

          title: 'List',
          scope: $scope,
          buttons: [
            {
              text: 'OK',
              onTap: function (e) {
                if ($scope.data12.val == -1) {
                  //don't allow the user to close unless he enters wifi password
                  e.preventDefault();
                } else {
                  $scope.list_before.splice($scope.data12.val, $scope.list_before.length);
                  list_before.push($scope.data12.val);
                  $scope.next_page = $scope.data12.val;
                  $(".bar-subheader").removeClass('has-subheader');
                  $(".bar-subheader").removeClass('den12');
                  $(".den11").removeClass('deneme');
                  $(".container").removeClass('containet-detail');
                  return $scope.next_page;
                }
              }
            },
            {text: 'CANCEL'}
          ]
        });*/
      }
      else{
       $scope.closeInfiniteScroll=true;
        $(".buttons1").removeClass('has-subheader');
        $(".buttons1").removeClass('den12');
        $(".den11").removeClass('deneme');
        $(".container").removeClass('containet-detail');
        $(".history").removeClass('hist-open');
        $(".buddy").removeClass('hist-open-buddy');
       $(".container").addClass('hist-open-container');
       console.log('dededededededed');
       $scope.detail=false;
      }
    });


    $(".buddy").on("swipeup",function(){
      if($scope.hist1==false){
        console.log('gggggggggggggg');
        $(".buttons1").addClass('has-subheader');
        $(".buttons1").addClass('den12');
        $(".den11").addClass('deneme');
        $(".container").addClass('containet-detail');
        $(".history").removeClass('hist-open');
        $(".buddy").removeClass('hist-open-buddy');
        $(".container").removeClass('hist-open-container');
        console.log($scope.detail);
        $scope.closeInfiniteScroll=false;
        $scope.detail=false;
        $scope.hist1=false;
      }
      else{
        $(".history").removeClass('hist-open');
        $(".buddy").removeClass('hist-open-buddy');
        $(".container").removeClass('hist-open-container');
        $(".buttons1").removeClass('den12');
        $(".buttons1").removeClass('den13');

        $scope.hist1=false;
      }


    });
    $scope.ans_yes = function () {
      console.log("girdi");
      if(datas.flowchart.element_list[$scope.next_page].type == "Terminal" || datas.flowchart.element_list[$scope.next_page].type =="Process") {
        $scope.list_before.push(datas.flowchart.element_list[$scope.next_page].next-1);
        $scope.next_page = datas.flowchart.element_list[$scope.next_page].next-1;
      }
      else{
        $scope.list_before.push(datas.flowchart.element_list[$scope.next_page].left-1);
        $scope.next_page = datas.flowchart.element_list[$scope.next_page].left - 1;
      }
      next_page=$scope.next_page;
    }

    $scope.ans_no = function () {
      if(datas.flowchart.element_list[$scope.next_page].type == "Terminal" || datas.flowchart.element_list[$scope.next_page].type =="Process") {
        $scope.list_before.push(datas.flowchart.element_list[$scope.next_page].next-1);
        $scope.next_page = datas.flowchart.element_list[$scope.next_page].next-1;
      }
      else{
        $scope.list_before.push(datas.flowchart.element_list[$scope.next_page].right-1);
        $scope.next_page = datas.flowchart.element_list[$scope.next_page].right - 1;
      }
      next_page=$scope.next_page;
    }

    $scope.loadMore = function() {
      $ionicScrollDelegate.scrollTop();
      $(".buttons1").addClass('has-subheader');
      $(".buttons1").addClass('den12');
      $(".den11").addClass('deneme');
      $(".container").addClass('containet-detail');
      $(".history").removeClass('hist-open');
      $(".buddy").removeClass('hist-open-buddy');
      $(".container").removeClass('hist-open-container');
      $scope.$broadcast('scroll.infiniteScrollComplete');
      console.log('girdiiiiiiii');
      $scope.detail = true;
      $scope.closeInfiniteScroll=true;

    }
  })
  .controller('DetailCtrl', function($scope) {

    $scope.chats = datas.flowchart.element_list;
      $scope.next_page = next_page;

  }
)
  .controller('OpenCtrl', function($scope, $state, $cordovaBarcodeScanner) {
    function Cipher(input, w) {    // main Cipher function [Â§5.1]
      var Nb = 4;               // block size (in words): no of columns in state (fixed at 4 for AES)
      var Nr = w.length/Nb - 1; // no of rounds: 10/12/14 for 128/192/256-bit keys

      var state = [[],[],[],[]];  // initialise 4xNb byte-array 'state' with input [Â§3.4]
      for (var i=0; i<4*Nb; i++) state[i%4][Math.floor(i/4)] = input[i];

      state = AddRoundKey(state, w, 0, Nb);

      for (var round=1; round<Nr; round++) {
        state = SubBytes(state, Nb);
        state = ShiftRows(state, Nb);
        state = MixColumns(state, Nb);
        state = AddRoundKey(state, w, round, Nb);
      }

      state = SubBytes(state, Nb);
      state = ShiftRows(state, Nb);
      state = AddRoundKey(state, w, Nr, Nb);

      var output = new Array(4*Nb);  // convert state to 1-d array before returning [Â§3.4]
      for (var i=0; i<4*Nb; i++) output[i] = state[i%4][Math.floor(i/4)];
      return output;
    }


    function SubBytes(s, Nb) {    // apply SBox to state S [Â§5.1.1]
      for (var r=0; r<4; r++) {
        for (var c=0; c<Nb; c++) s[r][c] = Sbox[s[r][c]];
      }
      return s;
    }


    function ShiftRows(s, Nb) {    // shift row r of state S left by r bytes [Â§5.1.2]
      var t = new Array(4);
      for (var r=1; r<4; r++) {
        for (var c=0; c<4; c++) t[c] = s[r][(c+r)%Nb];  // shift into temp copy
        for (var c=0; c<4; c++) s[r][c] = t[c];         // and copy back
      }          // note that this will work for Nb=4,5,6, but not 7,8 (always 4 for AES):
      return s;  // see fp.gladman.plus.com/cryptography_technology/rijndael/aes.spec.311.pdf
    }


    function MixColumns(s, Nb) {   // combine bytes of each col of state S [Â§5.1.3]
      for (var c=0; c<4; c++) {
        var a = new Array(4);  // 'a' is a copy of the current column from 's'
        var b = new Array(4);  // 'b' is aâ€¢{02} in GF(2^8)
        for (var i=0; i<4; i++) {
          a[i] = s[i][c];
          b[i] = s[i][c]&0x80 ? s[i][c]<<1 ^ 0x011b : s[i][c]<<1;
        }
        // a[n] ^ b[n] is aâ€¢{03} in GF(2^8)
        s[0][c] = b[0] ^ a[1] ^ b[1] ^ a[2] ^ a[3]; // 2*a0 + 3*a1 + a2 + a3
        s[1][c] = a[0] ^ b[1] ^ a[2] ^ b[2] ^ a[3]; // a0 * 2*a1 + 3*a2 + a3
        s[2][c] = a[0] ^ a[1] ^ b[2] ^ a[3] ^ b[3]; // a0 + a1 + 2*a2 + 3*a3
        s[3][c] = a[0] ^ b[0] ^ a[1] ^ a[2] ^ b[3]; // 3*a0 + a1 + a2 + 2*a3
      }
      return s;
    }


    function AddRoundKey(state, w, rnd, Nb) {  // xor Round Key into state S [Â§5.1.4]
      for (var r=0; r<4; r++) {
        for (var c=0; c<Nb; c++) state[r][c] ^= w[rnd*4+c][r];
      }
      return state;
    }


    function KeyExpansion(key) {  // generate Key Schedule (byte-array Nr+1 x Nb) from Key [Â§5.2]
      var Nb = 4;            // block size (in words): no of columns in state (fixed at 4 for AES)
      var Nk = key.length/4  // key length (in words): 4/6/8 for 128/192/256-bit keys
      var Nr = Nk + 6;       // no of rounds: 10/12/14 for 128/192/256-bit keys

      var w = new Array(Nb*(Nr+1));
      var temp = new Array(4);

      for (var i=0; i<Nk; i++) {
        var r = [key[4*i], key[4*i+1], key[4*i+2], key[4*i+3]];
        w[i] = r;
      }

      for (var i=Nk; i<(Nb*(Nr+1)); i++) {
        w[i] = new Array(4);
        for (var t=0; t<4; t++) temp[t] = w[i-1][t];
        if (i % Nk == 0) {
          temp = SubWord(RotWord(temp));
          for (var t=0; t<4; t++) temp[t] ^= Rcon[i/Nk][t];
        } else if (Nk > 6 && i%Nk == 4) {
          temp = SubWord(temp);
        }
        for (var t=0; t<4; t++) w[i][t] = w[i-Nk][t] ^ temp[t];
      }

      return w;
    }

    function SubWord(w) {    // apply SBox to 4-byte word w
      for (var i=0; i<4; i++) w[i] = Sbox[w[i]];
      return w;
    }

    function RotWord(w) {    // rotate 4-byte word w left by one byte
      var tmp = w[0];
      for (var i=0; i<3; i++) w[i] = w[i+1];
      w[3] = tmp;
      return w;
    }


// Sbox is pre-computed multiplicative inverse in GF(2^8) used in SubBytes and KeyExpansion [Â§5.1.1]
    var Sbox =  [0x63,0x7c,0x77,0x7b,0xf2,0x6b,0x6f,0xc5,0x30,0x01,0x67,0x2b,0xfe,0xd7,0xab,0x76,
      0xca,0x82,0xc9,0x7d,0xfa,0x59,0x47,0xf0,0xad,0xd4,0xa2,0xaf,0x9c,0xa4,0x72,0xc0,
      0xb7,0xfd,0x93,0x26,0x36,0x3f,0xf7,0xcc,0x34,0xa5,0xe5,0xf1,0x71,0xd8,0x31,0x15,
      0x04,0xc7,0x23,0xc3,0x18,0x96,0x05,0x9a,0x07,0x12,0x80,0xe2,0xeb,0x27,0xb2,0x75,
      0x09,0x83,0x2c,0x1a,0x1b,0x6e,0x5a,0xa0,0x52,0x3b,0xd6,0xb3,0x29,0xe3,0x2f,0x84,
      0x53,0xd1,0x00,0xed,0x20,0xfc,0xb1,0x5b,0x6a,0xcb,0xbe,0x39,0x4a,0x4c,0x58,0xcf,
      0xd0,0xef,0xaa,0xfb,0x43,0x4d,0x33,0x85,0x45,0xf9,0x02,0x7f,0x50,0x3c,0x9f,0xa8,
      0x51,0xa3,0x40,0x8f,0x92,0x9d,0x38,0xf5,0xbc,0xb6,0xda,0x21,0x10,0xff,0xf3,0xd2,
      0xcd,0x0c,0x13,0xec,0x5f,0x97,0x44,0x17,0xc4,0xa7,0x7e,0x3d,0x64,0x5d,0x19,0x73,
      0x60,0x81,0x4f,0xdc,0x22,0x2a,0x90,0x88,0x46,0xee,0xb8,0x14,0xde,0x5e,0x0b,0xdb,
      0xe0,0x32,0x3a,0x0a,0x49,0x06,0x24,0x5c,0xc2,0xd3,0xac,0x62,0x91,0x95,0xe4,0x79,
      0xe7,0xc8,0x37,0x6d,0x8d,0xd5,0x4e,0xa9,0x6c,0x56,0xf4,0xea,0x65,0x7a,0xae,0x08,
      0xba,0x78,0x25,0x2e,0x1c,0xa6,0xb4,0xc6,0xe8,0xdd,0x74,0x1f,0x4b,0xbd,0x8b,0x8a,
      0x70,0x3e,0xb5,0x66,0x48,0x03,0xf6,0x0e,0x61,0x35,0x57,0xb9,0x86,0xc1,0x1d,0x9e,
      0xe1,0xf8,0x98,0x11,0x69,0xd9,0x8e,0x94,0x9b,0x1e,0x87,0xe9,0xce,0x55,0x28,0xdf,
      0x8c,0xa1,0x89,0x0d,0xbf,0xe6,0x42,0x68,0x41,0x99,0x2d,0x0f,0xb0,0x54,0xbb,0x16];

// Rcon is Round Constant used for the Key Expansion [1st col is 2^(r-1) in GF(2^8)] [Â§5.2]
    var Rcon = [ [0x00, 0x00, 0x00, 0x00],
      [0x01, 0x00, 0x00, 0x00],
      [0x02, 0x00, 0x00, 0x00],
      [0x04, 0x00, 0x00, 0x00],
      [0x08, 0x00, 0x00, 0x00],
      [0x10, 0x00, 0x00, 0x00],
      [0x20, 0x00, 0x00, 0x00],
      [0x40, 0x00, 0x00, 0x00],
      [0x80, 0x00, 0x00, 0x00],
      [0x1b, 0x00, 0x00, 0x00],
      [0x36, 0x00, 0x00, 0x00] ];

    $scope.Servis = function() {
      $state.go('main');
      $cordovaBarcodeScanner.scan().then(function(imageData) {
        console.log("Barcode Format -> " + imageData.format);
        console.log("Cancelled -> " + imageData.cancelled);
        res1 = AESDecryptCtr(imageData.text,'tolon001',256);
        alert(res1);
        if(res1=="WE110"){
        //$state.go('main');
        }else{
          alert("QrCode is not Valid Please Try Again!");
        }
      }, function(error) {
        console.log("An error happened -> " + error);
      });
    };

    function AESDecryptCtr(ciphertext, password, nBits) {
      var blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
      if (!(nBits==128 || nBits==192 || nBits==256)) return '';  // standard allows 128/192/256 bit keys
      ciphertext = ciphertext.decodeBase64();
      password = password.encodeUTF8();
      //var t = new Date();  // timer

      // use AES to encrypt password (mirroring encrypt routine)
      var nBytes = nBits/8;  // no bytes in key
      var pwBytes = new Array(nBytes);
      for (var i=0; i<nBytes; i++) {
        pwBytes[i] = isNaN(password.charCodeAt(i)) ? 0 : password.charCodeAt(i);
      }
      var key = Cipher(pwBytes, KeyExpansion(pwBytes));
      key = key.concat(key.slice(0, nBytes-16));  // expand key to 16/24/32 bytes long

      // recover nonce from 1st 8 bytes of ciphertext
      var counterBlock = new Array(8);
      ctrTxt = ciphertext.slice(0, 8);
      for (var i=0; i<8; i++) counterBlock[i] = ctrTxt.charCodeAt(i);

      // generate key schedule
      var keySchedule = KeyExpansion(key);

      // separate ciphertext into blocks (skipping past initial 8 bytes)
      var nBlocks = Math.ceil((ciphertext.length-8) / blockSize);
      var ct = new Array(nBlocks);
      for (var b=0; b<nBlocks; b++) ct[b] = ciphertext.slice(8+b*blockSize, 8+b*blockSize+blockSize);
      ciphertext = ct;  // ciphertext is now array of block-length strings

      // plaintext will get generated block-by-block into array of block-length strings
      var plaintxt = new Array(ciphertext.length);

      for (var b=0; b<nBlocks; b++) {
        // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
        for (var c=0; c<4; c++) counterBlock[15-c] = ((b) >>> c*8) & 0xff;
        for (var c=0; c<4; c++) counterBlock[15-c-4] = (((b+1)/0x100000000-1) >>> c*8) & 0xff;

        var cipherCntr = Cipher(counterBlock, keySchedule);  // encrypt counter block

        var plaintxtByte = new Array(ciphertext[b].length);
        for (var i=0; i<ciphertext[b].length; i++) {
          // -- xor plaintxt with ciphered counter byte-by-byte --
          plaintxtByte[i] = cipherCntr[i] ^ ciphertext[b].charCodeAt(i);
          plaintxtByte[i] = String.fromCharCode(plaintxtByte[i]);
        }
        plaintxt[b] = plaintxtByte.join('');
      }

      // join array of blocks into single plaintext string
      var plaintext = plaintxt.join('');
      plaintext = plaintext.decodeUTF8();  // decode from UTF8 back to Unicode multi-byte chars

      //alert((new Date()) - t);
      return plaintext;
    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

    /**
     * Encode string into Base64, as defined by RFC 4648 [http://tools.ietf.org/html/rfc4648]
     * (instance method extending String object). As per RFC 4648, no newlines are added.
     *
     * @param utf8encode optional parameter, if set to true Unicode string is encoded to UTF8 before
     *                   conversion to base64; otherwise string is assumed to be 8-bit characters
     * @return           base64-encoded string
     */
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    /**
     * Decode string from Base64, as defined by RFC 4648 [http://tools.ietf.org/html/rfc4648]
     * (instance method extending String object). As per RFC 4648, newlines are not catered for.
     *
     * @param utf8decode optional parameter, if set to true UTF8 string is decoded back to Unicode
     *                   after conversion from base64
     * @return           decoded string
     */
    String.prototype.decodeBase64 = function(utf8decode) {
      utf8decode =  (typeof utf8decode == 'undefined') ? false : utf8decode;
      var o1, o2, o3, h1, h2, h3, h4, bits, d=[], plain, coded;

      coded = utf8decode ? this.decodeUTF8() : this;

      for (var c=0; c<coded.length; c+=4) {  // unpack four hexets into three octets
        h1 = b64.indexOf(coded.charAt(c));
        h2 = b64.indexOf(coded.charAt(c+1));
        h3 = b64.indexOf(coded.charAt(c+2));
        h4 = b64.indexOf(coded.charAt(c+3));

        bits = h1<<18 | h2<<12 | h3<<6 | h4;

        o1 = bits>>>16 & 0xff;
        o2 = bits>>>8 & 0xff;
        o3 = bits & 0xff;

        d[c/4] = String.fromCharCode(o1, o2, o3);
        // check for padding
        if (h4 == 0x40) d[c/4] = String.fromCharCode(o1, o2);
        if (h3 == 0x40) d[c/4] = String.fromCharCode(o1);
      }
      plain = d.join('');  // join() is far faster than repeated string concatenation

      return utf8decode ? plain.decodeUTF8() : plain;
    }

    /**
     * Encode multi-byte Unicode string into utf-8 multiple single-byte characters
     * (BMP / basic multilingual plane only) (instance method extending String object).
     *
     * Chars in range U+0080 - U+07FF are encoded in 2 chars, U+0800 - U+FFFF in 3 chars
     *
     * @return encoded string
     */
    String.prototype.encodeUTF8 = function() {
      // use regular expressions & String.replace callback function for better efficiency
      // than procedural approaches
      var str = this.replace(
        /[\u0080-\u07ff]/g,  // U+0080 - U+07FF => 2 bytes 110yyyyy, 10zzzzzz
        function(c) {
          var cc = c.charCodeAt(0);
          return String.fromCharCode(0xc0 | cc>>6, 0x80 | cc&0x3f); }
      );
      str = str.replace(
        /[\u0800-\uffff]/g,  // U+0800 - U+FFFF => 3 bytes 1110xxxx, 10yyyyyy, 10zzzzzz
        function(c) {
          var cc = c.charCodeAt(0);
          return String.fromCharCode(0xe0 | cc>>12, 0x80 | cc>>6&0x3F, 0x80 | cc&0x3f); }
      );
      return str;
    }

    /**
     * Decode utf-8 encoded string back into multi-byte Unicode characters
     * (instance method extending String object).
     *
     * @return decoded string
     */
    String.prototype.decodeUTF8 = function() {
      var str = this.replace(
        /[\u00c0-\u00df][\u0080-\u00bf]/g,                 // 2-byte chars
        function(c) {  // (note parentheses for precence)
          var cc = (c.charCodeAt(0)&0x1f)<<6 | c.charCodeAt(1)&0x3f;
          return String.fromCharCode(cc); }
      );
      str = str.replace(
        /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,  // 3-byte chars
        function(c) {  // (note parentheses for precence)
          var cc = ((c.charCodeAt(0)&0x0f)<<12) | ((c.charCodeAt(1)&0x3f)<<6) | ( c.charCodeAt(2)&0x3f);
          return String.fromCharCode(cc); }
      );
      return str;
    };
    $scope.Kilavuz = function () {

    };
  }
)

