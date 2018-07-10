// ================ BEGIN APP.JS ================ //
import { Header } from './modules/Header';
import { Hero } from './modules/Hero';
import { Certificates } from './modules/Certificates';
import { Modal } from './modules/Modal';
// import { EqualList } from './modules/EqualList';
import { Contacts } from './modules/Contacts';

const callback = () => {
  const env = process.env.NODE_ENV;
  if (env === 'development') console.log('main module loaded.');

  let contacts = null;
  let modal = new Modal(document.querySelector('.modal'));
  new Header(document.querySelector('.header'));
  if (document.querySelector('.hero')) new Hero(document.querySelector('.hero'));
  if (document.querySelector('.certificates')) new Certificates(document.querySelector('.certificates'), modal);
  // if (document.querySelector('.equal-list')) new EqualList(document.querySelector('.equal-list'));
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
