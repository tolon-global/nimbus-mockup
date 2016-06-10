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
.controller('OpenCtrl', function($scope, $state) {
   $scope.Servis = function() {
     $state.go('main');
   };
 })

.controller('mainCtrl', function($scope, $ionicScrollDelegate, $cordovaBarcodeScanner) {
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
   var optionValue=0;
   var start="we110/steam/heater-fail/check-steam-heating-do";
      var strt=true;
     $.getJSON( "js/data.json", function(data) {
       if (strt==false){

         swiperH.appendSlide("<div class='swiper-slide' id=''>"+
         "<section class='n-card'>"+
         "<header>"+
         "<section class='n-process'>"+
         "Enter the serial number"+
         "<input style='width: 82vw' type='number' name='some_name' value='' placeholder='Serial number'>"+
         "</section><section><button class='qr'>Get from QR code</button></section> "+
         " </header>"+
         "<nav>"+
         "<section class='n-positive' id=''>"+"Done </section>"+
         "<section class='n-negative' id=''>"+"I can't</section>"+
         "</nav>"+
         "</section>"+
         "</div>");
         detailListElement = "<section>"+
         "<h2>Enter the serial number</h2>"+
         "<ol>"+
         "<li>The serial number can be found at the backplate</li>"+
         "</ol>"+
         "</section>";
         $("#detail").html(detailListElement);

       }else {
            if ((typeof data[start].options)=='undefined') {optionValue=0;}else{optionValue=1;}
         appendSwiperH(
           start,
           data[start].processes,
           data[start].processes.length,
           data[start].question,
           data[start].positive.label,
           data[start].negative.label,
           data[start].positive.target,
           data[start].negative.target,
           optionValue);
             if ((typeof data[data[start].negative.target].options)=='undefined') {optionValue=0;}else{optionValue=1;}
         prependSwiperH(
           data[start].negative.target,
           data[data[start].negative.target].processes,
           data[data[start].negative.target].processes.length,
           data[data[start].negative.target].question,
           data[data[start].negative.target].positive.label,
           data[data[start].negative.target].negative.label,
           data[data[start].negative.target].positive.target,
           data[data[start].negative.target].negative.target,
           optionValue);
             if ((typeof  data[data[start].positive.target].options)=='undefined') {optionValue=0;}else{optionValue=1;}
         appendSwiperH(
           data[start].positive.target,
           data[data[start].positive.target].processes,
           data[data[start].positive.target].processes.length,
           data[data[start].positive.target].question,
           data[data[start].positive.target].positive.label,
           data[data[start].positive.target].negative.label,
           data[data[start].positive.target].positive.target,
           data[data[start].positive.target].negative.target,
           optionValue);
       }
     });
     function appendSwiperH(id,processes,processlength,question,positive,negative,positive_target,negative_target,Isoption)
     {
          if (Isoption==0) {
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
                                   "<section class='n-positive' id='"+positive_target+"'>"+positive+"</section>"+
                                   "<section class='n-negative' id='"+negative_target+"'>"+negative+"</section>"+
                                   "</nav>"+
                                   "</section>"+
                                   "</div>");
          }
          else {
               swiperH.appendSlide("<div class='swiper-slide' id='"+"id"+"'>"+
                             "<section class= 'n-escape n-card' >"+
                             "<header class='n-esc'>"+
                             "<section class='question' style='margin: 1em 1.2em;'>"+ques+opt+
                             "</section>"+
                             " </header>"+
                             "<nav>"+
                             "<section class='n-positive' id='"+positive_target+"'>"+positive+"</section>"+
                             "<section class='n-negative' id='"+negative_target+"'>"+negative+"</section>"+
                             "</nav>"+
                             "</section>"+
                             "</div>");
          }

     }

     function prependSwiperH(id,processes,processlength,question,positive,negative,positive_target,negative_target,Isoption)
     {
          if (Isoption==0) {
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
                                   "<section class='n-positive' id='"+positive_target+"'>"+positive+"</section>"+
                                   "<section class='n-negative' id='"+negative_target+"'>"+negative+"</section>"+
                                   "</nav>"+
                                   "</section>"+
                                   "</div>");
          }
          else {
               swiperH.prependSlide("<div class='swiper-slide' id='"+"id"+"'>"+
                             "<section class= 'n-escape n-card' >"+
                             "<header class='n-esc'>"+
                             "<section class='question' style='margin: 1em 1.2em;'>"+ques+opt+
                             "</section>"+
                             " </header>"+
                             "<nav>"+
                             "<section class='n-positive' id='"+positive_target+"'>"+positive+"</section>"+
                             "<section class='n-negative' id='"+negative_target+"'>"+negative+"</section>"+
                             "</nav>"+
                             "</section>"+
                             "</div>");
          }
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


        console.log("once"+start);
        if(dir==0){
          start=negativeid;
        }else{
          start=positiveid;
        }
        console.log("sonra"+start);
         if ((typeof  data[negativeid].options)=='undefined') {optionValue=0;}else{optionValue=1;}
                    prependSwiperH(
                    negativeid,
                    data[negativeid].processes,
                    data[negativeid].processes.length,
                    data[negativeid].question,
                    data[negativeid].positive.label,
                    data[negativeid].negative.label,
                    data[negativeid].positive.target,
                    data[negativeid].negative.target,
                    optionValue);
         if ((typeof  data[positiveid].options)=='undefined') {optionValue=0;}else{optionValue=1;}
                    appendSwiperH(
                    positiveid,
                    data[positiveid].processes,
                    data[positiveid].processes.length,
                    data[positiveid].question,
                    data[positiveid].positive.label,
                    data[positiveid].negative.label,
                    data[positiveid].positive.target,
                    data[positiveid].negative.target,
                    optionValue);
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
   alert('top of scroll!');
 }

 if (currentTop >= maxTop) {
   // hit the bottom
   alert('bottom of scroll!');
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
var subtitleOpen=false;
$('.icon-subtitles').click(function() {
     if (!subtitleOpen) {
             myvid.textTracks[0].mode = 'hidden';
     }
     else {

             myvid.textTracks[0].mode = 'showing';
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


$(document).on("click",".nimbusexit",function()
{
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
$(document).on("click",".exitOpt",function()
{
     if (optLR==3) {
          $('.exitPositive').attr('id',(this).value);
          $('.exitNegative').attr('id',(this).value);

     }
     else if (optLR==2) {
          $('.exitPositive').attr('id',(this).value);
          getEscapeCard($('.exitPositive').attr('id'));
     }
     else if (optLR==1) {
          $('.exitNegative').attr('id',(this).value);
          getEscapeCard($('.exitNegative').attr('id'));
     }

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
$(document).on("click","#QrButton",function()
   {
     $cordovaBarcodeScanner.scan().then(function(imageData) {
       console.log("Barcode Format -> " + imageData.format);
       console.log("Cancelled -> " + imageData.cancelled);
       res1 = imageData.text;
       if(res1=="WE110"){
         //$state.go('main');
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
           if ((typeof  data[start1].options)=='undefined') {optionValue=0;}else{optionValue=1;}
        appendSwiperH(
          start1,
          data[start1].processes,
          data[start1].processes.length,
          data[start1].question,
          data[start1].positive.label,
          data[start1].negative.label,
          data[start1].positive.target,
          data[start1].negative.target,
          optionValue);
           if ((typeof  data[data[start1].negative.target].options)=='undefined') {optionValue=0;}else{optionValue=1;}
        prependSwiperH(
          data[start1].negative.target,
          data[data[start1].negative.target].processes,
          data[data[start1].negative.target].processes.length,
          data[data[start1].negative.target].question,
          data[data[start1].negative.target].positive.label,
          data[data[start1].negative.target].negative.label,
          data[data[start1].negative.target].positive.target,
          data[data[start1].negative.target].negative.target,
          optionValue);
           if ((typeof  data[data[start1].positive.target].options)=='undefined') {optionValue=0;}else{optionValue=1;}
        appendSwiperH(
          data[start1].positive.target,
          data[data[start1].positive.target].processes,
          data[data[start1].positive.target].processes.length,
          data[data[start1].positive.target].question,
          data[data[start1].positive.target].positive.label,
          data[data[start1].positive.target].negative.label,
          data[data[start1].positive.target].positive.target,
          data[data[start1].positive.target].negative.target,
          optionValue);
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
        if ((typeof  data[positiveid].options)=='undefined') {optionValue=0;}else{optionValue=1;}
        appendSwiperH(
          start1,
          data[start1].processes,
          data[start1].processes.length,
          data[start1].question,
          data[start1].positive.label,
          data[start1].negative.label,
          data[start1].positive.target,
          data[start1].negative.target,
          optionValue);
          if ((typeof  data[data[start1].negative.target].options)=='undefined') {optionValue=0;}else{optionValue=1;}
        prependSwiperH(
          data[start1].negative.target,
          data[data[start1].negative.target].processes,
          data[data[start1].negative.target].processes.length,
          data[data[start1].negative.target].question,
          data[data[start1].negative.target].positive.label,
          data[data[start1].negative.target].negative.label,
          data[data[start1].negative.target].positive.target,
          data[data[start1].negative.target].negative.target,
          optionValue);
          if ((typeof  data[data[start1].positive.target].options)=='undefined') {optionValue=0;}else{optionValue=1;}
        appendSwiperH(
          data[start1].positive.target,
          data[data[start1].positive.target].processes,
          data[data[start1].positive.target].processes.length,
          data[data[start1].positive.target].question,
          data[data[start1].positive.target].positive.label,
          data[data[start1].positive.target].negative.label,
          data[data[start1].positive.target].positive.target,
          data[data[start1].positive.target].negative.target,
          optionValue);
        swiperH.update();
        start=start1;
      });
      swiperV.slideNext();
    });
})
