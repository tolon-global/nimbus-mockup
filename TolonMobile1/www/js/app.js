var datLog={
  "61f4ce71-b464-43ae-8819-7dc6a1b5d109": "946717",
  "242a9171-edc3-4989-a9f5-e13475843013": "025498",
  "bef0075f-c854-40d2-95c5-9d3151cad6cf": "662325",
  "296efb70-9d47-4a65-be7c-15b08c221f5e": "262474",
  "6bc0067d-1e5e-410a-b80e-16103fbe2a8d": "121032",
  "b46c7892-ce89-4148-87df-1fe22e9c8741": "942738",
  "069d627f-7be6-4170-ba81-dffa4102cf54": "720582",
  "8d2505bb-e9f6-44a5-af28-80620dc771b5": "038618",
  "f4e2b897-ca6d-4d11-ae20-bb1a64e1fb12": "105745",
  "e28af417-72fc-45f3-ba7a-ce11dbcdd604": "927583",
  "b2ffbe53-5ea2-46f0-a209-29f3dfce27e9": "916520",
  "1faf127c-9daf-468f-91b4-20508a5a317f": "365020",
  "e3b712a3-3fc3-4939-a3d9-7f8b31e14e48": "734473",
  "f03d6b6a-6b29-4006-9d6b-afd3bc5284ab": "892416",
  "208bd7a1-321f-4512-a740-6dfc5da6506f": "972427",
  "d0a70729-62c2-44ab-9c2e-9726d57ae46b": "129562",
  "daf46e0f-b5b4-479d-88bf-0376b16ef3af": "630098",
  "d7130478-f551-48f6-811b-2d4853ef671f": "703296",
  "b985296b-2331-4c44-b602-b6dca35b629b": "823239",
  "a84ec274-e1c9-4bdf-a2e9-acb72ec26706": "573514"
}


angular.module('starter', ['ionic','ngCordova'])

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
.controller('OpenCtrl', function($scope, $state, $cordovaBarcodeScanner, $cordovaToast,$ionicHistory) {
   $scope.Servis = function() {

     $state.go('main');
   };
    $scope.Login = function() {

      $cordovaBarcodeScanner.scan().then(function(imageData) {
        console.log("Barcode Format -> " + imageData.format);
        console.log("Cancelled -> " + imageData.cancelled);
        var res1 = imageData.text;
        if(res1!=null){

          $cordovaToast
            .show("Password : "+datLog[res1], 'long', 'center')
            .then(function(success) {
              // success
            }, function (error) {
              // error
            });
        }else{
          $cordovaToast
            .show('Please Try Again', 'long', 'center')
            .then(function(success) {
              // success
            }, function (error) {
              // error
            });
        };
      }, function(error) {
        console.log("An error happened -> " + error);
      });
    };
 })


.controller('mainCtrl', function($scope, $ionicScrollDelegate, $cordovaBarcodeScanner,$state, $ionicHistory) {

    $scope.checkScrollHist = function () {

      var currentTop = $ionicScrollDelegate.$getByHandle('scrollerHist').getScrollPosition().top;
      var maxTop = $ionicScrollDelegate.$getByHandle('scrollerHist').getScrollView().__maxScrollTop;

      if(currentTop == 0)
      {
        alert('top of scroll!');
      }

      if (currentTop >= maxTop)
      {
        // hit the bottom
        alert('bottom of scroll!');
      }
    };
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

   var start="";
      var strt=false;
    function getFirstCard(start){
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
      });
    }
    var baslangic=0;
     $.getJSON( "js/data.json", function(data) {
       if (strt==false){
          baslangic++;
         swiperH.appendSlide("<div class='swiper-slide' id=''>"+
         "<section class='n-card'>"+
         "<header>"+
         "<section class='n-process'>"+
         "Enter the serial number"+
         "<input style='width: 91vw' type='number' name='some_name' value='' placeholder='Serial number'>"+
         "</section><section><button class='qr' id='simdilik'>Get from QR code</button></section> "+
         " </header>"+
         "<nav>"+
         "<section class='n-positive'>"+"Done </section>"+
         "<section class='n-negative' id=''>"+"I can't</section>"+
         "</nav>"+
         "</section>"+
         "</div>");
         detailListElement = "<section>"+
         "<h2 class='detailTitle' style='margin: 2em 1em 1em; font-size: .75em; font-weight: 100;'>Enter the serial number</h2>"+
         "<div class='videoContent' style='visibility: collapse'>"+
         "<video id='n-VideoElement' preload='auto'  type='video/mp4'  webkitallowfullscreen mozallowfullscreen allowfullscreen  poster='css/video.svg'>"+
         "</video>"+
         "<div class='video-controls'>"+
         "<div class='playpause icon-play'></div>"+
         "<progress class='seekBarDetail' value='' max='100'></progress>"+
         "<div class='icon-subtitles'></div>"+
         "<div class='icon-left'></div>"+
         "<div class='icon-right'></div>"+
         "<div class='icon-fullscreen'></div>"+
         "</div>"+
         "</div>"+
         "<scrollview class='detailScroll swiper-no-swiping' id='detailDelegate' style='height: 40%' >"+
         "<ol>"+
         "<li>The serial number can be found at the backplate</li>"+
         "</ol>"+
         "</scrollview>"+
         "</section>";
         $("#detail").html(detailListElement);

       }else {
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
       }
     });
     function appendSwiperH(id,processes,processlength,question,positive,negative,positive_target,negative_target)
     {
          var processestitle="";
          for (var i = 0; i < processlength; i++) {
              processestitle = processestitle +"<section class='n-process'>"+processes[i].title+"<span class='nimbusexit'></span></section>";
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
                              "<section class='n-positive card-main1' id='"+positive_target+"'>"+positive+"</section>"+
                              "<section class='n-negative card-main2' id='"+negative_target+"'>"+negative+"</section>"+
                              "</nav>"+
                              "</section>"+
                              "</div>");
     }

     function prependSwiperH(id,processes,processlength,question,positive,negative,positive_target,negative_target)
     {
          var processestitle="";
          for (var i = 0; i < processlength; i++) {
              processestitle = processestitle +"<section class='n-process'>"+processes[i].title+"<span class='nimbusexit'></span></section>";
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
                              "<section class='n-positive card-main1' id='"+positive_target+"'>"+positive+"</section>"+
                              "<section class='n-negative card-main2' id='"+negative_target+"'>"+negative+"</section>"+
                              "</nav>"+
                              "</section>"+
                              "</div>");

     }

    function getCard(dir)
    {
      var negativeid=$(".swiper-slide .swiper-slide-active .n-negative").attr('id');
      var positiveid=$(".swiper-slide .swiper-slide-active .n-positive").attr('id');

      $.getJSON( "js/data.json", function(data) {
        if(dir==0){
          console.log(negativeid)
          if((typeof data[negativeid].title)=='undefined'){
            console.log("asdasdasssss");
            var title ="Unnamed";
          }else{
            var title = data[negativeid].title;
          }
          var txt=data[negativeid].negative.label;
          var clas="n-negative";

        }else{
          if((typeof data[positiveid].title)=='undefined'){
            var title ="Unnamed";
          }else{
            var title = data[positiveid].title;
          }
          var txt=data[positiveid].positive.label;
          var clas="n-positive";
        }
        console.log(title);
        var histEve=true;
        var histEveDet=false;
        var histEveSt=0;
        if(HistList.length==0){
          HistList.push({"title":title, "ans":txt, "class":clas, "id":start});
          histEve=false;
        }else {
          for (var i = 0; i < HistList.length; i++) {
            console.log(HistList[i]);
            if (start == HistList[i].id) {
              if (HistList[i].ans != txt) {
                HistList[i].id = start;
                HistList[i].ans = txt;
                HistList[i].class = clas
                histEveDet=true;
                histEveSt=i;
                break;
              }
              histEve=false;
            }
          }
        }

        if (histEve){
          HistList.push({"title": title, "ans": txt, "class": clas, "id": start});
        }
        if (histEveDet){
          for(var i=histEveSt+1;i<HistList.length;i++)
            delete HistList[i];
        }


        console.log(HistList);
        if(dir==0){
          start=negativeid;
        }else{
          start=positiveid;
        }
        console.log("sonra"+start);
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

               });


     }

swiperV.on('onTouchStart', function (e) {
     if (detailOpen!=0) {
          if($(".detailScroll").scrollTop()<6 && $(".detailScroll").height > ($(window).height()*0.3)){
            $(".detailScroll").removeClass('swiper-no-swiping');

          }
          else {
            $(".detailScroll").addClass('swiper-no-swiping');

          }
     }
});

$scope.checkScrollDetail = function () {

 var currentTop = $ionicScrollDelegate.$getByHandle('scrollerDetail').getScrollPosition().top;
 var maxTop = $ionicScrollDelegate.$getByHandle('scrollerDetail').getScrollView().__maxScrollTop;

 if (currentTop == 0) {
   //alert('top of scroll!');
 }

 if (currentTop >= maxTop) {
   // hit the bottom
   //alert('bottom of scroll!');
 }
};
    var vidList=[];
swiperV.on('SlideNextStart', function () {
     $(".sequence").removeClass('currentSequence');
     $(".playpause").removeClass('icon-pause');
     $(".playpause").addClass('icon-play');
     play=0;
     play1=0;
    var videoCount=0;
    var vidCount=0;
    var detailListElement="";
    var detailListTitle="";
    var detailContent="";
    if(historyOpen==0&&detailOpen==0){detailOpen++;}else if(historyOpen==1&&detailOpen==0){historyOpen--; }
    var id=start;
    $.getJSON( "js/data.json", function(data) {
         for (var i = 0; i < data[id].processes.length; i++) {
              var steps = data[id].processes[i].steps;

              switch (steps.constructor) {
                   case Array:
                        for (var j = 0; j < steps.length; j++) {
                               detailListElement = detailListElement + "<li>"+ steps[j]+"</li>";
                        }
                        break;
                   case Object:
                         for (var step in steps) {
                              detailListElement = detailListElement + "<li class='sequence' id='"+vidCount+"'>"+ steps[step] +"</li>";
                              vidList.push({"id":vidCount,"src":"video/"+data[id].processes[i].video+".mp4", "time":step});
                              vidCount++;
                         }
                        break;
                   default:
                        break;
              }
             if (data[id].processes[i].video!=null) {
               videoCount++;
               myvid.src="video/"+data[id].processes[0].video+".mp4";
                 $(".seekBarDetail").val(0);
                 $(".playpause").addClass('icon-play');
                 $(".playpause").removeClass('icon-pause');
               myvids.push("video/"+data[id].processes[i].video+".mp4");
             }
             $(".detailScroll").scrollTop(1);

             detailContent="<section>"+
                            "<h2>"+data[id].processes[i].title+"</h2>"+
                            "<ol>"+detailListElement+"</ol>"+
                           "</section>";

            $(".detailScroll").html( $(".detailScroll").html()+detailContent);
        }
           $(".detailTitle").html(data[id].title);


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


});
document.addEventListener('touchstart', function() {
     if($(".detailScroll").scrollTop() ==0){
       $(".detailScroll").removeClass('swiper-no-swiping');
     }
}, false);

swiperV.on("onTouchEnd",function(e){
});

swiperV.on('SlidePrevStart', function () {
     if(historyOpen==0&&detailOpen==0){
      historyOpen++;
       $("#histList").html("");
     if($('#histList').scroll()[0].scrollHeight>$(window).height()){
             $('.history').addClass('swiper-no-swiping');
           }else{
             $('.history').removeClass('swiper-no-swiping');
           }

       for(var i =0;i<HistList.length;i++){
         $("#histList").html($("#histList").html() + "<li class='"+HistList[i].class+"' id='"+HistList[i].id+"'><em>" + HistList[i].title +"<strong> "+HistList[i].ans +"</strong></em></li>");
       }
     }else if(historyOpen==0&&detailOpen==1){
      detailOpen--;
     }
     myvid.src="";
     myvid.pause();
});

swiperH.on('SlideNextEnd', function () {
     dir=1;
        if (historyOpen!=0) {
        swiperV.slideNext(true,0);
          historyOpen=0;
        }
        swiperH.removeSlide([0, 1]);
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
     if (exit==1) {
          swiperH.appendSlide("<div class='swiper-slide' id='"+"id"+"'>"+
         "<section class= 'n-card n-escape' >"+
         "<header class='n-esc'>"+
         "<section class='question'>Your progress is saved. You can continue this service call by entering the machine serial number again.</section>"+
         " </header>"+
         "<nav><section class='final' id='final'>Main menu</section></nav>"+
         "</section>"+
         "</div>");
         swiperH.prependSlide("<div class='swiper-slide' id='"+"id"+"'>"+
         "<section class= 'n-card n-escape' >"+
         "<header class='n-esc'>"+
         "<section class='question'>Your progress is saved. You can continue this service call by entering the machine serial number again.</section>"+
         " </header>"+
         "<nav><section class='final' id='final'>Main menu</section></nav>"+
         "</section>"+
         "</div>");
         exit=2;
     }
});

swiperH.on('SlideNextStart', function () {
  if (exit==2) {

       swiperH.appendSlide("<div class='swiper-slide' id='"+"id"+"'>"+
    "<section class= 'n-card n-escape' >"+
    "<header class='n-esc'>"+
    "<section class='question'>Your progress is saved. You can continue this service call by entering the machine serial number again.</section>"+
    " </header>"+
    "<nav><section class='final' id='final'>Main menu</section></nav>"+
    "</section>"+
    "</div>");
    swiperH.lockSwipes();
  }
});
var play=0;
var ilk=false;
$('.playpause').click(function() {
  if (play==0) {
       if (!ilk) {
            myvid.src=myvids[0];
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
          myvid.src=myvids[0];
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
   myvid.src=myvids[activeVideo];
    myvid.play();
});

$('.icon-left').click(function() {
     if (activeVideo-1>0) {
             myvid.src=myvids[activeVideo-1];
          myvid.play();
     }
});

$('.icon-right').click(function() {
     if (activeVideo+1<myvids.length) {
             myvid.src=myvids[activeVideo+1];
          myvid.play();
     }
});

$('.icon-fullscreen').click(function() {
     if (myvid.requestFullscreen) {
       myvid.requestFullscreen();
     } else if (myvid.mozRequestFullScreen) {
       myvid.mozRequestFullScreen(); // Firefox
     } else if (myvid.webkitRequestFullscreen) {
       myvid.webkitRequestFullscreen(); // Chrome and Safari
     }
});


myvid.addEventListener("timeupdate", function() {
  var value1 = (100 / myvid.duration) * myvid.currentTime;
  $(".seekBarDetail").val(value1);
});

$(document).on("click",".n-positive",function()
{
 swiperH.slideNext();
});
$(document).on("click",".n-negative",function()
{
 swiperH.slidePrev();
});

    var escapeCard="escape/general/root-cause";

    var exit=0;
    $(document).on("click",".nimbusexit",function()
    {
      exit=1;
      var neg="";var pos=""; var negtar="";var postar="";var opt=""; var ques=""; var detail="";
      $.getJSON( "js/data.json", function(data) {

        neg= data[escapeCard].negative.label;
        pos= data[escapeCard].positive.label;
        negtar= data[escapeCard].negative.target;
        postar= data[escapeCard].positive.target;
        ques=data[escapeCard].question;
        for (var i = 0; i < data[escapeCard].options.length; i++) {
          opt=opt+"<input type='radio' class='exitOpt' name='whats-wrong' value='"+data[escapeCard].options[i].target+"' id='"+data[escapeCard].options[i].title+"'><label for='"+data[escapeCard].options[i].title+"'>"+data[escapeCard].options[i].title+"</label>";
          detail=detail + "<section><h2>"+data[escapeCard].options[i].title+"</h2><p>"+data[escapeCard].options[i].description+"</p></section>";
        }

        swiperH.removeSlide([0, 1,2]);
        swiperH.appendSlide("<div class='swiper-slide' id='"+"id"+"'>"+
        "<section class= 'n-escape n-card' >"+
        "<header class='n-esc'>"+
        "<section class='question'>"+ques+opt+
        "</section>"+
        " </header>"+
        "<nav>"+
        "<section class='n-positive exitPositive' id='"+postar+"'>"+pos+"</section>"+
        "<section class='n-negative exitNegative' id='"+negtar+"'>"+neg+"</section>"+
        "</nav>"+
        "</section>"+
        "</div>");
        swiperH.prependSlide("<div class='swiper-slide' id='"+"id"+"'>"+
        "<section class= 'n-escape n-card' >"+
        "<header class='n-esc'>"+
        "<section class='question'>Please describe the problem <textarea name='some_name' value='' placeholder='' col='20'></textarea> </section>"+
        " </header>"+
        "<nav>"+
        "<section class='n-positive exitPositive' id='"+postar+"'>Done</section>"+
        "<section class='n-negative exitNegative' id='"+negtar+"'>I can't</section>"+
        "</nav>"+
        "</section>"+
        "</div>");

      })

    });
    $(document).on("click",".exitOpt",function()
    {
      var neg="";var pos=""; var negtar="";var postar="";var opt=""; var ques=""; var detail="";
      $.getJSON( "js/data.json", function(data) {

        neg= data[escapeCard].negative.label;
        pos= data[escapeCard].positive.label;
        negtar= data[escapeCard].negative.target;
        postar= data[escapeCard].positive.target;
        ques=data[escapeCard].question;
        for (var i = 0; i < data[escapeCard].options.length; i++) {
          opt=opt+"<input type='radio' class='exitOpt' name='whats-wrong' value='"+data[escapeCard].options[i].target+"' id='"+data[escapeCard].options[i].title+"'><label for='"+data[escapeCard].options[i].title+"'>"+data[escapeCard].options[i].title+"</label>";
          detail=detail + "<section><h2>"+data[escapeCard].options[i].title+"</h2><p>"+data[escapeCard].options[i].description+"</p></section>";
        }
        swiperH.appendSlide("<div class='swiper-slide' id='"+"id"+"'>"+
        "<section class= 'n-card n-escape' >"+
        "<header class='n-esc'>"+
        "<section class='question'>Your progress is saved. You can continue this service call by entering the machine serial number again.</section>"+
        " </header>"+
        "<nav><section class='final' id='final'>Main menu</section></nav>"+
        "</section>"+
        "</div>");
        console.log("<main>"+detail+"</main>");
        $("#DetailCard").css("background-color","#442227 ");
        $("#detail").html("<main>"+detail+"</main>");
      })
    });

    $(document).on("click",".exitPositive",function()
    {
      swiperH.slideNext();
    });
    $(document).on("click",".exitNegative",function()
    {
      swiperH.slidePrev();
    });
    var previtem="";
    $(document).on("click",".sequence",function()
    {
      var id1= $(this).attr('id');
      myvid.src=vidList[id1].src;
      $(".sequence").removeClass('currentSequence');
      $(this).addClass('currentSequence');
      myvid.play();
      myvid.currentTime=vidList[id1].time;
      $(".playpause").removeClass('icon-play');
      $(".playpause").addClass('icon-pause');
      ilk=true;
      play++;
      play1++;
    });
    $(document).on("click",".exitPositive",function()
    {
      dir=1;
      swiperH.removeSlide([0, 1]);
      getCard(dir);
    });
    $(document).on("click",".exitNegative",function()
    {
      dir=0;
      swiperH.removeSlide([1, 2]);
      getCard(dir);
    });
var previtem="";
$(document).on("click",".sequence",function()
{
  var id1= $(this).attr('id');
  myvid.src=vidList[id1].src;
     $(".sequence").removeClass('currentSequence');
     $(this).addClass('currentSequence');
     myvid.play();
    myvid.currentTime=vidList[id1].time;
     $(".playpause").removeClass('icon-play');
     $(".playpause").addClass('icon-pause');
     ilk=true;
     play++;
     play1++;
});
$(document).on("click","#simdilik",function()
   {

        start="we60/emergency-stop-alarm/button-pressed";
        swiperH.removeSlide([0]);
        getFirstCard(start);
   });
$(document).on("click","#final",function()
 {
      $ionicHistory.clearHistory();
     $state.go('index');

 });
$(document).on("click","#QrButton",function()
   {
     $cordovaBarcodeScanner.scan().then(function(imageData) {
       console.log("Barcode Format -> " + imageData.format);
       console.log("Cancelled -> " + imageData.cancelled);
       var res1 = JSON.parse(imageData.text);
       if(res1!=null){
         start=res1["start"];
         swiperH.removeSlide([0]);
         getFirstCard(start);
       }else{
         alert("QrCode is not Valid Please Try Again!");
       }
     }, function(error) {
       console.log("An error happened -> " + error);
     });
   });
    $(document).on("click","#histList .n-positive",function()
    {

      console.log($(this)[0].id);
      var start1=$(this)[0].id;
      swiperH.removeSlide([0, 1, 2]);
      $.getJSON( "js/data.json", function(data) {
        appendSwiperH(
          start1,
          data[start1].processes,
          data[start1].processes.length,
          data[start1].question,
          data[start1].positive.label,
          data[start1].negative.label,
          data[start1].positive.target,
          data[start1].negative.target);
        prependSwiperH(
          data[start1].negative.target,
          data[data[start1].negative.target].processes,
          data[data[start1].negative.target].processes.length,
          data[data[start1].negative.target].question,
          data[data[start1].negative.target].positive.label,
          data[data[start1].negative.target].negative.label,
          data[data[start1].negative.target].positive.target,
          data[data[start1].negative.target].negative.target);
        console.log(data[start1].positive.target);
        appendSwiperH(
          data[start1].positive.target,
          data[data[start1].positive.target].processes,
          data[data[start1].positive.target].processes.length,
          data[data[start1].positive.target].question,
          data[data[start1].positive.target].positive.label,
          data[data[start1].positive.target].negative.label,
          data[data[start1].positive.target].positive.target,
          data[data[start1].positive.target].negative.target);
        swiperH.update();
      });
      swiperV.slideNext();
      start=start1;
    });

    $(document).on("click","#histList .n-negative",function()
    {
      swiperH.removeSlide([0, 1, 2]);
      console.log($(this)[0].id);
      var start1=$(this)[0].id;
      $.getJSON( "js/data.json", function(data) {
        appendSwiperH(
          start1,
          data[start1].processes,
          data[start1].processes.length,
          data[start1].question,
          data[start1].positive.label,
          data[start1].negative.label,
          data[start1].positive.target,
          data[start1].negative.target);
        prependSwiperH(
          data[start1].negative.target,
          data[data[start1].negative.target].processes,
          data[data[start1].negative.target].processes.length,
          data[data[start1].negative.target].question,
          data[data[start1].negative.target].positive.label,
          data[data[start1].negative.target].negative.label,
          data[data[start1].negative.target].positive.target,
          data[data[start1].negative.target].negative.target);
        appendSwiperH(
          data[start1].positive.target,
          data[data[start1].positive.target].processes,
          data[data[start1].positive.target].processes.length,
          data[data[start1].positive.target].question,
          data[data[start1].positive.target].positive.label,
          data[data[start1].positive.target].negative.label,
          data[data[start1].positive.target].positive.target,
          data[data[start1].positive.target].negative.target);
        swiperH.update();
        start=start1;
      });
      swiperV.slideNext();
    });
})
