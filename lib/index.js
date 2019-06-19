/**
 *
 * @param {array} cases an array of objects of the following form {case:<predicate function or regex>,value:<value to return>}
 * @param {*} options  {objects:<default to false>}
 * @param {*} deafultValue if non of the cases listed in cases is true then return defaultValue
 */
function generator(cases, options, deafultValue) {
  return (input, object) => {
    let ret = deafultValue;
    if (!cases || cases.length <= 0) return deafultValue;
    cases.forEach(c => {
      ret = testCase(input, c) ? c : ret;
    });
    if (options.objects) {
      if (!ret || !object) return undefined;
      return object[ret.value];
    } else return ret.value;
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
  } else if (isFunction(check.case)) {
    return check.case(input);
  } else if (isString(check.case)) {
    let regex = new RegExp(check.case);
    return regex.test(input);
  } else return false;
}

/**
 *
 * @param {*} expression
 */
function isRegex(expression) {
  return expression instanceof RegExp;
}

/**
 * @description checks if obj is a function
 * @param {*} obj
 */
function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}
/**
 * @description checks if obj is a string
 * @param {*} obj
 */
function isString(obj) {
  return typeof obj === "string" || obj instanceof String;
}

module.exports = generator;
