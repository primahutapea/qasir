var objA = {
    a: 10,
    b: 20,
    c: 30
  };
  var objB = {
    a: 3,
    c: 6,
    d: 3
  };
  
  console.log(
    Object.keys(objA).concat(Object.keys(objB))
  
    .reduce(function(obj, k) {
      obj[k] = (objA[k] || 0) + (objB[k] || 0);
      return obj;
    }, {})
  )