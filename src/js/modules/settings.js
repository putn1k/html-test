import baguetteBox from 'baguettebox.js';
import JustTabs from 'justtabs';

const initSiteSettings = () => {
  [ '[data-gallery]' ].map( ( item ) => baguetteBox.run( item ) );
  new JustTabs( 'description' );
  new JustTabs( 'variables' );
};

export {
  initSiteSettings,
};
