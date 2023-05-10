/*gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg"); 

  // Give the backgrounds some random images
  section.bg.style.backgroundImage = `url(../assets/Images/lonelyforest.jpg)`;

  // Do the parallax effect on each section
  if (i) {
    section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

    gsap.to(section.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true
      }
    });
  } 
  
  // the first image should be positioned against the top. Use px on the animating part to work with GSAP. 
  else {
    section.bg.style.backgroundPosition = "50% 0px"; 

    gsap.to(section.bg, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top", 
        end: "bottom top",
        scrub: true
      }
    });
  }
});
*/

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(document).ready(function(){

    $('#subtn1').click(function(){

    $("#form1").addClass("was-validated");

    if (grecaptcha.getResponse(0) == ""){
    $("#recapacth1").addClass("recap");
    } else {
    $("#subtn1").attr("type", "submit");
    }

  });

    $('#subtn2').click(function(){

    $("#form2").addClass("was-validated");

    if (grecaptcha.getResponse(1) == ""){
    $("#recapacth2").addClass("recap");
    } else {
    $("#subtn2").attr("type", "submit");
    }

  });

    $('#subtn3').click(function(){

    $("#form3").addClass("was-validated");

    if (grecaptcha.getResponse(2) == ""){
    $("#recapacth3").addClass("recap");
    } else {
    $("#subtn3").attr("type", "submit");
    }

  });

  });