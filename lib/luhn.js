/* Used function and constructors for the sake of practice.
* @param: input is a string of account number.
* An object will be created for that number with multiple properties.
* @ exports the constructor.
*/

var arg = process.argv[2];

function myIdConstructor (id_input) {
  this.id = id_input;
  this.idx = prepareStrForLuhn(id_input);
  this.preparedArry = this.idx.split('').reverse();
  this.luhnArry = doubleEveryOther(this.preparedArry);
  this.sumOfLuhnDigits = sumLuhnArry(this.luhnArry);
  this.luhnAccountNum = this.idx + findLastDigit(this.sumOfLuhnDigits);
  this.isThisLuhn = isAccntNumLuhn(this.id, this.luhnAccountNum);

  function prepareStrForLuhn (str) {
    var arr = str.split('');
    arr.pop();
    return arr.join('');
  }

  function doubleEveryOther (preparedArry) {
    preparedArry.forEach(function (item, index) {
      if (index % 2 === 0) {
        if (item * 2 > 9) preparedArry[index] = item * 2 - 9;
        else preparedArry[index] = item * 2;
      }
    });
    return preparedArry.reverse();
  }

  function sumLuhnArry (luhnArry) {
    var luhnSum = 0;
    luhnArry.forEach(function (item) { luhnSum += Number(item); });
    return luhnSum;
  }

  function findLastDigit (luhnSum) {
     return luhnSum * 9 % 10;
  }

  function isAccntNumLuhn (original, luhn) {
    return original == luhn;
  }
}

//var obj = new myIdConstructor(arg); // <-- do not include this for testing

module.exports = myIdConstructor;