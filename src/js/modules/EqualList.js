export class EqualList {
  constructor(block) {
    this.block = block;
    // const blockName = this.block[0].getAttribute('class').split(' ')[0];
    const wrap = this.block.querySelectorAll('.equal-wrap');
    let maxHeight = -1;

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

    setTimeout(() => {
      setEqualHeight();
    }, 200);
    window.addEventListener('resize', () => {
      setTimeout(() => {
        setEqualHeight();
      }, 200);
    });
  }
}
