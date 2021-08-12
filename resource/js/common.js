$(document).ready(function () {
    // 해당 섹션에 도달하면 메뉴 활성화
    $(window).on("scroll", function () {
        var subCont = $("section");
        subCont.each(function (i, el) {
            var top = $(el).offset().top - 100;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr("id");
            if (scroll > top && scroll < bottom) {
                $(".submenu li a.on").removeClass("on");
                $(".submenu li a[rel=" + id + "]").addClass("on");
                // 서브메뉴에 가로스크롤 생길때 아래 if else if 문 추가
                // index 갯수와 scrollLeft 값은 메뉴 갯수에 따라 조절
                if ($(this).index() >= 3) {
                    $(".submenu")
                        .stop()
                        .animate({ scrollLeft: 350 + "px" }, 200);
                } else if ($(this).index() < 3) {
                    $(".submenu").stop().animate({ scrollLeft: 0 }, 100);
                }
            }
            if (scroll === 0) {
                $(".submenu li a.on").removeClass("on");
            }
        });
    });

    // 메뉴 클릭하면 해당 섹션으로 이동
    scrollFunc(".submenu li a");

    function scrollFunc(e) {
        var link = $(e);
        link.on("click", function () {
            var t = $(this).attr("rel");
            $("html, body")
                .stop()
                .animate({ scrollTop: $("#" + t).offset().top - ($(".submenu").height() - 1) }, 300);
            return false;
        });
    }

    // 위로 스크롤시 서브메뉴가 헤더 밑으로 붙게
    var lastScrollTop = 0,
        delta = 15;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if (st >= 290) {
            if (st > lastScrollTop && lastScrollTop > 0) {
                $("#header").css("top", "-80px");
                $(".submenu").css("top", "0px");
                $("section").css("padding-top", "40px");
            } else {
                $("#header").css("top", "0px");
                $(".submenu").css("top", "80px");
                $("section").css("padding-top", "120px");
            }
            lastScrollTop = st;
        }
    });

    // 트윈맥스
    ScrollTrigger.matchMedia({
        // 해상도 1024이상에서만 실행
        "(min-width:1024px)": function () {
            var $box1 = document.querySelector(".box1");
            var $box2 = document.querySelector(".box2");
            var $box3 = document.querySelector(".box3");
            var $box4 = document.querySelector(".box4");
            var $box5 = document.querySelector(".box5");
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#section2",
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: "+=300%",
                },
            });

            tl.fromTo($box1, { x: "0", autoAlpha: 1, duration: 3, ease: "none", stagger: 1 }, { x: "-400%", autoAlpha: 0, duration: 5, ease: "none", stagger: 1 }, "-=4")
                .fromTo($box2, { x: "350%", autoAlpha: 1, duration: 5, ease: "none", stagger: 1 }, { x: "-600%", autoAlpha: 0.3, duration: 5, ease: "none", stagger: 1 }, "-=4")
                .fromTo($box3, { x: "500%", autoAlpha: 1, duration: 5, ease: "none", stagger: 1 }, { x: "-120%", autoAlpha: 0.3, duration: 5, ease: "none", stagger: 1 }, "-=4")
                .fromTo($box4, { x: "500%", autoAlpha: 1, duration: 5, ease: "none", stagger: 1 }, { x: "0", autoAlpha: 1, duration: 5, ease: "none", stagger: 1 }, "-=4")
                .fromTo($box5, { x: "500%", autoAlpha: 1, duration: 5, ease: "none", stagger: 1 }, { x: "0", autoAlpha: 1, duration: 5, ease: "none", stagger: 1 }, "-=4");
        },

        // max-width로 지정할 경우
        // "(max-width:1024px)": function() {}

        // 모든 디바이스로 지정할 경우
        // "all": function() {}
    });

    // 스크롤 부드럽게
    $("html").niceScroll({
        horizrailenabled: false,
        scrollspeed: 50,
        mousescrollstep: 30,
    });

    // gsap.to("#wrap", {
    //     yPercent: -100,
    //     y: "100vh",
    //     scrollTrigger: {
    //         scrub: 1,
    //         trigger: ".container",
    //         start: "top top",
    //         end: document.querySelector(".container").clientHeight,
    //     },
    // });
});
