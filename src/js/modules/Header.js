import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.polyfills.min';

export class Header {
  constructor(block) {
    this.block = block;
    // const context = this;
    const blockName = this.block.getAttribute('class').split(' ')[0];

    const burger = this.block.querySelector(`.${blockName}__burger`);
    const nav = this.block.querySelector(`.${blockName}__wrap`);
    const links = this.block.querySelectorAll('.nav__link');
    let scrollPos = 0;
    let scrollPosHeader = 0;

    if (this.block.classList.contains(`${blockName}--main`)) {
      new SmoothScroll('.nav a[href*="#"]');
    }

    /** gerScrollPos */
    const gerScrollPos = () => {
      scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    };

    /** smoothScroll */
    // const smoothScroll = elem => {
    //   const vpWidth = window.innerWidth;
    //   const selector = elem.getAttribute('href');
    //   const rect = document.querySelector(selector).getBoundingClientRect();
    //   let behavior = null;

    //   // if (vpWidth < 1280) {
    //   //   behavior = 'auto';
    //   // } else {
    //   //   behavior = 'smooth';
    //   // }

    //   // window.scroll({
    //   //   top: rect.top,
    //   //   left: 0,
    //   //   behavior
    //   // });
    // };

    /** isInViewport */
    const isInViewport = section => {
      const elem = document.querySelector(section);
      const windowHeight = window.innerHeight;
      const distance = elem.getBoundingClientRect();
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      const id = elem.getAttribute('id');

      if (scrolled < windowHeight / 3) {
        Array.prototype.forEach.call(links, link => {
          link.classList.remove('isCurrent');
        });
        links[0].classList.add('isCurrent');
      } else if (scrolled > distance.top + window.pageYOffset - (windowHeight / 3) * 2) {
        Array.prototype.forEach.call(links, link => {
          link.classList.remove('isCurrent');
        });
        document.querySelector(`a[href='#${id}']`).classList.add('isCurrent');
      }
    };

    /** toggleElements */
    const toggleElements = () => {
      if (burger.classList.contains('isActive')) {
        burger.classList.remove('isActive');
        nav.classList.remove('isOpened');
        document.body.classList.remove('isFixed');
        window.scrollTo(0, scrollPos);
      } else {
        gerScrollPos();
        burger.classList.add('isActive');
        nav.classList.add('isOpened');
        document.body.classList.add('isFixed');
      }
    };

    window.addEventListener('scroll', () => {
      scrollPosHeader = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollPosHeader > 100) {
        this.block.classList.add('isScrolled');
      } else {
        this.block.classList.remove('isScrolled');
      }

      // isInViewport('.hero');
      if (this.block.classList.contains(`${blockName}--main`)) {
        isInViewport('.about');
        isInViewport('.production');
        isInViewport('.certificates');
        isInViewport('.catalogs');
        isInViewport('.leftovers');
        isInViewport('.objects');
        isInViewport('.contacts');
      }
    });

    burger.addEventListener('click', () => {
      toggleElements();
    });

    Array.prototype.forEach.call(links, link => {
      link.addEventListener('click', e => {
        if (this.block.classList.contains(`${blockName}--main`)) e.preventDefault();

        toggleElements();
        for (let i = 0; i < links.length; i += 1) {
          links[i].classList.remove('isCurrent');
        }
        // smoothScroll(link);
        link.classList.add('isCurrent');
      });
    });
  }
}
