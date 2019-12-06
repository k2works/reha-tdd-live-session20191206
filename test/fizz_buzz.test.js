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
  suite("その他の場合", () => {
    test("1を渡したら文字列1を返す", () => {
      const fizzbuzz = new Fizzbuzz();
      assert.equal("1", fizzbuzz.convert(1));
    });
  });
});

class Fizzbuzz {
  convert(number) {
    let result = number;
    if (result % 3 === 0) {
      result = "Fizz";
    } else if (result % 5 === 0) {
      result = "Buzz";
    }
    return result.toString();
  }
}
