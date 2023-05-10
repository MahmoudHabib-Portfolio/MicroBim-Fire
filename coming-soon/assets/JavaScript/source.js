$(function (){

    $('.firstA').click(function() {
        $('.dropbtn').html('<img src="assets/images/flag-Aus.png" alt="uk-flag" class="drp-flag" /> &nbsp;<i class="fas fa-angle-down" id="arrow5"></i>');
        $('.drp-flag').css('max-width', '30px');
        $('.drp-flag2').css('max-width', '30px');
    });

    $('.SecondA').click(function() {
        $('.dropbtn').html('<img src="assets/images/flag-usa.png" alt="uk-flag" class="drp-flag" /> &nbsp;<i class="fas fa-angle-down" id="arrow5"></i>');
        $('.drp-flag').css('max-width', '30px');
        $('.drp-flag2').css('max-width', '30px');
    });

    $('.lastA').click(function() {
        $('.dropbtn').html('<img src="assets/images/flag-france.png" alt="de-flag" class="drp-flag drp-flag2" /> &nbsp;<i class="fas fa-angle-down" id="arrow5"></i>');
        $('.drp-flag').css('max-width', '30px');
        $('.drp-flag2').css('max-width', '30px');
    });

    $('.lastB').click(function() {
        $('.dropbtn').html('<img src="assets/images/flag-dutsch.png" alt="de-flag" class="drp-flag drp-flag2" /> &nbsp;<i class="fas fa-angle-down" id="arrow5"></i>');
        $('.drp-flag').css('max-width', '30px');
        $('.drp-flag2').css('max-width', '30px');
    });

    $('.lastC').click(function() {
        $('.dropbtn').html('<img src="assets/images/germany.png" alt="de-flag" class="drp-flag drp-flag2" /> &nbsp;<i class="fas fa-angle-down" id="arrow5"></i>');
        $('.drp-flag').css('max-width', '30px');
        $('.drp-flag2').css('max-width', '30px');
    });

    $('.dropdown').click(function(){
        $('.dropdown-content').slideToggle(250);
    });

    /* Arrow1 TL Rotation */
    /*
    $('.navlistLeft li:nth-child(1)').click(function(){
        var arrow1 = $('#arrow1');
        TweenLite.to(arrow1, .2, {rotation: 180, transformOrigin:"50%"});
        $(this).css('color', '#128b94');        
    });

    /* Arrow1 TL Rotation */
    function handler1() {
        var arrow1 = $('#arrow1');
        TweenLite.to(arrow1, .2, {rotation: 180, transformOrigin:"50%"});
        $('.navlistLeft li:nth-child(1)').css('color', '#128b94');
        $('.navlistLeft li:nth-child(1)').one("click", handler2);
        $('.SolMenuBody').slideDown(250);
        /*
        $('.navlistLeft li:nth-child(2)').one("click", handler3);
        $('.navlistLeft li:nth-child(2)').css('color', '#03253b');
        TweenLite.to(arrow2, .2, {rotation: 0, transformOrigin:"50%"});
        $('.TolsMenuBody').slideUp(250);
        $('.navlistLeft li:nth-child(4)').one("click", handler5);
        $('.navlistLeft li:nth-child(4)').css('color', '#03253b');
        TweenLite.to(arrow3, .2, {rotation: 0, transformOrigin:"50%"});
        $('.CoMenuBody').slideUp(250);
        */
    }

    function handler2() {
        var arrow1 = $('#arrow1');
        TweenLite.to(arrow1, .2, {rotation: 0, transformOrigin:"50%"});
        $('.navlistLeft li:nth-child(1)').css('color', '#03253b');
        $('.navlistLeft li:nth-child(1)').one("click", handler1);
        $('.SolMenuBody').slideUp(250);
    }

    $(".navlistLeft li:nth-child(1)").one("click", handler1);

    /* Arrow2 TL Rotation */
    function handler3() {
        var arrow2 = $('#arrow2');
        TweenLite.to(arrow2, .2, {rotation: 180, transformOrigin:"50%"});
        $('.navlistLeft li:nth-child(2)').css('color', '#128b94');
        $('.navlistLeft li:nth-child(2)').one("click", handler4);
        $('.TolsMenuBody').slideDown(250);
        /*
        $('.navlistLeft li:nth-child(1)').one("click", handler1);
        $('.navlistLeft li:nth-child(1)').css('color', '#03253b');
        TweenLite.to(arrow1, .2, {rotation: 0, transformOrigin:"50%"});
        $('.SolMenuBody').slideUp(250);
        $('.navlistLeft li:nth-child(4)').one("click", handler5);
        TweenLite.to(arrow3, .2, {rotation: 0, transformOrigin:"50%"});
        $('.navlistLeft li:nth-child(4)').css('color', '#03253b');
        $('.CoMenuBody').slideUp(250);
        */
    }

    function handler4() {
        var arrow2 = $('#arrow2');
        TweenLite.to(arrow2, .2, {rotation: 0, transformOrigin:"50%"});
        $('.navlistLeft li:nth-child(2)').css('color', '#03253b');
        $('.navlistLeft li:nth-child(2)').one("click", handler3);
        $('.TolsMenuBody').slideUp(250);

    }

    $(".navlistLeft li:nth-child(2)").one("click", handler3);

    /* Arrow2 TL Rotation */
    function handler5() {
        var arrow3 = $('#arrow3');
        TweenLite.to(arrow3, .2, {rotation: 180, transformOrigin:"50%"});
        $('.navlistLeft li:nth-child(4)').css('color', '#128b94');
        $('.navlistLeft li:nth-child(4)').one("click", handler6);
        $('.CoMenuBody').slideDown(250);
        /*
        $('.navlistLeft li:nth-child(1)').one("click", handler1);
        $('.navlistLeft li:nth-child(1)').css('color', '#03253b');
        TweenLite.to(arrow1, .2, {rotation: 0, transformOrigin:"50%"});
        $('.SolMenuBody').slideUp(250);
        $('.navlistLeft li:nth-child(2)').one("click", handler3);
        $('.navlistLeft li:nth-child(2)').css('color', '#03253b');
        TweenLite.to(arrow2, .2, {rotation: 0, transformOrigin:"50%"});
        $('.TolsMenuBody').slideUp(250);
        */
    }

    function handler6() {
        var arrow3 = $('#arrow3');
        TweenLite.to(arrow3, .2, {rotation: 0, transformOrigin:"50%"});
        $('.navlistLeft li:nth-child(4)').css('color', '#03253b');
        $('.navlistLeft li:nth-child(4)').one("click", handler5);
        $('.CoMenuBody').slideUp(250);
    }

    $(".navlistLeft li:nth-child(4)").one("click", handler5);

    /* Auto SlideUp1 */
    $(".navlistLeft li:nth-child(1)").click(function(){

        $('.navlistLeft li:nth-child(2)').one("click", handler3);
        $('.navlistLeft li:nth-child(2)').css('color', '#03253b');
        TweenLite.to(arrow2, .2, {rotation: 0, transformOrigin:"50%"});
        $('.TolsMenuBody').slideUp(250);
        $('.navlistLeft li:nth-child(4)').one("click", handler5);
        $('.navlistLeft li:nth-child(4)').css('color', '#03253b');
        TweenLite.to(arrow3, .2, {rotation: 0, transformOrigin:"50%"});
        $('.CoMenuBody').slideUp(250);

    });

    /* Auto SlideUp2 */
    $(".navlistLeft li:nth-child(2)").click(function(){

        $('.navlistLeft li:nth-child(1)').one("click", handler1);
        $('.navlistLeft li:nth-child(1)').css('color', '#03253b');
        TweenLite.to(arrow1, .2, {rotation: 0, transformOrigin:"50%"});
        $('.SolMenuBody').slideUp(250);
        $('.navlistLeft li:nth-child(4)').one("click", handler5);
        TweenLite.to(arrow3, .2, {rotation: 0, transformOrigin:"50%"});
        $('.navlistLeft li:nth-child(4)').css('color', '#03253b');
        $('.CoMenuBody').slideUp(250);

    });

    /* Auto SlideUp3 */
    $(".navlistLeft li:nth-child(4)").click(function(){

        $('.navlistLeft li:nth-child(1)').one("click", handler1);
        $('.navlistLeft li:nth-child(1)').css('color', '#03253b');
        TweenLite.to(arrow1, .2, {rotation: 0, transformOrigin:"50%"});
        $('.SolMenuBody').slideUp(250);
        $('.navlistLeft li:nth-child(2)').one("click", handler3);
        $('.navlistLeft li:nth-child(2)').css('color', '#03253b');
        TweenLite.to(arrow2, .2, {rotation: 0, transformOrigin:"50%"});
        $('.TolsMenuBody').slideUp(250);

    });

    /* Auto SlideUp4 */
    $('.SolMenuBody').mouseleave(function(){
        $('.navlistLeft li:nth-child(1)').one("click", handler1);
        $('.navlistLeft li:nth-child(1)').css('color', '#03253b');
        TweenLite.to(arrow1, .2, {rotation: 0, transformOrigin:"50%"});
        $('.SolMenuBody').slideUp(250);
    });

    $('.TolsMenuBody').mouseleave(function(){
        $('.navlistLeft li:nth-child(2)').one("click", handler3);
        $('.navlistLeft li:nth-child(2)').css('color', '#03253b');
        TweenLite.to(arrow2, .2, {rotation: 0, transformOrigin:"50%"});
        $('.TolsMenuBody').slideUp(250);
    });

    $('.CoMenuBody').mouseleave(function(){
        $('.navlistLeft li:nth-child(4)').one("click", handler5);
        $('.navlistLeft li:nth-child(4)').css('color', '#03253b');
        TweenLite.to(arrow3, .2, {rotation: 0, transformOrigin:"50%"});
        $('.CoMenuBody').slideUp(250);
    });

    /*
    $('.videoheader').mouseover(function(){
        $('.navlistLeft li:nth-child(1)').one("click", handler1);
        $('.navlistLeft li:nth-child(1)').css('color', '#03253b');
        TweenLite.to(arrow1, .2, {rotation: 0, transformOrigin:"50%"});
        $('.SolMenuBody').slideUp(250);

        $('.navlistLeft li:nth-child(2)').one("click", handler3);
        $('.navlistLeft li:nth-child(2)').css('color', '#03253b');
        TweenLite.to(arrow2, .2, {rotation: 0, transformOrigin:"50%"});
        $('.TolsMenuBody').slideUp(250);

        $('.navlistLeft li:nth-child(4)').one("click", handler5);
        $('.navlistLeft li:nth-child(4)').css('color', '#03253b');
        TweenLite.to(arrow3, .2, {rotation: 0, transformOrigin:"50%"});
        $('.CoMenuBody').slideUp(250);
    });
    */
    
    /* Login */
    $('.LogIn').click(function(){
        $('.LogIn').css('background-color', '#128b94');
        $('.LogIn').css('color', '#fff');
    });

    
    $('.close').click(function(){
        $('.LogIn').css('background', 'none');
        $('.LogIn').css('color', '#128b94');
    });

    $('.modal').click(function(){
        $('.LogIn').css('background', 'none');
        $('.LogIn').css('color', '#128b94');
    });

    /* Marquee Plugin Options */

    $('.marquee').marquee({

        //speed in milliseconds of the marquee
        duration: 18000,
        //gap in pixels between the tickers
        gap: 0,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'left',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true

    });

    // Check
    /*
    $('.form-check-input').click(function(){
        if ($(".form-check-input").prop( "checked")) {
            $('.Trial').html("Get Annual Plan");
            $('.ToolsBody').html("<b style='color: rgb(216, 81, 81);'>AU$ 500</b> <b>/ Year For Any Tool</b>");
        }

        else if($(".form-check-input").prop( "checked", false )){
            $('.Trial').html("Start My Free Trial");
            $('.ToolsBody').html("<b>Try</b> <b style='color: rgb(216, 81, 81);'>+10%</b> <b>For</b> <b style='color: rgb(216, 81, 81);'>30</b> <b>Days</b> <b style='color: #128b94'>Free</b> <b>Trial</b>");
        }
    });
    */
    /*Cpllapse on*/
    function handler100() {
        $('.colminus1').attr('src', 'assets/images/plus.png');
        $('#CollapseOne').one("click", handler200);
    }

    function handler200() {
        $('.colminus1').attr('src', 'assets/images/minus.jpg');
        $('#CollapseOne').one("click", handler100);
    }

    $("#CollapseOne").one("click", handler100);

    /*Collapse Two*/
    function handler300() {
        $('.colminus2').attr('src', 'assets/images/minus.jpg');
        $('#CollapseTwo').one("click", handler400);
    }

    function handler400() {
        $('.colminus2').attr('src', 'assets/images/plus.png');
        $('#CollapseTwo').one("click", handler300);
    }

    $("#CollapseTwo").one("click", handler300);

    /*Collapse Three*/
    function handler500() {
        $('.colminus3').attr('src', 'assets/images/minus.jpg');
        $('#CollapseThree').one("click", handler600);
    }

    function handler600() {
        $('.colminus3').attr('src', 'assets/images/plus.png');
        $('#CollapseThree').one("click", handler500);
    }

    $("#CollapseThree").one("click", handler500);

    /*Collapse Four*/
    function handler700() {
        $('.colminus4').attr('src', 'assets/images/minus.jpg');
        $('#CollapseFour').one("click", handler800);
    }

    function handler800() {
        $('.colminus4').attr('src', 'assets/images/plus.png');
        $('#CollapseFour').one("click", handler700);
    }

    $("#CollapseFour").one("click", handler700);

    /*Collapse Five*/
    function handler900() {
        $('.colminus5').attr('src', 'assets/images/minus.jpg');
        $('#CollapseFive').one("click", handler1000);
    }

    function handler1000() {
        $('.colminus5').attr('src', 'assets/images/plus.png');
        $('#CollapseFive').one("click", handler900);
    }

    $("#CollapseFive").one("click", handler900);
    
    /*
    if ($(".accordion-button").prop( "aria-expanded", true)) {
            $('.colminus').attr('src', 'assets/images/minus.jpg');
    }

    else if($(".accordion-button").prop( "aria-expanded", false)){
         $('.colminus').attr('src', 'assets/images/minus.jpg');
    }
*/
/*
    //aria-expanded
    $('button.accordion-button').click(function(){
        if ($(".accordion-button").prop( "aria-expanded", true)) {
            $('.colminus').attr('src', 'assets/images/minus.jpg');
        }else{
            $('.colminus').attr('src', 'assets/images/plus.png');
        }
    });
*/

/*Country Selector*/
/*
 $('#basic').flagStrap();

$('.select-country').flagStrap({
    countries: {
        "US": "USD",
        "AU": "AUD",
        "CA": "CAD",
        "SG": "SGD",
        "GB": "GBP",
    },
    buttonSize: "btn-sm",
    buttonType: "btn-info",
    labelMargin: "10px",
    scrollable: false,
    scrollableHeight: "350px"
});

$('#advanced').flagStrap({
    buttonSize: "btn-lg",
    buttonType: "btn-primary",
    labelMargin: "20px",
    scrollable: false,
    scrollableHeight: "350px"
});
*/

    /* Controlling Search Form */
    $('.search').click(function() {
        $('.SearchBlock').css('display', 'block');
        /*Adding GSAP Animation*/
        var tl3 = new TimelineLite();
        var search = $('.SearchBlock');
        tl3.from(search, 0.5, { y: -10, autoAlpha: 0, ease: Power2.easeOut }, '+=0.3');
    });

    /* Cancel Search */
    $('.cancelsearch').click(function() {
        $('.SearchBlock').css('display', 'none');
    });

    /* Account List */
    function handler333() {
        var arrow4 = $('#arrow4');
        TweenLite.to(arrow4, .2, {rotation: 180, transformOrigin:"50%"});
        $('.navlistRight li:nth-child(2)').css('color', '#128b94');
        $('.navlistRight li:nth-child(2)').one("click", handler444);
        $('.AccountList').slideDown(250);
    }

    function handler444() {
        var arrow4 = $('#arrow4');
        TweenLite.to(arrow4, .2, {rotation: 0, transformOrigin:"50%"});
        $('.navlistRight li:nth-child(2)').css('color', '#03253b');
        $('.navlistRight li:nth-child(2)').one("click", handler333);
        $('.AccountList').slideUp(250);
    }

    $(".navlistRight li:nth-child(2)").one("click", handler333);

    /* Account List Auto SlideUp */
    $('.AccountList').mouseleave(function(){
        TweenLite.to(arrow4, .2, {rotation: 0, transformOrigin:"50%"});
        $('.navlistRight li:nth-child(2)').css('color', '#03253b');
        $('.navlistRight li:nth-child(2)').one("click", handler333);
        $('.AccountList').slideUp(250);
    });

    /* Language List x
    function handler555() {
        var arrow5 = $('#arrow5');
        TweenLite.to(arrow5, .2, {rotation: 180, transformOrigin:"50%"});
        $('.navlistRight li:nth-child(2)').css('color', '#128b94');
        $('.navlistRight li:nth-child(2)').one("click", handler666);
    }

    function handler666() {
        var arrow5 = $('#arrow5');
        TweenLite.to(arrow5, .2, {rotation: 0, transformOrigin:"50%"});
        $('.navlistRight li:nth-child(2)').css('color', '#03253b');
        $('.navlistRight li:nth-child(2)').one("click", handler555);
    }

    $('.navlistRight li:nth-child(2)').one("click", handler555);
    */

    /*Lang-List On Mouse-Leave*/
    $('.dropdown-content').mouseleave(function(){
        $('.dropdown-content').slideUp(250);
        var arrow5 = $('#arrow5');
        TweenLite.to(arrow5, .2, {rotation: 0, transformOrigin:"50%"});
        $('.navlistRight li:nth-child(2)').css('color', '#03253b');
        $('.navlistRight li:nth-child(2)').one("click", handler555);
    });

    /*Rotate Lang-Arrow*/
    $('.dropdown-content a').click(function(){
            var arrow5 = $('#arrow5');
            TweenLite.to(arrow5, .2, {rotation: 0, transformOrigin:"50%"});
            $('.navlistRight li:nth-child(2)').css('color', '#03253b');
            $('.navlistRight li:nth-child(2)').one("click", handler555);
    });
    /*Open Sidenav*/
    $('.navlistRight li:nth-child(1)').click(function(){
        $('.sidenav').css('width', '350px');
    });
    /*Close Sidenav*/
    $('.closebtn').click(function(){
        $('.sidenav').css('width', '0px');
    });
    /*Open S*/
    $('.openS').click(function(){
        $('.SolutionB').slideToggle(500);
    });

    /* Rotate Sidenav arrow1 */
    function handler1200() {
        var arrow6 = $('#arrow6');
        TweenLite.to(arrow6, .2, {rotation: 180, transformOrigin:"50%"});
        $('.openS').one("click", handler1300);
    }

    function handler1300() {
        var arrow6 = $('#arrow6');
        TweenLite.to(arrow6, .2, {rotation: 0, transformOrigin:"50%"});
        $('.openS').one("click", handler1200);
    }

    $('.openS').one("click", handler1200);

    /*Open T*/
    $('.openT').click(function(){
        $('.ToolsB').slideToggle(500);
    });

    /* Rotate Sidenav arrow2 */
    function handler1400() {
        var arrow7 = $('#arrow7');
        TweenLite.to(arrow7, .2, {rotation: 180, transformOrigin:"50%"});
        $('.openT').one("click", handler1500);
    }

    function handler1500() {
        var arrow7 = $('#arrow7');
        TweenLite.to(arrow7, .2, {rotation: 0, transformOrigin:"50%"});
        $('.openT').one("click", handler1400);
    }

    $('.openT').one("click", handler1400);

    /*Open C*/
    $('.openC').click(function(){
        $('.CompanyB').slideToggle(500);
    });

    /* Rotate Sidenav arrow3 */
    function handler1600() {
        var arrow8 = $('#arrow8');
        TweenLite.to(arrow8, .2, {rotation: 180, transformOrigin:"50%"});
        $('.openC').one("click", handler1700);
    }

    function handler1700() {
        var arrow8 = $('#arrow8');
        TweenLite.to(arrow8, .2, {rotation: 0, transformOrigin:"50%"});
        $('.openC').one("click", handler1600);
    }

    $('.openC').one("click", handler1600);

    /* Auto sidenav SlideUp1 */
    $(".openS").click(function(){

        $('.openT').one("click", handler1400);
        TweenLite.to(arrow7, .2, {rotation: 0, transformOrigin:"50%"});
        $('.ToolsB').slideUp(500);
        $('.openC').one("click", handler1600);
        TweenLite.to(arrow8, .2, {rotation: 0, transformOrigin:"50%"});
        $('.CompanyB').slideUp(500);

    });

    /* Auto sidenav SlideUp2 */
    $(".openT").click(function(){

        $('.openS').one("click", handler1200);
        TweenLite.to(arrow6, .2, {rotation: 0, transformOrigin:"50%"});
        $('.SolutionB').slideUp(500);
        $('.openC').one("click", handler1600);
        TweenLite.to(arrow8, .2, {rotation: 0, transformOrigin:"50%"});
        $('.CompanyB').slideUp(500);

    });

    /* Auto sidenav SlideUp3 */
    $(".openC").click(function(){

        $('.openS').one("click", handler1200);
        TweenLite.to(arrow6, .2, {rotation: 0, transformOrigin:"50%"});
        $('.SolutionB').slideUp(500);
        $('.openT').one("click", handler1400);
        TweenLite.to(arrow7, .2, {rotation: 0, transformOrigin:"50%"});
        $('.ToolsB').slideUp(500);

    });

    /* Shopping List Body Alpha */
    $('.ShoppingCart').click(function() {
        $('.ShoppingList').css('display', 'block');
        /*Adding GSAP Animation*/
        var tl = new TimelineLite();
        var form = $('.ShoppingList');
        tl.from(form, 0.5, { y: -30, autoAlpha: 0, ease: Power2.easeOut }, '+=0.2');
    });

    $(".navlistRight li:nth-child(2)").click(function(){
        $('.ShoppingList').css('display', 'none');
    });

    $('.ShoppingCart').click(function() {
        TweenLite.to(arrow4, .2, {rotation: 0, transformOrigin:"50%"});
        $('.navlistRight li:nth-child(2)').css('color', '#03253b');
        $('.navlistRight li:nth-child(2)').one("click", handler333);
        $('.AccountList').slideUp(250);
    });

    $('.cancel').click(function(){
        $('.ShoppingList').css('display', 'none');
    });

});