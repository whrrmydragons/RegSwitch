/**
 *
 * @param {array} cases an array of objects of the following form {case:<predicate function or regex>,value:<value to return>}
 * @param {*} deafultValue if non of the cases listed in cases is true then return defaultValue
 */
function generator(cases, deafultValue) {
  return input => {
    let ret = deafultValue;
    if (!cases || cases.length <= 0) return deafultValue;
    cases.forEach(c => {
      ret = testCase(input, c) ? c.value : ret;
    });
  };
}

/**
 *
 * @param {*} input
 * @param {*} check
 */
function testCase(input, check) {
  if (isRegex(check.case)) {
    return check.case.test(input);
  } else return check.case(input);
}

/**
 *
 * @param {*} expression
 */
function isRegex(expression) {
  return expression instanceof RegExp;
}

module.exports = generator;
