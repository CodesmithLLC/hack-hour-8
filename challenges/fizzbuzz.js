// Write a function that returns an array containing the numbers 1 to NUM.
// Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5,
// and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]
// for (i = 1; i <= num; i++) {
//    i % 3 === 0 && i % 5 === 0 ?
//    f.push('fizzbuzz') : i % 3 === 0 ?
//    f.push('fizz') : i % 5 === 0 ?
//    f.push('buzz') : f.push(i);
// }

function fizzbuzz(num) {
  const f = [];
  let i;

  for (i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      f.push('fizzbuzz');
    } else if (i % 3 === 0) {
      f.push('fizz');
    } else if (i % 5 === 0) {
      f.push('buzz');
    } else {
      f.push(i);
    }
  }

  return f;
}

module.exports = fizzbuzz;
