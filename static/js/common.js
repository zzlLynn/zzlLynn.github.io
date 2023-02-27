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

let sl = document.getElementById("sl0")
$(function () {
    $(sl).on({
        mouseover: function () {
            let l1 = document.getElementById("sl1")
            let l2 = document.getElementById("sl2")
            $(l1).animate({
                opacity: 0
            }, 0);
            $(l2).animate({
                opacity: 1
            }, 0);
        },
        mouseout: function () {
            let l1 = document.getElementById("sl1")
            let l2 = document.getElementById("sl2")
            $(l1).animate({
                opacity: 1
            }, 0);
            $(l2).animate({
                opacity: 0
            }, 0);
        }
    });
});

let lig11 = document.getElementById("lig11")
$(function () {
    $(lig11).on({
        mouseover: function () {
            let l1 = document.getElementById("lig1")
            $(l1).animate({
                opacity: 1
            }, 0);
        },
        mouseout: function () {
            let l1 = document.getElementById("lig1")
            $(l1).animate({
                opacity: 0
            }, 0);
        }
    });
});

let lig22 = document.getElementById("lig22")
$(function () {
    $(lig22).on({
        mouseover: function () {
            let l1 = document.getElementById("lig2")
            $(l1).animate({
                opacity: 1
            }, 0);
        },
        mouseout: function () {
            let l1 = document.getElementById("lig2")
            $(l1).animate({
                opacity: 0
            }, 0);
        }
    });
});

let lig33 = document.getElementById("lig33")
$(function () {
    $(lig33).on({
        mouseover: function () {
            let l1 = document.getElementById("lig3")
            $(l1).animate({
                opacity: 1
            }, 0);
        },
        mouseout: function () {
            let l1 = document.getElementById("lig3")
            $(l1).animate({
                opacity: 0
            }, 0);
        }
    });
});

let lig44 = document.getElementById("lig44")
$(function () {
    $(lig44).on({
        mouseover: function () {
            let l1 = document.getElementById("lig4")
            $(l1).animate({
                opacity: 1
            }, 0);
        },
        mouseout: function () {
            let l1 = document.getElementById("lig4")
            $(l1).animate({
                opacity: 0
            }, 0);
        }
    });
});


$("#next0").click(function(){
    change();
});