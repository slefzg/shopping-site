$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});

  $(function(){
    $(document).ready(function(){

      $("#sp_navi_btn").click(function () {
        $(this).next().slideToggle();
      });

    });
  });