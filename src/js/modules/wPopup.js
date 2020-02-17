export default () => {
  $(document).ready(function () {

    document.querySelector('.promo__pay').style.bottom = '0' + 'px';

    $(window).on("scroll load", function () {
      if (($(window).scrollTop() > $('.symptoms').offset().top) && ($(window).scrollTop() < $('.fakes').offset().top)) {
        $(".wPopup").fadeIn();

        // window.addEventListener(`resize`, event => {
        if (document.documentElement.clientWidth < 768) {
          document.querySelector('.promo__pay').style.bottom = '52' + 'px';
        } else {
          document.querySelector('.promo__pay').style.bottom = '88' + 'px';
        }
        // }, false);

      } else {
        $(".wPopup").fadeOut();
        document.querySelector('.promo__pay').style.bottom = '0' + 'px';
      }
    });
  })
};
