!function (e, t) {
    if ("function" == typeof define && define.amd) define(["exports", "module"], t); else if ("undefined" != typeof exports && "undefined" != typeof module) t(exports, module); else {
        var n = {exports: {}};
        t(n.exports, n), e.autosize = n.exports
    }
}(this, function (e, t) {
    "use strict";

    function n(e) {
        function t() {
            var t = window.getComputedStyle(e, null);
            "vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), s = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(s) && (s = 0), l()
        }

        function n(t) {
            var n = e.style.width;
            e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
        }

        function o(e) {
            for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
                node: e.parentNode,
                scrollTop: e.parentNode.scrollTop
            }), e = e.parentNode;
            return t
        }

        function r() {
            var t = e.style.height, n = o(e), r = document.documentElement && document.documentElement.scrollTop;
            e.style.height = "";
            var i = e.scrollHeight + s;
            return 0 === e.scrollHeight ? void (e.style.height = t) : (e.style.height = i + "px", u = e.clientWidth, n.forEach(function (e) {
                e.node.scrollTop = e.scrollTop
            }), void (r && (document.documentElement.scrollTop = r)))
        }

        function l() {
            r();
            var t = Math.round(parseFloat(e.style.height)), o = window.getComputedStyle(e, null),
                i = "content-box" === o.boxSizing ? Math.round(parseFloat(o.height)) : e.offsetHeight;
            if (i !== t ? "hidden" === o.overflowY && (n("scroll"), r(), i = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== o.overflowY && (n("hidden"), r(), i = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), a !== i) {
                a = i;
                var l = d("autosize:resized");
                try {
                    e.dispatchEvent(l)
                } catch (e) {
                }
            }
        }

        if (e && e.nodeName && "TEXTAREA" === e.nodeName && !i.has(e)) {
            var s = null, u = e.clientWidth, a = null, c = function () {
                e.clientWidth !== u && l()
            }, p = function (t) {
                window.removeEventListener("resize", c, !1), e.removeEventListener("input", l, !1), e.removeEventListener("keyup", l, !1), e.removeEventListener("autosize:destroy", p, !1), e.removeEventListener("autosize:update", l, !1), Object.keys(t).forEach(function (n) {
                    e.style[n] = t[n]
                }), i.delete(e)
            }.bind(e, {
                height: e.style.height,
                resize: e.style.resize,
                overflowY: e.style.overflowY,
                overflowX: e.style.overflowX,
                wordWrap: e.style.wordWrap
            });
            e.addEventListener("autosize:destroy", p, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", l, !1), window.addEventListener("resize", c, !1), e.addEventListener("input", l, !1), e.addEventListener("autosize:update", l, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", i.set(e, {
                destroy: p,
                update: l
            }), t()
        }
    }

    function o(e) {
        var t = i.get(e);
        t && t.destroy()
    }

    function r(e) {
        var t = i.get(e);
        t && t.update()
    }

    var i = "function" == typeof Map ? new Map : function () {
        var e = [], t = [];
        return {
            has: function (t) {
                return e.indexOf(t) > -1
            }, get: function (n) {
                return t[e.indexOf(n)]
            }, set: function (n, o) {
                e.indexOf(n) === -1 && (e.push(n), t.push(o))
            }, delete: function (n) {
                var o = e.indexOf(n);
                o > -1 && (e.splice(o, 1), t.splice(o, 1))
            }
        }
    }(), d = function (e) {
        return new Event(e, {bubbles: !0})
    };
    try {
        new Event("test")
    } catch (e) {
        d = function (e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !1), t
        }
    }
    var l = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? (l = function (e) {
        return e
    }, l.destroy = function (e) {
        return e
    }, l.update = function (e) {
        return e
    }) : (l = function (e, t) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], function (e) {
            return n(e, t)
        }), e
    }, l.destroy = function (e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], o), e
    }, l.update = function (e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], r), e
    }), t.exports = l
});


$(document).ready(function () {

    let notyf = new Notyf({
        duration: 3000,
        position: {
            x: 'right',
            y: 'top',
        },
    });


    $('.filter_trigger').click(function () {
        $('body').toggleClass('filters_opened');
    });
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $(".navigation_panel").toggleClass("opened");
    });
    autosize($('textarea'));
    $(".field").click(function () {
        $(this).addClass('focused');
        $(this).find('input, textarea').focus();
    });
    $(".categories span").click(function () {
        $(this).parent().find('ul').toggleClass('opened');
    });
    $('#filter_sorting').click(function () {
        $('#filter_sorting').toggleClass('opened');
    });

    // START AJAX //

    $('.send').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: e.target.href,
            data: $('form').serialize(),
            success: function (data) {
                if (data.status) {
                    notyf.success(data.messages)
                    setTimeout(function () {
                        window.location.href = '/';
                    }, 2000)
                }
                if (!data.status) {
                    notyf.error(data.messages)
                }
            }
        })
    })

    let summa = 0;
    let result = $('#all_count');
    let money = document.querySelectorAll('.cart_page_kit_cost');
    money.forEach(function (e) {
        summa += parseFloat(e.textContent);
    })
    result.prepend(summa);

    // $('.cart_page_kit_remove').on('click', function (e) {
    //     e.preventDefault();
    //     $.ajax({
    //         url: e.target.href,
    //         success: function (data) {
    //             if (data.status) {
    //                 notyf.success(data.message)
    //                 console.log(data.pk);
    //                 $('.item-' + data.pk).remove();
    //                 result.prepend(summa - data.price);
    //             }
    //             if (!data.status) {
    //                 notyf.error(data.message)
    //             }
    //         }
    //     })
    // })

    $('.isnt_freebie').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: e.target.href,
            success: function (data) {
                if (data.status) {
                    notyf.success(data.message)
                }
                if (!data.status) {
                    notyf.error(data.message)
                }
            }
        })
    })

    // END AJAX //


    //var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
    let pattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    let mail = $('#paymail');

    mail.blur(function () {
        if (mail.val() != '') {
            if (mail.val().search(pattern) == 0) {
                // $('#valid_message').text('Отлично!').;
                // notyf.success('Отлично');
                $('#gopay').attr('disabled', false);
                // mail.removeClass('error').addClass('ok');
            } else {
                // $('#valid_message').text('E-mail не верный');
                notyf.error('E-mail не верный')
                $('#gopay').attr('disabled', true);
                // mail.addClass('ok');
            }
        } else {
            // $('#valid_message').text('Пожалуйста, напишите свой Email.');
            notyf.error('Пожалуйста, напишите свой Email.')
            // mail.addClass('error');
            $('#gopay').attr('disabled', true);
        }
    });
    // let btn = document.getElementById("change_tmp");
    // let link = document.getElementById("themer");
    //
    // btn.addEventListener("click", function () {
    //     ChangeTheme();
    // });
    //
    // function ChangeTheme() {
    //     let lightTheme = "light";
    //     let darkTheme = "dark";
    //
    //     let currTheme = link.getAttribute("data-theme");
    //     let theme = "";
    //
    //     if (currTheme == lightTheme) {
    //         currTheme = darkTheme;
    //         theme = "dark";
    //     } else {
    //         currTheme = lightTheme;
    //         theme = "light";
    //     }
    //
    //     link.setAttribute("data-theme", currTheme);
    //
    //     Save(theme);
    // }
    //
    // function Save(theme) {
    //     let Request = new XMLHttpRequest();
    //     Request.open("GET", location.host + "?theme=" + theme, true);
    //     Request.send();
    // }

});



