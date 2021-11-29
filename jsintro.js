//question number one

const a = [12,50,44,15,29];

let result1 = a.filter(a => a>20).reduce((total, a) => total + a , 0);

console.log(result1);


//question number two

const words = ["apple", "kiwi", "orange", "banana"];

let result2 = words.filter(w => w.length >=5 && w.includes('a'));

console.log(result2);