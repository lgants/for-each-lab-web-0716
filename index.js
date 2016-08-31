function iterativeLog(array){
  array.forEach((e,i,a) => {
    console.log(`${i}: ${e}`);
  });
}

function iterate(callback){
  const arr = ['random'];
  arr.forEach(callback);
  return arr;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
