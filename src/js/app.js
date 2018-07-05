// ================ BEGIN APP.JS ================ //
import Header from './modules/Header';
import Hero from './modules/Hero';
import Product from './modules/Product';
import Contacts from './modules/Contacts';

const callback = () => {
  const env = process.env.NODE_ENV;
  if (env === 'development') console.log('main module loaded.');

  let contacts = null;
  if (document.querySelector('.header--main')) new Header(document.querySelector('.header--main'));
  if (document.querySelector('.hero')) new Hero(document.querySelector('.hero'));
  if (document.querySelector('.production')) new Product(document.querySelector('.production'));
  if (document.querySelector('.contacts')) {
    contacts = new Contacts(document.querySelector('.contacts'));
    window.googleMapsScriptLoaded = function() {
      contacts.googleMapsScriptLoaded();
    };
    contacts.appendMapScript();
  }
};

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  callback();
} else {
  document.addEventListener('DOMContentLoaded', callback);
}
// ================ END APP.JS ================ //
