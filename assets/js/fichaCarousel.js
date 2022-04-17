var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    loop: true,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
  });