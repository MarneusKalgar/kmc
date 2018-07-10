export class Certificates {
  constructor(block, modal) {
    this.block = block;
    const blockName = this.block.getAttribute('class').split(' ')[0];
    const togglers = this.block.querySelectorAll(`.${blockName}__btn`);

    const loadImage = btn => {
      const thumbSrc = btn.querySelector(`.${blockName}__img`).getAttribute('src');
      const fullSrc = thumbSrc.slice(0, thumbSrc.length - 10);
      console.log(fullSrc);

      modal.openImageModal(fullSrc);
      modal.show();
    };

    Array.prototype.forEach.call(togglers, toggler => {
      toggler.addEventListener('click', () => {
        loadImage(toggler);
      });
    });
  }
}
