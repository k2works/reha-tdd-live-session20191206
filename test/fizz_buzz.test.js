/* eslint-env mocha */
const assert = chai.assert;

suite("FizzBuzzTest", () => {
  suite("3の倍数の場合", () => {
    test("3を渡したら文字列Fizzを返す", () => {
      const fizzbuzz = new Fizzbuzz();
      assert.equal("Fizz", fizzbuzz.convert(3));
    });
  });
  suite("5の倍数の場合", () => {
    test("5を渡したら文字列Buzzを返す", () => {
      const fizzbuzz = new Fizzbuzz();
      assert.equal("Buzz", fizzbuzz.convert(5));
    });
  });
  suite("3と5の倍数の場合", () => {
    test("15を渡したら文字列FizzBuzzを返す", () => {
      const fizzbuzz = new Fizzbuzz();
      assert.equal("FizzBuzz", fizzbuzz.convert(15));
    });
  });
  suite("その他の場合", () => {
    test("1を渡したら文字列1を返す", () => {
      const fizzbuzz = new Fizzbuzz();
      assert.equal("1", fizzbuzz.convert(1));
    });
  });
  suite("1から100まで数を返す", () => {
    test("はじめは1を返す", () => {
      const fizzbuzz = new Fizzbuzz();
      const result = fizzbuzz.generateList();
      assert.equal(1, result[0]);
    });
    test("最後は文字列Buzzを返す", () => {
      const fizzbuzz = new Fizzbuzz();
      const result = fizzbuzz.generateList();
      assert.equal("Buzz", result[99]);
    });
    test("3の場合は文字列Fizzを返す", () => {
      const fizzbuzz = new Fizzbuzz();
      const result = fizzbuzz.generateList();
      assert.equal("Fizz", result[2]);
    });
    test("5の場合は文字列Buzzを返す", () => {
      const fizzbuzz = new Fizzbuzz();
      const result = fizzbuzz.generateList();
      assert.equal("Buzz", result[4]);
    });
    test("15の場合は文字列FizzBuzzを返す", () => {
      const fizzbuzz = new Fizzbuzz();
      const result = fizzbuzz.generateList();
      assert.equal("FizzBuzz", result[14]);
    });
  });
});

class Fizzbuzz {
  constructor() {
    this.FIZZ = "Fizz";
    this.BUZZ = "Buzz";
    this.MAX_NUMBER = 100;
  }
  convert(number) {
    const isFizz = number % 3 === 0;
    const isBuzz = number % 5 === 0;

    if (isFizz && isBuzz) return this.FIZZ + this.BUZZ;
    if (isFizz) return this.FIZZ;
    if (isBuzz) return this.BUZZ;

    return number.toString();
  }

  generateList() {
    // 配列は0から始まるので1を足している
    return [...Array(this.MAX_NUMBER + 1).keys()]
      .slice(1)
      .map(this.convert.bind(this));
  }
}
