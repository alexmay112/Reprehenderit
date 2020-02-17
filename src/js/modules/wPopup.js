



export default () => {
	$(document).ready(function () {

    $(window).on("scroll", function () {
       
        if (($(window).scrollTop() > $('.symptoms').offset().top) && ($(window).scrollTop() < $('.fakes').offset().top)) {
            $(".wPopup").fadeIn();
            
        } else {
            $(".wPopup").fadeOut();
            
        }

    });
   
})
};
