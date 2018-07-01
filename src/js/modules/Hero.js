import Glide from '@glidejs/glide';

export default class {
  constructor(block) {
    this.block = block;
    // const blockName = this.block.getAttribute('class').split(' ')[0];

    new Glide('.glide', {
      type: 'carousel',
      gap: 0
    }).mount();
  }
}
