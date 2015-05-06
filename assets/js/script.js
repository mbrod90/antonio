console.log("script.js");

 $(document).ready(function() {

     $('.project').hover(
         function () {
           $(this).find('p').css({"visibility":"visible"});
         },
         function () {
           $(this).find('p').css({"visibility":"hidden"});
         }
     );

   });
