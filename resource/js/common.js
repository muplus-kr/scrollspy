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
    ScrollTrigger.matchMedia({
        // 해상도 1024이상에서만 실행
        "(min-width:1024px)": function () {
            // 가로 스크롤이 진행될 때 나오는 요소들을 선택
            var $box1 = document.querySelector(".box1");
            var $box2 = document.querySelector(".box2");
            var $box3 = document.querySelector(".box3");
            var $box4 = document.querySelector(".box4");
            var $box5 = document.querySelector(".box5");
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#section2", // 가로 스크롤이 진행되는 동안 고정되는 section의 class 또는 id
                    pin: true,
                    scrub: 0.3,
                    start: "top top",
                    end: "+=300%",
                },
            });
            tl.from($box1, { x: "0", autoAlpha: 1, duration: 5, ease: "none", stagger: 1, delay: 2 }).to($box1, { x: "-200%", autoAlpha: 0, duration: 5, ease: "none", stagger: 1 });
            tl.from($box2, { x: "200%", autoAlpha: 0, duration: 5, ease: "none", stagger: 1 }).to($box2, { x: "-500%", autoAlpha: 0, duration: 5, ease: "none", stagger: 1 });
            tl.from($box3, { x: "300%", autoAlpha: 0, duration: 3, ease: "none", stagger: 1 }).to($box3, { x: "0", autoAlpha: 1, duration: 3, ease: "none", stagger: 1 });
            tl.from($box4, { x: "300%", autoAlpha: 0, duration: 3, ease: "none", stagger: 1 }).to($box4, { x: "0", autoAlpha: 1, duration: 3, ease: "none", stagger: 1 });
            tl.from($box5, { x: "300%", autoAlpha: 0, duration: 3, ease: "none", stagger: 1 }).to($box5, { x: "0", autoAlpha: 1, duration: 3, ease: "none", stagger: 1 });
        },

        // max-width로 지정할 경우
        // "(max-width:1024px)": function() {}

        // 모든디바이스로 지정할 경우
        // "all": function() {}
    });
});
