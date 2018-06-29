// ================ BEGIN APP.JS ================ //
import Header from './modules/Header';
import Hero from './modules/Hero';
import Product from './modules/Product';
import Contacts from './modules/Contacts';

const callback = () => {
  const env = process.env.NODE_ENV;
  if (env === 'development') console.log('main module loaded.');

  new Header(document.querySelector('.header'));
  new Hero(document.querySelector('.hero'));
  new Product(document.querySelector('.production'));
  const contacts = new Contacts(document.querySelector('.contacts'));

  window.initMap = function() {
    contacts.initMap();
  };
};

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
  callback();
} else {
  document.addEventListener('DOMContentLoaded', callback);
}
// ================ END APP.JS ================ //
