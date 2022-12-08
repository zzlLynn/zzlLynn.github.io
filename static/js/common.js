let id = document.getElementById("linkedin")
$(function () {
    $(id).on({
        mouseover: function () {
            let l1 = document.getElementById("l1")
            let l2 = document.getElementById("l2")
            $(l1).animate({
                opacity: 0
            }, 200);
            $(l2).animate({
                opacity: 1
            }, 200);
        },
        mouseout: function () {
            let l1 = document.getElementById("l1")
            let l2 = document.getElementById("l2")
            $(l1).animate({
                opacity: 1
            }, 200);
            $(l2).animate({
                opacity: 0
            }, 200);
        }
    });
});
let ins = document.getElementById("ins")
$(function () {
    $(ins).on({
        mouseover: function () {
            let l1 = document.getElementById("i1")
            let l2 = document.getElementById("i2")
            $(l1).animate({
                opacity: 0
            }, 200);
            $(l2).animate({
                opacity: 1
            }, 200);
        },
        mouseout: function () {
            let l1 = document.getElementById("i1")
            let l2 = document.getElementById("i2")
            $(l1).animate({
                opacity: 1
            }, 200);
            $(l2).animate({
                opacity: 0
            }, 200);
        }
    });
});
let email = document.getElementById("email")
$(function () {
    $(email).on({
        mouseover: function () {
            let l1 = document.getElementById("e1")
            let l2 = document.getElementById("e2")
            $(l1).animate({
                opacity: 0
            }, 200);
            $(l2).animate({
                opacity: 1
            }, 200);
        },
        mouseout: function () {
            let l1 = document.getElementById("e1")
            let l2 = document.getElementById("e2")
            $(l1).animate({
                opacity: 1
            }, 200);
            $(l2).animate({
                opacity: 0
            }, 200);
        }
    });
});

let pdf = document.getElementById("pdf")
$(function () {
    $(pdf).on({
        mouseover: function () {
            let l1 = document.getElementById("a1")
            let l2 = document.getElementById("a2")
            $(l1).animate({
                opacity: 0
            }, 200);
            $(l2).animate({
                opacity: 1
            }, 200);
        },
        mouseout: function () {
            let l1 = document.getElementById("a1")
            let l2 = document.getElementById("a2")
            $(l1).animate({
                opacity: 1
            }, 200);
            $(l2).animate({
                opacity: 0
            }, 200);
        }
    });
});
let sy = document.getElementById("sy0")
$(function () {
    $(sy).on({
        mouseover: function () {
            let l1 = document.getElementById("sy1")
            let l2 = document.getElementById("sy2")
            $(l1).animate({
                opacity: 0
            }, 0);
            $(l2).animate({
                opacity: 1
            }, 0);
        },
        mouseout: function () {
            let l1 = document.getElementById("sy1")
            let l2 = document.getElementById("sy2")
            $(l1).animate({
                opacity: 1
            }, 0);
            $(l2).animate({
                opacity: 0
            }, 0);
        }
    });
});


$("#next0").click(function(){
    change();
});