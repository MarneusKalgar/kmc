import Glide from '@glidejs/glide';

export class Hero {
  constructor(block) {
    this.block = block;
    // const blockName = this.block.getAttribute('class').split(' ')[0];

    new Glide('.glide', {
      type: 'carousel',
      gap: 0
    }).mount();
  }
}
