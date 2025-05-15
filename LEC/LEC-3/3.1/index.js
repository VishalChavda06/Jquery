// JQuery Add method =>

/*
 1. prepend()
 2. append()
 3. after()
 4. befor()
*/

// 1. prepend(method)=>
$("#pre-btn").click(() => {
    $("#prepend").prepend("👋🏻✨")
})

// 2. append(method)=>
$("#app-btn").click(() => {
    $("#prepend").append("👋🏻✨")
})

// 3.after(method)=>
$("#af-btn").click(() => {
    $("#prepend").after("👋🏻✨")
})

// 4. Before(method)=>
$("#be-btn").click(() => {
    $("#prepend").before("👋🏻✨")
})

// JQuery Remove Method=>

/*
    1.Remove()
    2.Empty()
*/

// 1.Remove(method)=> there are tag with remove
$("#Remove-btn").click(() => {
    $(".remove-content").remove()
})

// 2. Empty(method)=> there are tag inside content remove
$("#Empty-btn").click(() => {
    $(".remove-content").empty()
})

// Empty Target Method=>
$("#em-target").click(() => {
    $("span").remove(".em-tar")
})


// JQuery Class Method=>

// addClass=>
$("#add-btn").click(() => {
    $(".container").addClass("box")
})

// removeClass=>
$("#Re-btn").click(() => {
    $(".container").removeClass("box")
})
// ToggleClass=>
$("#toggle-btn").click(() => {
    $(".container").toggleClass("box")
})


// JQuery Dimesion Method=>
$("#height-btn").click(() => {
    let text = ""
    text += ' height of box ' + $(".dimesion").height() + 'px' + '<br>'
    $(".dimesion").html(text)
})
// width 

$("#width-btn").click(() => {
    let text = ""
    text += ' width of box ' + $(".dimesion").width() + 'px' + '<br>'
    $(".dimesion").html(text)
})
