/**
 *
 * @param {array} cases an array of objects of the following form {case:<predicate function or regex>,value:<value to return>}
 * @param {*} deafultValue if non of the cases listed in cases is true then return defaultValue
 */
function generator(cases, deafultValue) {
  return input => {
    if (!cases || cases.length <= 0) return deafultValue;
    //TODO: iterate over all checks and if is truthy return value of current object
  };
}

/**
 *
 * @param {*} input
 * @param {*} check
 */
function testCase(input, check) {
  //TODO: write check if regex or predicate function
  return true;
}

/**
 *
 * @param {*} expression
 */
function isRegex(expression) {
  return expression instanceof RegExp;
}
