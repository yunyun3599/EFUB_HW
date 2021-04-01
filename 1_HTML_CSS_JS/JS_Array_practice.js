const arr = [1,2,3,4,5];

const arr2 = arr.map(num => num*3).filter((num) => num%2 == 0);

arr2.forEach(num => console.log(num));