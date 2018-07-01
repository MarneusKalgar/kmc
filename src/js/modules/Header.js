export default class {
  constructor(block) {
    this.block = block;
    const context = this;
    const blockName = this.block.getAttribute('class').split(' ')[0];

    const burger = this.block.querySelector(`.${blockName}__burger`);
    const nav = this.block.querySelector(`.${blockName}__wrap`);
    const links = this.block.querySelectorAll('.nav__link');
    let scrollPos = 0;
    let scrollPosHeader = 0;

    /** gerScrollPos */
    const gerScrollPos = () => {
      scrollPos = window.pageYOffset || document.documentElement.scrollTop;
      // console.log(scrollPos);
    };

    const smoothScroll = elem => {
      const vpWidth = window.innerWidth;
      const selector = elem.getAttribute('href');
      const rect = document.querySelector(selector).getBoundingClientRect();

      if (vpWidth < 1280) {
        window.scrollTo({
          top: rect.top,
          left: 0
        });
      } else {
        window.scrollBy({
          top: rect.top,
          left: 0,
          behavior: 'smooth'
        });
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

    window.addEventListener('scroll', function() {
      scrollPosHeader = this.pageYOffset || document.documentElement.scrollTop;
      if (scrollPosHeader > 100) {
        context.block.classList.add('isScrolled');
      } else {
        context.block.classList.remove('isScrolled');
      }
    });

    burger.addEventListener('click', () => {
      toggleElements();
    });

    Array.prototype.forEach.call(links, link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        toggleElements();
        for (let i = 0; i < links.length; i += 1) {
          links[i].classList.remove('isCurrent');
        }
        smoothScroll(link);
        link.classList.add('isCurrent');
      });
    });
  }
}
