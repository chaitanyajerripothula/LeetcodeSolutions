/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
     const idMap = new Map();

  for (const obj of arr1) {
    const id = obj.id;
    if (idMap.has(id)) {
      const mergedObj = mergeObjects(idMap.get(id), obj);
      idMap.set(id, mergedObj);
    } else {
      idMap.set(id, obj);
    }
  }

  for (const obj of arr2) {
    const id = obj.id;
    if (idMap.has(id)) {
      const mergedObj = mergeObjects(idMap.get(id), obj);
      idMap.set(id, mergedObj);
    } else {
      idMap.set(id, obj);
    }
  }

  const joinedArray = Array.from(idMap.values());
  joinedArray.sort((a, b) => a.id - b.id);

  return joinedArray;
}

function mergeObjects(obj1, obj2) {
  const mergedObj = { ...obj1 };

  for (const key in obj2) {
    if (!mergedObj.hasOwnProperty(key)) {
      mergedObj[key] = obj2[key];
    } else {
      mergedObj[key] = obj2[key];
    }
  }

  return mergedObj;
    
};