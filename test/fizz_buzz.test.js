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
      const result = fizzbuzz.print1To100();
      assert.equal(1, result[0]);
    });
    test("最後は文字列Buzzを返す", () => {
      const fizzbuzz = new Fizzbuzz();
      const result = fizzbuzz.print1To100();
      assert.equal("Buzz", result[99]);
    });
    test("3の場合は文字列Fizzを返す", () => {
      const fizzbuzz = new Fizzbuzz();
      const result = fizzbuzz.print1To100();
      assert.equal("Fizz", result[2]);
    });
    test("5の場合は文字列Buzzを返す", () => {
      const fizzbuzz = new Fizzbuzz();
      const result = fizzbuzz.print1To100();
      assert.equal("Buzz", result[4]);
    });
    test("15の場合は文字列FizzBuzzを返す", () => {
      const fizzbuzz = new Fizzbuzz();
      const result = fizzbuzz.print1To100();
      assert.equal("FizzBuzz", result[14]);
    });
  });
});

class Fizzbuzz {
  constructor() {}
  convert(number) {
    let result = number;
    if (result % 3 === 0 && result % 5 === 0) {
      result = "FizzBuzz";
    } else if (result % 3 === 0) {
      result = "Fizz";
    } else if (result % 5 === 0) {
      result = "Buzz";
    }
    return result.toString();
  }

  print1To100() {
    let result = [];
    for (let i = 0; i <= 100; i++) {
      result[i] = this.convert(i + 1);
    }
    return result;
  }
}
