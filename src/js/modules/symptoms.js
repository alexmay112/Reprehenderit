export default () => {
  $(".symptoms__slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    dotsClass: 'symptoms__slider-navigation',
    prevArrow: '<div class="symptoms__arrow-wrap arrow-left"><svg class="symptoms__arrow-left" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18"><g><g><path d="M0 7.982h.482L6.435 0l1.414 1.44-4.88 6.542H20v2.036H2.968l4.881 6.543-1.414 1.44-5.952-7.983H0z"/></g></g></svg></div>',
    nextArrow: '<div class="symptoms__arrow-wrap arrow-right"><svg class="symptoms__arrow-right" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18"><g><g><path d="M0 8h17.031l-4.88-6.433L13.565.152l5.953 7.847H20V10h-.482l-5.953 7.85-1.414-1.414L17.03 10H.002z"/></g></g></svg></div>',
  });
};
