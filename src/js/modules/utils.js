import Swiper from 'swiper';
import {
  Navigation,
  Thumbs
} from 'swiper/modules';
import {
  sliderConfig,
} from './configs.js';

const initSlider = ( name, options = {} ) => {
  const defaultConfig = Object.assign( {}, {
    modules: [ Navigation, Thumbs ],
  }, sliderConfig.default );
  const customConfig = Object.assign( defaultConfig, options );

  if ( typeof name === 'string' ) {
    const sliderElement = document.querySelector( name );

    if ( !sliderElement ) return;
    return new Swiper( sliderElement, customConfig );
  }

  return new Swiper( name, customConfig );
};

export {
  initSlider,
};
