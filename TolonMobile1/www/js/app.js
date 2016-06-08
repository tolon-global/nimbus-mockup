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
.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
       return $sce.trustAsResourceUrl(url);
    };
}])
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
$scope.object={'src': ''};
     var historyOpen=0;
     var detailOpen=0;
     var HistList=[];
     var dir=0;
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

     var start="we110/steam/heater-fail/check-steam-heating-do";
     $.getJSON( "js/data.json", function(data) {
          appendSwiperH(
          start,
          data[start].processes,
          data[start].processes.length,
          data[start].question,
          data[start].positive.label,
          data[start].negative.label,
          data[start].positive.target,
          data[start].negative.target);
          prependSwiperH(
          data[start].negative.target,
          data[data[start].negative.target].processes,
          data[data[start].negative.target].processes.length,
          data[data[start].negative.target].question,
          data[data[start].negative.target].positive.label,
          data[data[start].negative.target].negative.label,
          data[data[start].negative.target].positive.target,
          data[data[start].negative.target].negative.target);
          appendSwiperH(
          data[start].positive.target,
          data[data[start].positive.target].processes,
          data[data[start].positive.target].processes.length,
          data[data[start].positive.target].question,
          data[data[start].positive.target].positive.label,
          data[data[start].positive.target].negative.label,
          data[data[start].positive.target].positive.target,
          data[data[start].positive.target].negative.target);
          console.log("Negative "+ data[start].negative.target);
          console.log("Positive " + data[start].positive.target);
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
               if(dir==0){
                 var title = data[start].title;
                 var txt=data[start].negative.label;
                 var clas="n-negative";
                 start=data[start].negative.target;

               }else{
                 var title = data[start].title;
                 var txt=data[start].positive.label;
                 var clas="n-positive";
                 start=data[start].positive.target;

               }
               HistList.push({"title":title, "ans":txt, "class":clas});
               $("#histList").html($("#histList").html() + "<li class='"+HistList[HistList.length-1].class+"'><em>" + HistList[HistList.length-1].title +"<strong> "+HistList[HistList.length-1].ans +"</strong></em></li>");
               $(".history").css('margin-top', $(window).height()- $(".history").height()-$(window).height()*0.05);

               console.log("negative "+negativeid);
               console.log("positive "+positiveid);
                    prependSwiperH(
                    negativeid,
                    data[negativeid].processes,
                    data[negativeid].processes.length,
                    data[negativeid].question,
                    data[negativeid].positive.label,
                    data[negativeid].negative.label,
                    data[negativeid].positive.target,
                    data[negativeid].negative.target);
                    appendSwiperH(
                    positiveid,
                    data[positiveid].processes,
                    data[positiveid].processes.length,
                    data[positiveid].question,
                    data[positiveid].positive.label,
                    data[positiveid].negative.label,
                    data[positiveid].positive.target,
                    data[positiveid].negative.target);
                    swiperH.update();
                    console.log(swiperH.activeIndex);
               });

     }

swiperV.on('onTouchStart', function (e) {
     if (detailOpen!=0) {
          console.log("sadsad"+($(window).height()*0.3));
          if($(".detailScroll").scrollTop()<6 && $(".detailScroll").height > ($(window).height()*0.3)){
            $(".detailScroll").removeClass('swiper-no-swiping');

          }
          else {
               console.log("geldi");
            $(".detailScroll").addClass('swiper-no-swiping');

          }
     }
});

$scope.checkScrollDetail = function () {

 var currentTop = $ionicScrollDelegate.$getByHandle('scrollerDetail').getScrollPosition().top;
 var maxTop = $ionicScrollDelegate.$getByHandle('scrollerDetail').getScrollView().__maxScrollTop;

 if (currentTop == 0) {
   alert('top of scroll!');
 }

 if (currentTop >= maxTop) {
   // hit the bottom
   alert('bottom of scroll!');
 }
};

swiperV.on('SlideNextStart', function () {

    var videoCount=0;
    var detailListElement="";
    if(historyOpen==0&&detailOpen==0){detailOpen++;}else if(historyOpen==1&&detailOpen==0){historyOpen--; }
    var id=$(".swiper-slide .swiper-slide-active").attr('id');
    $.getJSON( "js/data.json", function(data) {
         for (var i = 0; i < data[id].processes.length; i++) {
              var steps = data[id].processes[i].steps

              switch (steps.constructor) {
                   case Array:
                        for (var j = 0; j < steps.length; j++) {
                               detailListElement = detailListElement + "<li>"+ steps[j]+"</li>";
                        }
                        break;
                   case Object:
                         for (var step in steps) {
                              detailListElement = detailListElement + "<li id='"+step+"'>"+ steps[step] +"</li>";
                         }
                        break;
                   default:

              }
             if (data[id].processes[i].video!=null) {
               videoCount++;
               myvids.push("http://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4");
             }
             console.log("bu"+myvids[0]);
             $(".detailScroll").scrollTop(1);
        }
        $(".detailScroll").html(detailListElement);

        if (videoCount!=0) {
             $(".videoContent").css("visibility","visible");
             $(".detailScroll").css("height","50vh");
             $(".detailScroll").css("margin-top","2vh");
        }
        else {
            $(".videoContent").css("visibility","hidden");
            $(".detailScroll").css("height","89vh");
            $(".detailScroll").css("margin-top","-38vh");
        }
   });

   $(".history").css('margin-top', 0);
  $("#xzc").css('height',$(window).height());
  $(".history").css('margin-top', $(window).height()- $(".history").height()-$(window).height()*0.05);


});
document.addEventListener('touchstart', function() {
     console.log($(".detailScroll").scrollTop());
     if($(".detailScroll").scrollTop() ==0){
       $(".detailScroll").removeClass('swiper-no-swiping');
     }
}, false);
swiperV.on("onTouchMove",function(e){
  console.log($(".history").height()+$(window).height()*0.05);
  if(e.touches.diff>($(".history").height()+$(window).height()*0.05)){

    //swiperV.slidePrev(true,0)
    //$(".history").css('margin-top',-$(window).height()*0);
    //$("#xzc").css('height',$(".history").height());

    $(".history").css('margin-top', $(window).height()- $(".history").height()-$(window).height()*0.05-(e.touches.diff-($(".history").height()+$(window).height()*0.05)));
    $("#xzc").css("height",$(window).height()-(e.touches.diff-($(".history").height()+$(window).height()*0.05)+1));
  }


});

swiperV.on("onTouchEnd",function(e){
  console.log($(".history").height()+$(window).height()*0.05);
  if(e.touches.diff>($(".history").height()+$(window).height()*0.05)){

    swiperV.slidePrev(true,0)
    $(".history").css('margin-top',0);
    $("#xzc").css('height',$(".history").height());
  }
});

swiperV.on('SlidePrevStart', function () {
     if(historyOpen==0&&detailOpen==0){
      historyOpen++;
      $(".history").css('margin-top',0);
      $("#xzc").css('height',$(".history").height());
     }else if(historyOpen==0&&detailOpen==1){
      detailOpen--;
     }
});

swiperH.on('SlideNextEnd', function () {
     dir=1;
        if (historyOpen!=0) {
        swiperV.slideNext(true,0);
          historyOpen=0;
        }
        swiperH.removeSlide([0, 1]);
        console.log(swiperH.activeIndex);
        getCard(dir);
});

swiperH.on('SlidePrevEnd', function () {
  dir=0;
  if (historyOpen!=0) {
    swiperV.slideTo(1,0);
    historyOpen=0;
  }
     swiperH.removeSlide([1, 2]);
     getCard(dir);
});

var play=0;
var ilk=false;
$('.playpause').click(function() {
  if (play==0) {
       if (!ilk) {
            $scope.object.src=myvids[0];
             $scope.$apply();
            document.getElementById('n-VideoElement').load();
            ilk=true;
       }
      document.getElementById('n-VideoElement').play();
      $(".playpause").removeClass('icon-play');
      $(".playpause").addClass('icon-pause');
     play++;
  }
  else {
      play=0;
      $(".playpause").addClass('icon-play');
      $(".playpause").removeClass('icon-pause');
      document.getElementById('n-VideoElement').pause();
  }
});

var play1=0;
$('#n-VideoElement').click(function() {
  if (play1==0) {
       if (!ilk) {
          $scope.object.src=myvids[0];
           $scope.$apply();
           document.getElementById('n-VideoElement').load();
           ilk=true;
      }
      document.getElementById('n-VideoElement').play();
      $(".playpause").removeClass('icon-play');
      $(".playpause").addClass('icon-pause');
     play1++;
  }
  else {
      play1=0;
      $(".playpause").addClass('icon-play');
      $(".playpause").removeClass('icon-pause');
      document.getElementById('n-VideoElement').pause();
  }
});

var myvid = document.getElementById('n-VideoElement');
var myvids = [];
var activeVideo = 0;
myvid.addEventListener('ended', function(e) {
    activeVideo = (++activeVideo) % myvids.length;
   $scope.object.src=myvids[activeVideo];
   $scope.$apply();
    myvid.play();
});

$('.icon-left').click(function() {
     if (activeVideo-1>0) {
             $scope.object.src=myvids[activeVideo-1];
              $scope.$apply();
          myvid.play();
     }
});

$('.icon-right').click(function() {
     if (activeVideo+1<myvids.length) {
             $scope.object.src=myvids[activeVideo+1];
              $scope.$apply();
          myvid.play();
     }
});
myvid.addEventListener("timeupdate", function() {
  var value1 = (100 / myvid.duration) * myvid.currentTime;
  $(".seekBarDetail").val(value1);
});

})
