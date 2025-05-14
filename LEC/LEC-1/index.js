// syntax j-Query
/*

 1=> $(document).ready(function () {
        $(selector).event(function(){
            $(selector).method
        })
    })

 2=> $(function(){
        $(selector).event(function(){
            $(selector).method
        })
    })

 3=> $(selector).event(function(){
        $(selector).method  
    })


*/

// Events Hide/show & Toggle

// Hide=>
$(() => {
    $(".hide").click(() => {
        $(".heading").hide()
    })
})
// show=>
$(() => {
    $(".show").click(() => {
        $(".heading").show()
    })
})

// Toggle=>
$(() => {
    $(".Toggle").click(() => {
        $(".heading").toggle()
    })
})


// how to add css in jquey / method css 2=>

/*
 1=> single style css..

 $(function(){
    $("#yourid/.class").click(function(){
        $("#selector").css('backgroundColor':'orange')
    })
 })

 2=>  object style css..
    $(function(){
    $("#yourid/.class").click(function(){
        $("#selector").css({
            'backgroundColor':'orange',
            'border':'2px solid black'
        })
    })
 })
*/


// Change-Color heading..

$(() => {
    $(".bgc").click(() => {
        $(".heading").css({
            'color': 'green',
            'backgroundColor': 'yellow'
        })
    })
})

