class Ball {
  constructor(ctx) {
    this.ctx = ctx || console.error("You must declare context that made by canvas");
  }

  update(x, y, r) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, 2 * Math.PI, false);
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