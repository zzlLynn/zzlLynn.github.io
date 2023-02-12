let id1 = document.getElementById("linkedin1")
$(function () {
    $(id1).on({
        mouseover: function () {
            let l1 = document.getElementById("l11")
            let l2 = document.getElementById("l21")
            $(l1).animate({
                opacity: 0
            }, 200);
            $(l2).animate({
                opacity: 1
            }, 200);
        },
        mouseout: function () {
            let l1 = document.getElementById("l11")
            let l2 = document.getElementById("l21")
            $(l1).animate({
                opacity: 1
            }, 200);
            $(l2).animate({
                opacity: 0
            }, 200);
        }
    });
});
let ins1 = document.getElementById("ins1")
$(function () {
    $(ins1).on({
        mouseover: function () {
            let l1 = document.getElementById("i11")
            let l2 = document.getElementById("i21")
            $(l1).animate({
                opacity: 0
            }, 200);
            $(l2).animate({
                opacity: 1
            }, 200);
        },
        mouseout: function () {
            let l1 = document.getElementById("i11")
            let l2 = document.getElementById("i21")
            $(l1).animate({
                opacity: 1
            }, 200);
            $(l2).animate({
                opacity: 0
            }, 200);
        }
    });
});
let behance1 = document.getElementById("behance1")
$(function () {
    $(behance1).on({
        mouseover: function () {
            let l1 = document.getElementById("b11")
            let l2 = document.getElementById("b21")
            $(l1).animate({
                opacity: 0
            }, 200);
            $(l2).animate({
                opacity: 1
            }, 200);
        },
        mouseout: function () {
            let l1 = document.getElementById("b11")
            let l2 = document.getElementById("b21")
            $(l1).animate({
                opacity: 1
            }, 200);
            $(l2).animate({
                opacity: 0
            }, 200);
        }
    });
});
let email1 = document.getElementById("email1")
$(function () {
    $(email1).on({
        mouseover: function () {
            let l1 = document.getElementById("e11")
            let l2 = document.getElementById("e21")
            $(l1).animate({
                opacity: 0
            }, 200);
            $(l2).animate({
                opacity: 1
            }, 200);
        },
        mouseout: function () {
            let l1 = document.getElementById("e11")
            let l2 = document.getElementById("e21")
            $(l1).animate({
                opacity: 1
            }, 200);
            $(l2).animate({
                opacity: 0
            }, 200);
        }
    });
});