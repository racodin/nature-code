class Ball {
  constructor(x, y, r) {
    this.x = x || 0;
    this.y = y || 0;
    this.radius = r || 10;
  }

  update(x, y, r) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
  }

  fill(color) {
    this.ctx.fillStyle = color || "gray";
    this.ctx.fill();
  }

  stroke(weight, color) {
    this.ctx.lineWidth = weight || 2;
    this.ctx.strokeStyle = color || 'black';
    this.ctx.stroke();
  }

}