$(function (){

/* Edit Row1 */

$('.chang1').click(function() {
    $('.chang1').css('display', 'none');
    $('.updat1').css('display', 'block');
    $('.listvalue1').css('display', 'none');
    $('.inputfield1').css('display', 'block');
});

    var x = document.querySelector(".fullname").value;
    document.querySelector(".labell1").innerHTML = x;

$('.updat1').click(function(){
    var x = document.querySelector(".fullname").value;
    document.querySelector(".labell1").innerHTML = x;
    $('.chang1').css('display', 'block');
    $('.updat1').css('display', 'none');
    $('.listvalue1').css('display', 'block');
    $('.inputfield1').css('display', 'none');
});

/* Edit Row2 */

$('.chang2').click(function() {
    $('.chang2').css('display', 'none');
    $('.updat2').css('display', 'block');
    $('.listvalue2').css('display', 'none');
    $('.inputfield2').css('display', 'block');
});

    var y = document.querySelector(".PersonalEmail").value;
    document.querySelector(".labell2").innerHTML = y;

$('.updat2').click(function(){
    var y = document.querySelector(".PersonalEmail").value;
    document.querySelector(".labell2").innerHTML = y;
    $('.chang2').css('display', 'block');
    $('.updat2').css('display', 'none');
    $('.listvalue2').css('display', 'block');
    $('.inputfield2').css('display', 'none');
});

/* Edit Row3 */
$('.chang3').click(function() {
    $('.chang3').css('display', 'none');
    $('.updat3').css('display', 'block');
    $('.listvalue3').css('display', 'none');
    $('.inputfield3').css('display', 'block');
});

    var z = document.querySelector(".WorkEmail").value;
    document.querySelector(".labell3").innerHTML = z;

$('.updat3').click(function(){
    var z = document.querySelector(".WorkEmail").value;
    document.querySelector(".labell3").innerHTML = z;
    $('.chang3').css('display', 'block');
    $('.updat3').css('display', 'none');
    $('.listvalue3').css('display', 'block');
    $('.inputfield3').css('display', 'none');
});

/* Edit Row4 */
$('.chang4').click(function() {
    $('.chang4').css('display', 'none');
    $('.updat4').css('display', 'block');
    $('.listvalue4').css('display', 'none');
    $('.inputfield4').css('display', 'block');
});

    var e = document.querySelector(".WorkPhone").value;
    document.querySelector(".labell4").innerHTML = e;

$('.updat4').click(function(){
    var e = document.querySelector(".WorkPhone").value;
    document.querySelector(".labell4").innerHTML = e;
    $('.chang4').css('display', 'block');
    $('.updat4').css('display', 'none');
    $('.listvalue4').css('display', 'block');
    $('.inputfield4').css('display', 'none');
});

/* Edit Row5 */
$('.chang5').click(function() {
    $('.chang5').css('display', 'none');
    $('.updat5').css('display', 'block');
    $('.listvalue5').css('display', 'none');
    $('.inputfield5').css('display', 'block');
});

    var s = document.querySelector(".Company").value;
    document.querySelector(".labell5").innerHTML = s;

$('.updat5').click(function(){
    var s = document.querySelector(".Company").value;
    document.querySelector(".labell5").innerHTML = s;
    $('.chang5').css('display', 'block');
    $('.updat5').css('display', 'none');
    $('.listvalue5').css('display', 'block');
    $('.inputfield5').css('display', 'none');
});

/* Edit Row6 */
$('.chang6').click(function() {
    $('.chang6').css('display', 'none');
    $('.updat6').css('display', 'block');
    $('.listvalue6').css('display', 'none');
    $('.inputfield6').css('display', 'block');
});
    
    var u = document.querySelector(".JobRole").value;
    document.querySelector(".labell6").innerHTML = u;

$('.updat6').click(function(){
    var u = document.querySelector(".JobRole").value;
    document.querySelector(".labell6").innerHTML = u;
    $('.chang6').css('display', 'block');
    $('.updat6').css('display', 'none');
    $('.listvalue6').css('display', 'block');
    $('.inputfield6').css('display', 'none');
});

/* Edit Row7 */
$('.chang7').click(function() {
    $('.chang7').css('display', 'none');
    $('.updat7').css('display', 'block');
    $('.listvalue7').css('display', 'none');
    $('.inputfield7').css('display', 'block');
});

    var v = document.querySelector(".City").value;
    document.querySelector(".labell7").innerHTML = v;

$('.updat7').click(function(){
    var v = document.querySelector(".City").value;
    document.querySelector(".labell7").innerHTML = v;
    $('.chang7').css('display', 'block');
    $('.updat7').css('display', 'none');
    $('.listvalue7').css('display', 'block');
    $('.inputfield7').css('display', 'none');
});

/* Edit Row8 */
$('.chang8').click(function() {
    $('.chang8').css('display', 'none');
    $('.updat8').css('display', 'block');
    $('.listvalue8').css('display', 'none');
    $('.inputfield8').css('display', 'block');
});

    var d = document.querySelector(".Passwort").value;
    document.querySelector(".labell8").innerHTML = d;

$('.updat8').click(function(){
    var d = document.querySelector(".Passwort").value;
    document.querySelector(".labell8").innerHTML = d;
    $('.chang8').css('display', 'block');
    $('.updat8').css('display', 'none');
    $('.listvalue8').css('display', 'block');
    $('.inputfield8').css('display', 'none');
});

/* Edit Row9 */
$('.chang9').click(function() {
    $('.chang9').css('display', 'none');
    $('.updat9').css('display', 'block');
    $('.listvalue9').css('display', 'none');
    $('.inputfield9').css('display', 'block');
});

    var h = document.querySelector(".Country").value;
    document.querySelector(".labell9").innerHTML = h;

$('.updat9').click(function(){
    var h = document.querySelector(".Country").value;
    document.querySelector(".labell9").innerHTML = h;
    $('.chang9').css('display', 'block');
    $('.updat9').css('display', 'none');
    $('.listvalue9').css('display', 'block');
    $('.inputfield9').css('display', 'none');
});

});