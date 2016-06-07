angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
$ionicPlatform.ready(function() {
if(window.cordova && window.cordova.plugins.Keyboard) {
 cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
 cordova.plugins.Keyboard.disableScroll(false);
}
if(window.StatusBar) {
 StatusBar.styleDefault();
}
});
})
.config(function($stateProvider, $urlRouterProvider) {
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
   };
 })

.controller('mainCtrl', function($scope, $ionicScrollDelegate) {
     var historyOpen=0;
     var detailOpen=0;
     var swiperH = new Swiper('.swiper-container-h', {
       spaceBetween: 0,
       loop:false,
       initialSlide:1,
       slidesPerView: 1,
       nextButton: '.n-positive',
       prevButton: '.n-negative'
     });
     var swiperV = new Swiper('.swiper-container-v', {
       direction: 'vertical',
       spaceBetween: 1,
       initialSlide:1

     });

     var start="we60/emergency-stop-alarm/button-pressed";
     $.getJSON( "js/data.json", function(data) {
          appendSwiperH(
          start,
          data.cards[start].processes,
          data.cards[start].processes.length,
          data.cards[start].question,
          data.cards[start].positive.label,
          data.cards[start].negative.label,
          data.cards[start].positive.target,
          data.cards[start].negative.target);
          prependSwiperH(
          start,
          data.cards[data.cards[start].negative.target].processes,
          data.cards[data.cards[start].negative.target].processes.length,
          data.cards[data.cards[start].negative.target].question,
          data.cards[data.cards[start].negative.target].positive.label,
          data.cards[data.cards[start].negative.target].negative.label,
          data.cards[data.cards[start].negative.target].positive.target,
          data.cards[data.cards[start].negative.target].negative.target);
          appendSwiperH(
          start,
          data.cards[data.cards[start].positive.target].processes,
          data.cards[data.cards[start].positive.target].processes.length,
          data.cards[data.cards[start].positive.target].question,
          data.cards[data.cards[start].positive.target].positive.label,
          data.cards[data.cards[start].positive.target].negative.label,
          data.cards[data.cards[start].positive.target].positive.target,
          data.cards[data.cards[start].positive.target].negative.target);
          console.log("Negative "+ data.cards[start].negative.target);
          console.log("Positive " + data.cards[start].positive.target);
     });

     function appendSwiperH(id,processes,processlength,question,positive,negative,positive_target,negative_target)
     {
          var processestitle="";
          for (var i = 0; i < processlength; i++) {
              processestitle = processestitle +"<section class='n-process'>"+processes[i].title+"</section> ";
          }
          if (positive==null) {
               positive="Yes";
          }
          if (negative==null) {
               negative="No";
          }
          swiperH.appendSlide("<div class='swiper-slide' id='"+id+"'>"+
                              "<section class='n-card' >"+
                              "<header>"+
                              processestitle+
                              "<section class='n-question'>"+question+"</section> "+
                              " </header>"+
                              "<nav>"+
                              "<section class='n-positive' id='"+positive_target+"'>"+positive+"</section>"+
                              "<section class='n-negative' id='"+negative_target+"'>"+negative+"</section>"+
                              "</nav>"+
                              "</section>"+
                              "</div>");
     }

     function prependSwiperH(id,processes,processlength,question,positive,negative,positive_target,negative_target)
     {
          var processestitle="";
          for (var i = 0; i < processlength; i++) {
              processestitle = processestitle +"<section class='n-process'>"+processes[i].title+"</section> ";
          }
          if (positive==null) {
               positive="Yes";
          }
          if (negative==null) {
               negative="No";
          }
          swiperH.prependSlide("<div class='swiper-slide' id='"+id+"'>"+
                              "<section class='n-card' >"+
                              "<header>"+
                              processestitle+
                              "<section class='n-question'>"+question+"</section> "+
                              " </header>"+
                              "<nav>"+
                              "<section class='n-positive' id='"+positive_target+"'>"+positive+"</section>"+
                              "<section class='n-negative' id='"+negative_target+"'>"+negative+"</section>"+
                              "</nav>"+
                              "</section>"+
                              "</div>");

     }

     function getCard()
     {
          var negativeid=$(".swiper-slide .swiper-slide-active .n-negative").attr('id');
          var positiveid=$(".swiper-slide .swiper-slide-active .n-positive").attr('id');

          $.getJSON( "js/data.json", function(data) {
               console.log("negative "+negativeid);
               console.log("positive "+positiveid);
                    prependSwiperH(
                    negativeid,
                    data.cards[negativeid].processes,
                    data.cards[negativeid].processes.length,
                    data.cards[negativeid].question,
                    data.cards[negativeid].positive.label,
                    data.cards[negativeid].negative.label,
                    data.cards[negativeid].positive.target,
                    data.cards[negativeid].negative.target);
                    appendSwiperH(
                    positiveid,
                    data.cards[positiveid].processes,
                    data.cards[positiveid].processes.length,
                    data.cards[positiveid].question,
                    data.cards[positiveid].positive.label,
                    data.cards[positiveid].negative.label,
                    data.cards[positiveid].positive.target,
                    data.cards[positiveid].negative.target);
                    swiperH.update();
                    console.log(swiperH.activeIndex);
               });

     }

swiperV.on('onTouchMove', function (e) {

});

swiperV.on('SlideNextStart', function () {
    var videoCount=0;
    var detailListElement="";
    if(historyOpen==0&&detailOpen==0){detailOpen++;}else if(historyOpen==1&&detailOpen==0){historyOpen--; }
    var id=$(".swiper-slide .swiper-slide-active").attr('id');
    $.getJSON( "js/data.json", function(data) {
         for (var i = 0; i < data.cards[id].processes.length; i++) {
              for (var j = 0; j < data.cards[id].processes[i].steps.length; j++) {
                     detailListElement = detailListElement + "<li>"+data.cards[id].processes[i].steps[j]+"</li>";
              }
             if (data.cards[id].processes[i].video!=null) {
               videoCount++;
             }

        }
        $(".swiper-no-swiping").html(detailListElement);
        if (videoCount!=0) {
             $(".videoContent").css("visibility","visible");
             $(".swiper-no-swiping").css("height","50vh");
             $(".swiper-no-swiping").css("margin-top","5vh");
        }
        else {
            $(".videoContent").css("visibility","hidden");
            $(".swiper-no-swiping").css("height","89vh");
            $(".swiper-no-swiping").css("margin-top","-30vh");
        }
   });



});

$( ".swiper-no-swiping" ).scroll(function() {
  console.log("gsdfasdsadsa");
});

swiperV.on('SlidePrevStart', function () {
     if(historyOpen==0&&detailOpen==0){historyOpen++;}else if(historyOpen==0&&detailOpen==1){ detailOpen--; }
});

swiperH.on('SlideNextEnd', function () {
     if (historyOpen!=0) {
     swiperV.slideNext();
     swiperV.update();
     }
     swiperH.removeSlide([0, 1]);
     console.log(swiperH.activeIndex);
     getCard();
});

swiperH.on('SlidePrevEnd', function () {
     swiperH.removeSlide([1, 2]);
     getCard();
});

})
