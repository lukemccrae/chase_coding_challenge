function textDollar(num) {
  var result = [];
  numString = num.toString(10)

  var numberNames = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
    'Twenty'
  ];

  var tens = [
    'Spacer',
    'Ten',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety'
  ]

  for (var i = 0; i < num.toString().length; i++) {
    // if(numString.length == 1) result.push(numberNames[num - 1])
    if(numString[0] == 0) {
      numString = numString.substring(1)
    }

    if(numString.length == 1 && numString != '0') {
      result.push(numberNames[parseInt(numString) - 1])
      numString = numString.substring(1)
    };

    if(numString.length == 2 && num < 21 && parseInt(numString) != 0) {
      result.push(numberNames[num - 1]);
      numString = numString.substring(2);
    };

    if(numString.length == 2 && num > 20 && parseInt(numString) != 0) {
      result.push(tens[numString[0]])
      numString = numString.substring(1);
    }

    if(numString == '100') {
      result.push('OneHundred')
      break;
    }

    if(numString.length == 3) {
      result.push(numberNames[parseInt(numString[0]) - 1] + 'Hundred')
      numString = numString.substring(1);
    }

    if(numString.length == 4) {
      result.push(numberNames[parseInt(numString[0]) - 1] + 'Thousand');
      numString = numString.substring(1);
    }
  }

  return result.join('') + 'Dollars';
}

console.log(textDollar(3) == 'ThreeDollars');
console.log(textDollar(466) == 'FourHundredSixtySixDollars');
console.log(textDollar(1234) == 'OneThousandTwoHundredThirtyFourDollars');
console.log(textDollar(10) == 'TenDollars');
console.log(textDollar(21) == 'TwentyOneDollars');
