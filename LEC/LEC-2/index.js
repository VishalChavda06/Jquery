// Fade Efect...



// FadeIn=>
$(function () {
    $("#FadeIn").click(function () {
        $(".box1").fadeIn(1000)
        $(".box2").fadeIn(1000)
        $(".box3").fadeIn(1000)
        $(".box4").fadeIn(1000)
    })
})

// fadeOut=>

$(function () {
    $("#FadeOut").click(function () {
        $(".box1").fadeOut(1000)
        $(".box2").fadeOut(1000)
        $(".box3").fadeOut(1000)
        $(".box4").fadeOut(1000)
    })
})


//  fadeOut-Call back function=>
$(() => {
    $("#FadeOut-callBack").click(() => {
        $(".box1").fadeOut(2000, () => {
            $(".box2").fadeOut(3000, () => {
                $(".box3").fadeOut(4000, () => {
                    $(".box4").fadeOut(5000)
                })
            })
        })
    })
})

// fadeToggle Efect=>
$(() => {
    $("#FadeToggle").click(() => {
        $(".box").fadeToggle(2000)
    })
})


// FadeTo=> as opacity = 0.1 to 1

$(() => {
    $("#FadeTo").click(() => {
        $(".box1").fadeTo(2000, 0.1)
        $(".box2").fadeTo(3000, 0.2)
        $(".box3").fadeTo(4000, 0.3)
        $(".box4").fadeTo(5000, 0.4)
    })
})


// FadeTo-callBack function=>

$(() => {
    $("#FadeTo-callBack").click(() => {
        $(".box1").fadeTo(2000, 0.1, () => {
            $(".box2").fadeTo(3000, 0.2, () => {
                $(".box3").fadeTo(4000, 0.4, () => {
                    $(".box4").fadeTo(5000, 0.5)
                })
            })
        })
    })
})



// Slider Efect=>

// slideUp
$(() => {
    $("#slideUp").click(() => {
        $(".box").slideUp(2000)
    })
})

// slideToggle

$(() => {
    $("#slideToggle").click(() => {
        $(".box").slideToggle(2000)
    })
})

// slideDown=>
$(() => {
    $("#slideDown").click(() => {
        $(".box").slideDown(2000)
    })
})


// Animates in jQuery=>

$(() => {
    $("#Aniamte").click(() => {
        $(".box").animate({ borderRadius: "500px" });
    })
})

$(() => {
    $("#Animate-Reset").click(() => {
        $(".box").animate({ borderRadius: "4%" });
    })
})

// jQuery Get Method=>

$("#html").click(() => { alert($('#heading').html()) })
// that are include are any tag (html tag are include)


// text Method =>

$("#text").click(() => { alert($('#heading-text').text()) })

// that are not include any tag (not a html tag include)

// value Method =>

$("#value").click(() => { alert($('input').val()) })
// stop Event =>

$("#Stop").click(() => {
    $(".box").stop()
})
