/* global $, jquery , alert */

    $(document).ready(function (){            //كود js وقت الصور 
    
    "use strict";
    
    $('.carousel').carousel({
       interval:5000 
    });
         
    // اظهاز البوكس المخفي - Show Color Option            
                
    $(".gear-check").click(function (){
        $(".color-option").fadeToggle();
    });
    
    // Change Theme Color On Clikc
    
    var colorLi = $(".color-option ul li")
    
    colorLi
    $(".color-option ul li")
    .eq(0).css("backgroundColor","#E41B17").end()
    .eq(1).css("backgroundColor","#E426D5").end()
    .eq(2).css("backgroundColor","#009AFF").end()
    .eq(3).css("backgroundColor","#00ff439e").end()
    .eq(4).css("backgroundColor","#8a633bf7");
    
    colorLi.click(function ()
    {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });
    
    // Caching The Scroll Top Element
    
        var scrollButton = $("#scroll-top");
    
        $(window).scroll(function ()
                     
        {
        console.log($(this).scrollTop());
        
        if($(this).scrollTop()>=700)
        {
            scrollButton.show();
        }
        
        else
        {
            scrollButton.hide();    
        }
    })
    
            // Ckick On Button To Scroll Top
        
        scrollButton.click(function ()
        
        {
               $("html,body").animate({scrollTop:0},600); 
        })
        
        $("html").niceScroll();
});

// Loading Screen

$(window).load(function ()
    
{
    // Loading Elements
    
    $(".loading-overlay .spinner").fadeOut(2000,
    function ()
    {
        $("body").css("overflow","auto");
        $(this).parent().fadeOut(2000,
        function()
        {
            $(this).remove();
        });
    });
});