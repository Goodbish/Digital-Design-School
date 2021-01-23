let arr = new Array();

function fillArray(arr) {
    for (let i = 0; i < 200; i++) {
      arr.push(getRandomInt(-100, 101))
    }

  return arr
}

function replaceFromArray (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) { arr[i] = 0 }
    }

    return arr
}

function addToArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0 && arr[i] == 0) {
        arr.insert(i, -1)
        i++;
      }  
    }

    return arr
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

Array.prototype.insert = function ( index, item ) {
  this.splice( index, 0, item );
};

fillArray(arr);
replaceFromArray(arr);
addToArray(arr);
console.log(arr);