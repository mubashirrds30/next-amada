
var winWidth = $(window).width();
var backgroundObserver = lozad('.lozad-background', {
    threshold: 0.1
});
var pictureObserver = lozad('.lozad-picture', {
    threshold: 0.1
});
var observer = lozad('.lozad', {
    threshold: 0.1
});
var videoPlayer, triggerEle;

var homeSwiperSlideLength = $('.homeSwiper').find('.swiper-slide').length - 1;
// console.log(homeSwiperSlideLength);

var swiper = new Swiper(".homeSwiper .swiper-container", {
    spaceBetween: 30,
    effect: "fade",
    delay: 1500,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

var swiperdetail = new Swiper(".bs-swiper-detail .swiper-container", {
    spaceBetween: 30,
    effect: "fade",
    delay: 1000,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiperDual = new Swiper(".swiper-dual .swiper-container", {
    spaceBetween: 30,
    delay: 1000,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiperGallery = new Swiper(".swiper-thumbs .swiper-container", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

var swiperGalleryThumbs = new Swiper(".swiper-gallery .swiper-container", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperGallery,
    },
});


var swiperThumbsGallery = new Swiper(".mySwiperGallery", {
    // loop: true,
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true
  });
var swiper2Gallery = new Swiper(".mySwiper2Gallery", {
    // loop: true,
    spaceBetween: 10,
    centeredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperThumbsGallery,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// swiper2Gallery.params.control = swiperThumbsGallery;
// swiperThumbsGallery.params.control = swiper2Gallery;



function stickynav() {
    header = $(".bs-header");
    winHeight = $(window).height();
    if ($('.pg-home').length != 0) {
        $(window).scroll(function() {
            var y = $(document).scrollTop();
            console.log(y);
            if (y >= 100) {
                header.addClass('typ-solid');
                header.find('.logo-wrap').find('img').attr('src', 'assets/images/logo.png');
            } else {
                header.removeClass('typ-solid');
                header.find('.logo-wrap').find('img').attr('src', 'assets/images/logo-white.png');
            }
        });
    } else {
        header.addClass('typ-solid');
        header.find('.logo-wrap').find('img').attr('src', 'assets/images/logo.png');
    }
}

function bannerBg(e, t, i) {
    $(e).find(t).each(function() {
        var currentImg = $(this).find(i)[0];
        var currentImgPath = currentImg.currentSrc;
        $(this).css("background-image", "url(" + currentImgPath + ")");
    })
}

function newsFlyOpenClose() {
    $('.js-news-fly-trigger').on('click', function() {
        $(this).parent('.bs-news-fly').toggleClass('active');
    });
}

function mobileMenuOpenClose() {
    $('.js-menu-open').on('click', function() {
        $('.bs-nav').addClass('active');
    });
    $('.js-nav-close').on('click', function() {
        $(this).parents('.bs-nav').removeClass('active');
    });
}

function quicklinkAccordian(accTitleClass, accBodyClass) {
    $(accTitleClass).on('click', function() {
        var self = $(this);
        if ($(self).hasClass('open')) {
            $(self).removeClass('open');
            $(self).siblings(accBodyClass).slideUp(300);
        } else {
            $(accTitleClass).removeClass('open');
            $(accBodyClass).slideUp(300);
            $(self).addClass('open');
            $(self).siblings(accBodyClass).slideDown(300);
        }
    });
}

function fetchFileName() {
    $('input[type="file"]').change(function(e) {
        var fileName = e.target.files[0].name;
        $('.js-file-name').text(fileName);
    });
}

function accordion() {
    $('.acc-title').click(function(j) {

        var dropDown = $(this).closest('.acc-card').find('.acc-desc');
        $(this).closest('.acc').find('.acc-desc').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.acc').find('.acc-title.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
}


function modal(){
    $('.js-modal-btn').on('click',function(){
        triggerEle = $(this).data('target');
        $('#'+ triggerEle).addClass('active');
        $('body').addClass('modal-overlay');
        if(triggerEle == 'videoModal'){
            setTimeout(function(){
                videoPlayer = document.getElementById('slideVideo');
                videoPlayer.play();
            },1000);
        }
    });
    $('.js-modal-close').on('click',function(){
        $(this).parents('.bs-modal').removeClass('active');
        $('body').removeClass('modal-overlay');
        if(triggerEle == 'videoModal'){
            videoPlayer.pause();
            videoPlayer.load();
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      initialDate: '2020-09-12',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,
      select: function(arg) {
        var title = prompt('Event Title:');
        if (title) {
          calendar.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay
          })
        }
        calendar.unselect()
      },
      eventClick: function(arg) {
        if (confirm('Are you sure you want to delete this event?')) {
          arg.event.remove()
        }
      },
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
        {
          title: 'schedule',
          url: 'assets/doc/EG-4010.pdf',
          start: '2020-09-28'
        }
      ]
    });

    calendar.render();
  });


$(function() {
    $("a").each(function() {
        "#" != $(this).attr("href") && " " != $(this).attr("href") || $(this).attr("href", "javascript:void(0)")
    });

    $('#selectField').select2({
        placeholder: "Select Training course code",
        minimumResultsForSearch: -1,
    });

    if ($('.bs-header').length != 0) {
        stickynav();
    }
    if ($('.js-bg').length != 0) {
        bannerBg(".js-bg", ".js-addto", ".js-img");
    }
    if ($('.bs-news-fly').length != 0) {
        newsFlyOpenClose();
    }

    if ($('.bs-upload').length != 0) {
        fetchFileName();
    }

    if ($('.lyt-accordian').length != 0) {
        quicklinkAccordian('.js-acc-title', '.js-acc-body');
    }

    if($('.bs-modal').length != 0){
        modal();
    } 

    if (winWidth <= 768) {
        if ($('.bs-header').length != 0) {
            mobileMenuOpenClose();
        }
        if ($('.mod-quicklink').length != 0) {
            quicklinkAccordian('.mb-accord-title', '.mb-accord-body');
        }
        if ($('.bs-sub-menu').length != 0) {
            quicklinkAccordian('.mb-sub-menu-title', '.mb-sub-menu-body');
        }

    }
    backgroundObserver.observe();
    pictureObserver.observe();
    observer.observe();

    $('#calendar').on( 'click', '.fc-event', function(e){
        e.preventDefault();
        window.open( $(this).attr('href'), '_blank' );
    });
    
});



  