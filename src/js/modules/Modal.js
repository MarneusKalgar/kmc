export class Modal {
  constructor(block) {
    this.block = block;
    const blockName = this.block.getAttribute('class').split(' ')[0];
    this.inner = this.block.querySelector(`.${blockName}__inner`);
    this.img = this.block.querySelector('img');
    const close = this.block.querySelector(`.${blockName}__close`);
    const backDrop = this.block.querySelector(`.${blockName}__backdrop`);

    close.addEventListener('click', () => {
      this.hide();
    });

    backDrop.addEventListener('click', () => {
      this.hide();
    });
  }

  show() {
    this.block.classList.add('isVisible');
    document.body.style.overflow = 'hidden';
  }

  hide() {
    this.block.classList.remove('isVisible');
    this.img.setAttribute('src', '');
    // this.img.parentNode.removeChild(this.img);
    document.body.style.overflow = 'auto';
  }

  openImageModal(src) {
    // this.img = document.createElement('img');
    this.img.setAttribute('src', `${src}.jpg`);
    // this.inner.appendChild(this.img);
  }
}
