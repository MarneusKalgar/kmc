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
      console.log(scrollPos);
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
      link.addEventListener('click', () => {
        toggleElements();
        for (let i = 0; i < links.length; i += 1) {
          links[i].classList.remove('isCurrent');
        }
        link.classList.add('isCurrent');
      });
    });
  }
}
