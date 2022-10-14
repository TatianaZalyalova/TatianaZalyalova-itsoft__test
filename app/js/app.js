$(document).ready(function () {
  const $menu_popup = $(".menu");

  $(".menu-toggle, .menu__close").click(function () {
    $menu_popup.slideToggle(300, function () {
      if ($menu_popup.is(":hidden")) {
        $("body").removeClass("body_pointer");
      } else {
        $("body").addClass("body_pointer");
      }
    });
    return false;
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".menu").length) {
      $("body").removeClass("body_pointer");
      $menu_popup.slideUp(300);
    }
  });

  $(".banner .banner__photos").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".production__video-list").slick({
    speed: 300,
    slidesToShow: 2,
    variableWidth: true,
    infinite: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  });

  $(".production__video-inner").modalVideo();
  $(".specialists__video-list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
