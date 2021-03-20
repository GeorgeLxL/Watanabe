
    var current;
    var video_index = 1;

    $.scrollify({
      section:".page-content",
      sectionName : "section-name",
      interstitialSection : "",
      easing: "easeOutExpo",
      scrollSpeed: 1100,
      offset : 0,
      scrollbars: false,
      standardScrollElements: "",
      setHeights: true,
      overflowScroll: true,
      updateHash: true,
      touchScroll:true,
      before:function(i) {
        $('.top-pager .is-current').removeClass('is-current');
        $('.top-pager').find('a').eq(i).addClass('is-current');
        $('.page-content.is-show').removeClass('is-show');
        $('.page-content').eq(i).addClass('is-show');
      },
      after:function(i) {
        document.getElementById("Video0" + (i+1)).play();
        document.getElementById("Video0" + video_index).pause();
        document.getElementById("Video0" + video_index).currentTime = 0;
        video_index = i + 1;
        document.getElementById("Video0" + (i+1)).addEventListener('ended', nextVideo, false); 
      },
      afterResize:function() {},
      afterRender:function() {
        $('.page-content').removeClass('is-current');
        var pagenation = '<ul class="top-pager">';
        $('.page-content').each(function(i) {
          pagenation += '<li><a></a></li>';
        })
        pagenation += '</ul>';
        $('body').append(pagenation);
        $('.top-pager a').each(function(i) {
          $(this).on('click', function() {
              $.scrollify.move(i);
            });
        });
        $('.top-pager li:first-child').find('a').addClass('is-current');
        $('.page-content:first-of-type').addClass('is-show');
        document.getElementById("Video0" + video_index).play();
      },
    });
    $(window).on('resize',function(){
      if(current){
        var currentScrl = $('.page-content').eq(current).offset().top;
        $(window).scrollTop(currentScrl);
      }
    });

    function nextVideo(e) {
      if (video_index < 6)
      {
        $.scrollify.next();  
      }
      else
      {
        $.scrollify.move(0);  
      }
    }
    $(function(){
      $(".bottom-arrow").on("click", function() {
        $.scrollify.next();
      });
      $('[data-toggle="tooltip"]').tooltip();
      function moveVideo(e) {
        $.scrollify.move(e);
      }
      document.getElementById("Video0" + video_index).addEventListener('ended', nextVideo, false); 
    });

