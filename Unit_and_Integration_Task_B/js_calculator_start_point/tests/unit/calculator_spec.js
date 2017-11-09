var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  // number click test

  it('recognises numbers being clicked', function(){
    calculator.numberClick(4);
    var result = calculator.runningTotal;
    assert.equal(result, 4);
  })

  //clear click test

  it('can prove clearClick functionatity', function(){
    calculator.numberClick(6);
    calculator.clearClick();
    calculator.numberClick(5);
    var result = calculator.runningTotal;
    assert.equal(result, 5);
  })

  //can concatenate multiple number clicks

  it('can make larger numbers', function(){
    calculator.numberClick(5);
    calculator.numberClick(5);
    var result = calculator.runningTotal;
    assert.strictEqual(result, 55);
  })

  it('can make larger numbers', function(){
    calculator.numberClick(5);
    calculator.numberClick(8);
    calculator.numberClick(4);
    var result = calculator.runningTotal;
    assert.strictEqual(result, 584);
  })

  it('can multiply 3 & 5', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 15);
  })

  it('can divide 21 by 7', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 3);
  })

  it('can add 1 & 4', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 5);
  })

  it('can subtract 4 from 7', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 3);
  })


  //operator click test
  // addition
  it('should be able to add two positive integers', function() {
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 8);
  })

  it('should be able to add a positive and negative integer', function() {
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(-8);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, -4);
  })

  it('should be able to add three positive integers', function() {
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 14);
  })

  it('should be able to add several negative integers', function() {
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 14);
  })

  it('can handle adding floats', function() {
    calculator.numberClick(2.5);
    calculator.operatorClick('+');
    calculator.numberClick(9);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 11.5);
  })

  //subtraction
  it('should be able to subtract two positive integers', function() {
    calculator.numberClick(8);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 4);
  })

  it('should be able to subtract positive and negative', function() {
    calculator.numberClick(-8);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, -12);
  })

  it('should be able to subtract several positive integers', function() {
    calculator.numberClick(8);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 4);
  })

  it('should be able to subtract several negative integers', function() {
    calculator.numberClick(-8);
    calculator.operatorClick('-');
    calculator.numberClick(-4);
    calculator.operatorClick('-');
    calculator.numberClick(-6);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 2);
  })

  it('should be able to handle subtracting floats', function() {
    calculator.numberClick(2.5);
    calculator.operatorClick('-');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, -2.5);
  })

  // multiplication
  it('should be able to multiply two positive integers', function() {
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 16);
  })

  it('should be able to multiply several positive integers', function() {
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 64);
  })

  it('should be able to multiply two negative integers', function() {
    calculator.numberClick(-4);
    calculator.operatorClick('*');
    calculator.numberClick(-4);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 16);
  })

  it('should be able to multiply several negative integers', function() {
    calculator.numberClick(-4);
    calculator.operatorClick('*');
    calculator.numberClick(-4);
    calculator.operatorClick('*');
    calculator.numberClick(-4);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, -64);
  })


  it('should be able to multiply a positive and a negative integer', function() {
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.numberClick(-4);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, -16);
  })

  it('can handle multiplying floats', function() {
    calculator.numberClick(2.5);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 12.5);
  })

  //division
  it('should be able to divide two positive integers', function() {
    calculator.numberClick(4);
    calculator.operatorClick('/');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 1);
  })
  it('should be able to divide two negative integers', function() {
    calculator.numberClick(-2.5);
    calculator.operatorClick('/');
    calculator.numberClick(-5);
    calculator.operatorClick('=');
    var result = calculator.runningTotal;
    assert.strictEqual(result, 0.5);
  })

});
