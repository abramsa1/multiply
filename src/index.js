module.exports = function multiply(first, second) {
  first = first.split("").reverse().join("");
  second = second.split("").reverse().join("");
  let result = '';
  let c = 0,
    d = 0,
    e;
  let arr = [''];

  if (+first < +second) {
    c = second;
    second = first;
    first = c;
    c = 0;
  }
  for (let i = 0; i < second.length; i++, d = 0) {
    for (let j = 0; j < first.length; j++) {
      c = d + +(second[i]) * +(first[j]);
      if (c > 9) {
        d = Math.trunc(c / 10);
        e = c % 10;
      } else {
        e = c;
        d = 0
      }
      arr[i] += String(e);
    }
    arr[i] += String(d);
    arr[i + 1] = '';
  }
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i].split("").reverse().join("");
    arr[i] = (arr[i] + '0'.repeat(i));
  }

  c = 0;
  d = 0;
  e = 0;
  let addend = arr.reverse();
  for (let i = 1; i <= addend[1].length; i++) {
    c = 0;
    for (let j = 1; j < addend.length; j++) {
      if (addend[j][addend[j].length - i] === undefined)
        c += d;
      else
        c += d + +addend[j][addend[j].length - i];
      d = 0;
    }
    if (c > 9) {
      d = Math.trunc(c / 10);
      e = c % 10;
    } else {
      e = c;
      d = 0
    }
    result += String(e);
  }
  result = result.split('').reverse().join('');
  if (result[0] === '0')
    result = result.substr(1);
  return (result);

}