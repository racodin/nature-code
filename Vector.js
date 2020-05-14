/**
 * @class Vector
 */
class Vector {
  /**
   * @constructor
   * @param {Number[]|Number} x 
   * @param {Number} y 
   */
  constructor(x, y) {
    if (x instanceof Array) {
      this.x = x[0] || 0;
      this.y = x[1] || 0;
    }
    this.x = x || 0;
    this.y = y || 0;
  }

  /**
   * clone vectors
   * 
   * @method copy
   * @return {Vector}
   */
  copy() {
    return new Vector(this.x, this.y);
  }

  /**
   * add vectors
   * 
   * @method add 
   * @param {Vector|Number[]|Number} x
   * @param {Number} y
   * @chainable
   */
  add(x, y) {
    if (x instanceof Vector) {
      this.x += x.x || 0;
      this.y += x.y || 0;
      return this;
    }
    if (x instanceof Array) {
      this.x += x[0] || 0;
      this.y += x[1] || 0;
      return this;
    }
    this.x += x || 0;
    this.y += y || 0;
    return this;
  }

  /**
   * subtract vectors
   * 
   * @method sub
   * @param {Vector|Number[]|Number} x
   * @param {Number} y
   * @chainable
   */
  sub(x, y) {
    if (x instanceof Vector) {
      this.x -= x.x || 0;
      this.y -= x.y || 0;
      return this;
    }
    if (x instanceof Array) {
      this.x -= x[0] || 0;
      this.y -= x[1] || 0;
      return this;
    }
    this.x -= x || 0;
    this.y -= y || 0;
    return this;
  }

  /**
   * scale the vector with multiplication
   * 
   * @method mult
   * @param {Vector|Number[]|Number} x
   * @param {Number} y
   * @chainable
   */
  mult(x, y) {
    if (x instanceof Vector) {
      this.x *= x.x || 0;
      this.y *= x.y || 0;
      return this;
    }
    if (x instanceof Array) {
      this.x *= x[0] || 0;
      this.y *= x[1] || 0;
      return this;
    }
    this.x *= x || 0;
    this.y *= y || 0;
    return this;
  }

  /**
   * scale the vector with division
   * 
   * @method div
   * @param {Vector|Number[]|Number} x
   * @param {Number} y
   * @chainable
   */
  div(x, y) {
    if (x instanceof Vector) {
      this.x /= x.x || 0;
      this.y /= x.y || 0;
      return this;
    }
    if (x instanceof Array) {
      this.x /= x[0] || 0;
      this.y /= x[1] || 0;
      return this;
    }
    this.x /= x || 0;
    this.y /= y || 0;
    return this;
  }

  /**
   * calbulate the magnitude of a vector
   * 
   */
  mag() {

  }

  /**
   * set the magnitude of a vector
   */
  setMag() {

  }

  /**
   * normalize the vector to a unit lenght of 1
   */
  normalize() {

  }

  /**
   * limit the magnitude of a vector
   */
  limit() {

  }

  /**
   * the 2D heading of a vector expressed as an angle
   */
  heading() {

  }

  /**
   * rotate a 2D vector by an angle
   */
  rotate() {

  }

  /**
   * linear interpolate to another vector
   */
  lerp() {

  }

  /**
   * the Euclidean distance between two vectors (considered as points)
   */
  dist() {

  }

  /**
   * find the angle between two vectors
   */
  angleBetween() {

  }

  /**
   * the dot product of two vectors
   */
  dot() {

  }

  /**
   * the cross product of two vectors (only relevant in three dimensions)
   */
  cross() {

  }

  /**
   * make a random 2D vector
   */
  random2D() {

  }

  /**
   * make a random 3D vector
   */
  random3D() {

  }

}