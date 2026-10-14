import baguetteBox from 'baguettebox.js';
import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {

  initSlider( '#product-gallery-main', Object.assign( sliderConfig.product, {
    on: {
      init: function() {
        baguetteBox.run( '#product-gallery-main' );
      },
      slidePrevTransitionEnd: function() {
        baguetteBox.destroy( '#product-gallery-main' );
        baguetteBox.run( '#product-gallery-main' );
      },
    },
    thumbs: {
      swiper: initSlider( '#product-gallery-thumbs', sliderConfig.productThumbs ),
    },
  } ) );
};

export {
  initSliders,
};
