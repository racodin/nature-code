/**
 * @class Canvas
 */
class Canvas {
  /**
   * @constructor
   * @param {Number} width 
   * @param {Number} height 
   * @param {Element} target 
   */
  constructor(width, height, target) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext("2d");

    let i = 0;
    while (document.getElementById(`canvas${i}`)) i++;
    this.canvas.id = `canvas${i}`;
    this.size(width, height);

    if (!target) {
      document.getElementsByTagName("body")[0].appendChild(this.canvas);
    } else {
      target.appendChild(this.canvas);
    }
  }

  add(instance) {
    instance.ctx = this.ctx;
  }

  size(width, height) {
    this.width = this.canvas.width = width;
    this.height = this.canvas.height = height;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  style(object) {
    for (const value in object) {
      this.canvas.style[value] = object[value];
    }
  }
}