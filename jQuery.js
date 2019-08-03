
$(document).ready(function(){
/*
Q1: Check if jQuery is loaded
*/




/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/

$("#btn-top").click(function(){
   $("html, body").animate({scrollTop:"0"})
});

/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/

$("#btn1").click(function(){
    $("#box").css({width:"300px",height:"300px"});
});

$("#btn2").click(function(){
    $("#box").css({width:"150px",height:"150px"})
});


/*
Q4:
Learn how to fadein your boxes
*/

$("#bt").click(function(){
    $("#div1").fadeIn(1000);
    $("#div2").fadeIn(2000);
    $("#div3").fadeIn(3000);
});


/*
Q5:
User must first accept then he or she can signup
*/

$("#accept").click(function(){
    $("#submitbtn").removeAttr("disabled");
});

/*
Q6:
Let them print
*/

$('.printPage').on('click', function() {  
    window.print(); 
  });

/*
Q7:
Can username be too long? Yest it can - lets limit that
*/


$("#textarea").attr("maxLength","20")

/*
Q8:
Wanna make some words bolder, do it with jQuery
*/


    $(".bolder").css({fontWeight:"bolder"});


/*
Q9:
Add new div to your website
*/

function new_div(){
    $('input[value="Click to add new div"]').after("<div>Hello</div>")
     $("div").append("<p>Hello</p>");
}

/*
Q10:
Select values from a JSON object using jQuery
*/


/*
Q11:
Add element within ul list
*/

$("#btnclick").click(function(){
    $("#list").append("<li><a href>Life of</a></li>")
});

/*
Q12:
Know what user puts into textbox
*/



/*
Q13:
Change input value
*/

$("#button").click(function(){
    $(this).val("hello")
})

})

// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 