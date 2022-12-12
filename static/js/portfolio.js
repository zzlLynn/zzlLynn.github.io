let ia_cover = document.getElementById("ia_cover")
$(function () {
    $(ia_cover).on({
        mouseover: function () {
            let l1 = document.getElementById("ia_highlight")
            $(l1).animate({
                width: "519px"
            }, 500);
        },
    });
    $(ia_cover).on({
        mouseout: function () {
            let l1 = document.getElementById("ia_highlight")
            $(l1).animate({
                width: "0px"
            }, 500);
        },
    });
});
let ia_font = document.getElementById("ia_font")
$(function () {
    $(ia_font).on({
        mouseover: function () {
            let l1 = document.getElementById("ia_highlight")
            $(l1).animate({
                width: "519px"
            }, 500);
        },
    });
    $(ia_font).on({
        mouseout: function () {
            let l1 = document.getElementById("ia_highlight")
            $(l1).animate({
                width: "0px"
            }, 500);
        },
    });
});

let moos_cover = document.getElementById("moos_cover")
$(function () {
    $(moos_cover).on({
        mouseover: function () {
            let l1 = document.getElementById("moos_highlight")
            $(l1).animate({
                width: "239.0px"
            }, 500);
        },
    });
    $(moos_cover).on({
        mouseout: function () {
            let l1 = document.getElementById("moos_highlight")
            $(l1).animate({
                width: "0px"
            }, 500);
        },
    });
});
let moos_font = document.getElementById("moos_font")
$(function () {
    $(moos_font).on({
        mouseover: function () {
            let l1 = document.getElementById("moos_highlight")
            $(l1).animate({
                width: "239.0px"
            }, 500);
        },
    });
    $(moos_font).on({
        mouseout: function () {
            let l1 = document.getElementById("moos_highlight")
            $(l1).animate({
                width: "0px"
            }, 500);
        },
    });
});

let fireworks_cover = document.getElementById("fireworks_cover")
$(function () {
    $(fireworks_cover).on({
        mouseover: function () {
            let l1 = document.getElementById("fireworks_highlight")
            $(l1).animate({
                width: "529.6px"
            }, 500);
        },
    });
    $(fireworks_cover).on({
        mouseout: function () {
            let l1 = document.getElementById("fireworks_highlight")
            $(l1).animate({
                width: "0px"
            }, 500);
        },
    });
});
let fireworks_font = document.getElementById("fireworks_font")
$(function () {
    $(fireworks_font).on({
        mouseover: function () {
            let l1 = document.getElementById("fireworks_highlight")
            $(l1).animate({
                width: "529.6px"
            }, 500);
        },
    });
    $(fireworks_font).on({
        mouseout: function () {
            let l1 = document.getElementById("fireworks_highlight")
            $(l1).animate({
                width: "0px"
            }, 500);
        },
    });
});
let furry_cover = document.getElementById("furry_cover")
$(function () {
    $(furry_cover).on({
        mouseover: function () {
            let l1 = document.getElementById("furry_highlight")
            $(l1).animate({
                width: "469.7px"
            }, 500);
        },
    });
    $(furry_cover).on({
        mouseout: function () {
            let l1 = document.getElementById("furry_highlight")
            $(l1).animate({
                width: "0px"
            }, 500);
        },
    });
});
let furry_font = document.getElementById("furry_font")
$(function () {
    $(furry_font).on({
        mouseover: function () {
            let l1 = document.getElementById("furry_highlight")
            $(l1).animate({
                width: "469.7px"
            }, 500);
        },
    });
    $(furry_font).on({
        mouseout: function () {
            let l1 = document.getElementById("furry_highlight")
            $(l1).animate({
                width: "0px"
            }, 500);
        },
    });
});
let iwen_cover = document.getElementById("iwen_cover")
$(function () {
    $(iwen_cover).on({
        mouseover: function () {
            let l1 = document.getElementById("iwen_highlight")
            $(l1).animate({
                width: "186.1px"
            }, 200);
        },
    });
    $(iwen_cover).on({
        mouseout: function () {
            let l1 = document.getElementById("iwen_highlight")
            $(l1).animate({
                width: "0px"
            }, 200);
        },
    });
});
let iwen_font = document.getElementById("iwen_font")
$(function () {
    $(iwen_font).on({
        mouseover: function () {
            let l1 = document.getElementById("iwen_highlight")
            $(l1).animate({
                width: "186.1px"
            }, 300);
        },
    });
    $(iwen_font).on({
        mouseout: function () {
            let l1 = document.getElementById("iwen_highlight")
            $(l1).animate({
                width: "0px"
            }, 300);
        },
    });
});
let driven_cover = document.getElementById("driven_cover")
$(function () {
    $(driven_cover).on({
        mouseover: function () {
            let l1 = document.getElementById("driven_highlight")
            $(l1).animate({
                width: "544.0px"
            }, 500);
        },
    });
    $(driven_cover).on({
        mouseout: function () {
            let l1 = document.getElementById("driven_highlight")
            $(l1).animate({
                width: "0px"
            }, 500);
        },
    });
});
let driven_font = document.getElementById("driven_font")
$(function () {
    $(driven_font).on({
        mouseover: function () {
            let l1 = document.getElementById("driven_highlight")
            $(l1).animate({
                width: "544.0px"
            }, 500);
        },
    });
    $(driven_font).on({
        mouseout: function () {
            let l1 = document.getElementById("driven_highlight")
            $(l1).animate({
                width: "0px"
            }, 500);
        },
    });
});

let next0 = document.getElementById("next0")
$(function () {
    $(next0).on({
        mouseover: function () {
            let l1 = document.getElementById("next1")
            let l2 = document.getElementById("next2")
            $(l1).animate({
                opacity: 1
            }, 200);
            $(l2).animate({
                opacity: 0
            }, 200);
        },
        mouseout: function () {
            let l1 = document.getElementById("next1")
            let l2 = document.getElementById("next2")
            $(l1).animate({
                opacity: 0
            }, 200);
            $(l2).animate({
                opacity: 1
            }, 200);
        }
    });
});

var flag = 0

function next_project() {
    let l1 = document.getElementById("work1")
    let l2 = document.getElementById("work2")
    if (flag === 0) {
        $(l1).animate({
            opacity: 0
        }, 200);
        $(l2).animate({
            opacity: 1
        }, 200);
        flag = 1;
    } else {
        $(l1).animate({
            opacity: 1
        }, 200);
        $(l2).animate({
            opacity: 0
        }, 200);
        flag = 0;
    }
    return
}