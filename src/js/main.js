import './modules/libsCss.js';
import 'focus-visible';
import {
  initSiteSettings
} from './modules/settings.js';
import {
  initSliders
} from './modules/slider.js';

document.addEventListener( 'DOMContentLoaded', () => {
  initSiteSettings();

  window.addEventListener( 'load', () => {
    initSliders();
  } );
} );
