class Vector {
  constructor(x, y) {
    if (x instanceof Array) {
      this.x = x[0] || 0;
      this.y = x[1] || 0;
      return this;
    }
    this.x = x || 0;
    this.y = y || 0;
  }

  copy() {
    return new Vector(this.x, this.y);
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
  }

  mult(v) {
    this.x *= v.x;
    this.y *= v.y;
  }

  div(v) {
    this.x /= v.x;
    this.y /= v.y;
  }

}