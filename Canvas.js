class Canvas {
  constructor(target) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext("2d");
    this.canvas.id = "canvas";

    if (!target) {
      document.getElementsByTagName("body")[0].appendChild(this.canvas);
    } else {
      target.appendChild(this.canvas);
    }
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

  getContext() {
    return this.ctx;
  }
}