const sliderConfig = {
  default: {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
    navigation: {
      prevEl: '[data-to-slide="prev"]',
      nextEl: '[data-to-slide="next"]',
    }
  },
  product: {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    speed: 400,
  },
  productThumbs: {
    slidesPerView: 4,
    spaceBetween: 16,
    speed: 400,
	loop: true,
    breakpoints: {
      1920: {
        spaceBetween: 24,
        slidesPerView: 5,
      },
    },
  },
};

export {
  sliderConfig,
};
