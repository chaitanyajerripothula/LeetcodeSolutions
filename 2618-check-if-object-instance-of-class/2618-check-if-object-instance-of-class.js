/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
   if(obj === null || obj === undefined) return false;
    if(obj.constructor === classFunction) return true;
    return checkIfInstanceOf(Object.getPrototypeOf(obj),classFunction);
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */