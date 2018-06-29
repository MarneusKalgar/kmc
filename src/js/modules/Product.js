export default class {
  constructor(block) {
    this.block = block;
    // const blockName = this.block[0].getAttribute('class').split(' ')[0];
    const wrap = this.block.querySelectorAll('.product__wrap');
    let maxHeight = -1;
    console.info(wrap);

    /** setEqualHeight */
    const setEqualHeight = () => {
      Array.prototype.forEach.call(wrap, elem => {
        maxHeight = Math.max(maxHeight, elem.offsetHeight);
      });

      Array.prototype.forEach.call(wrap, elem => {
        const item = elem;
        item.style.height = `${maxHeight}px`;
      });
    };

    setEqualHeight();
    window.addEventListener('resize', () => {
      setTimeout(() => {
        setEqualHeight();
      }, 200);
    });
  }
}
