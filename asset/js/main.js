! function() {
    "use strict";
    var e = {
            Android: function() {
                return navigator.userAgent.match(/Android/i)
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i)
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i)
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i)
            },
            any: function() {
                return e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
            }
        },
        a = function(e) {
            var a = $(".main-nav > ul");
            a.find("li").removeClass("active"), a.each(function() {
                $(this).find('a[data-nav-section="' + e + '"]').closest("li").addClass("active")
            })
        },
        t = function() {
            $(".js-counter").countTo({
                formatter: function(e, a) {
                    return e.toFixed(a.decimals)
                }
            })
        };
    $(function() {
        var n;
        e.any() || ($(".js-fullheight").css("height", $(window).height()), $(window).resize(function() {
                $(".js-fullheight").css("height", $(window).height())
            })), $(document).click(function(e) {
                var a = $("#ubea-offcanvas, .js-ubea-nav-toggle");
                a.is(e.target) || 0 !== a.has(e.target).length || $("body").hasClass("offcanvas") && ($("body").removeClass("offcanvas"), $(".js-ubea-nav-toggle").removeClass("active"))
            }), $(".header-fixed").css("padding-top", $(".ubea-nav").height()), $("body").on("click", '#ubea-offcanvas ul a:not([class="external"]), .main-nav a:not([class="external"])', function(e) {
                var a = $(this).data("nav-section");
                return $('[data-section="' + a + '"]').length && $("html, body").animate({
                    scrollTop: $('[data-section="' + a + '"]').offset().top - 55
                }, 500, "easeInOutExpo"), $("body").hasClass("offcanvas") && ($("body").removeClass("offcanvas"), $(".js-ubea-nav-toggle").removeClass("active")), e.preventDefault(), !1
            }),
            function() {
                $("body").prepend('<div id="ubea-offcanvas" />'), $("body").prepend('<a href="#" class="js-ubea-nav-toggle ubea-nav-toggle"><i></i></a>');
                var e = $(".menu-1 > ul").clone();
                $("#ubea-offcanvas").append(e);
                var a = $(".menu-2 > ul").clone();
                $("#ubea-offcanvas").append(a), $("#ubea-offcanvas .has-dropdown").addClass("offcanvas-has-dropdown"), $("#ubea-offcanvas").find("li").removeClass("has-dropdown"), $(".offcanvas-has-dropdown").mouseenter(function() {
                    $(this).addClass("active").find("ul").slideDown(500, "easeOutExpo")
                }).mouseleave(function() {
                    $(this).removeClass("active").find("ul").slideUp(500, "easeOutExpo")
                }), $(window).resize(function() {
                    $("body").hasClass("offcanvas") && ($("body").removeClass("offcanvas"), $(".js-ubea-nav-toggle").removeClass("active"))
                })
            }(), $("body").on("click", ".js-ubea-nav-toggle", function(e) {
                var a = $(this);
                $("body").hasClass("offcanvas") ? $("body").removeClass("offcanvas") : $("body").addClass("offcanvas"), a.toggleClass("active"), e.preventDefault()
            }), (n = $("div[data-section]")).waypoint(function(e) {
                "down" === e && a($(this.element).data("section"))
            }, {
                offset: "150px"
            }), n.waypoint(function(e) {
                "up" === e && a($(this.element).data("section"))
            }, {
                offset: function() {
                    return 155 - $(this.element).height()
                }
            }), $(".animate-box").waypoint(function(e) {
                "down" !== e || $(this.element).hasClass("animated-fast") || ($(this.element).addClass("item-animate"), setTimeout(function() {
                    $("body .animate-box.item-animate").each(function(e) {
                        var a = $(this);
                        setTimeout(function() {
                            var e = a.data("animate-effect");
                            "fadeIn" === e ? a.addClass("fadeIn animated-fast") : "fadeInLeft" === e ? a.addClass("fadeInLeft animated-fast") : "fadeInRight" === e ? a.addClass("fadeInRight animated-fast") : a.addClass("fadeInUp animated-fast"), a.removeClass("item-animate")
                        }, 200 * e, "easeInOutExpo")
                    })
                }, 100))
            }, {
                offset: "85%"
            }), $(".has-dropdown").mouseenter(function() {
                $(this).find(".dropdown").css("display", "block").addClass("animated-fast fadeInUpMenu")
            }).mouseleave(function() {
                $(this).find(".dropdown").css("display", "none").removeClass("animated-fast fadeInUpMenu")
            }), $(".owl-carousel-carousel").owlCarousel({
                items: 3,
                loop: !0,
                margin: 20,
                nav: !0,
                dots: !0,
                smartSpeed: 800,
                navText: ["<i class='ti-arrow-left owl-direction'></i>", "<i class='ti-arrow-right owl-direction'></i>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            }), $(".owl-carousel-fullwidth").owlCarousel({
                items: 1,
                loop: !0,
                margin: 20,
                nav: !0,
                dots: !0,
                smartSpeed: 800,
                autoHeight: !0,
                navText: ["<i class='ti-arrow-left owl-direction'></i>", "<i class='ti-arrow-right owl-direction'></i>"]
            }), $(".js-gotop").on("click", function(e) {
                return e.preventDefault(), $("html, body").animate({
                    scrollTop: $("html").offset().top
                }, 500, "easeInOutExpo"), !1
            }), $(window).scroll(function() {
                $(window).scrollTop() > 200 ? $(".js-top").addClass("active") : $(".js-top").removeClass("active")
            }), $(".ubea-loader").fadeOut("slow"), $("#ubea-counter").length > 0 && $("#ubea-counter").waypoint(function(e) {
                "down" !== e || $(this.element).hasClass("animated") || (setTimeout(t, 400), $(this.element).addClass("animated"))
            }, {
                offset: "90%"
            }), $(".ubea-accordion-heading").on("click", function(e) {
                var a = $(this);
                a.closest(".ubea-accordion").find(".ubea-accordion-content").slideToggle(400, "easeInOutExpo"), a.closest(".ubea-accordion").hasClass("active") ? a.closest(".ubea-accordion").removeClass("active") : a.closest(".ubea-accordion").addClass("active"), e.preventDefault()
            }), $("#ubea-hero .flexslider").flexslider({
                animation: "fade",
                slideshowSpeed: 5e3,
                directionNav: !0,
                start: function() {
                    setTimeout(function() {
                        $(".slider-text").removeClass("animated fadeInUp"), $(".flex-active-slide").find(".slider-text").addClass("animated fadeInUp")
                    }, 500)
                },
                before: function() {
                    setTimeout(function() {
                        $(".slider-text").removeClass("animated fadeInUp"), $(".flex-active-slide").find(".slider-text").addClass("animated fadeInUp")
                    }, 500)
                }
            }), $("#ubea-hero .flexslider .slides > li").css("height", $(window).height()), $(window).resize(function() {
                $("#ubea-hero .flexslider .slides > li").css("height", $(window).height())
            })
    })
}(),
function(e, a, t, n, s, o, i) {
    e.GoogleAnalyticsObject = s, e.ga = e.ga || function() {
        (e.ga.q = e.ga.q || []).push(arguments)
    }, e.ga.l = 1 * new Date, o = a.createElement(t), i = a.getElementsByTagName(t)[0], o.async = 1, o.src = "https://www.google-analytics.com/analytics.js", i.parentNode.insertBefore(o, i)
}(window, document, "script", 0, "ga"), ga("create", "UA-10146041-21", "auto"), ga("send", "pageview");