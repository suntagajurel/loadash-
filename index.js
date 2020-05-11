
var _ = require("lodash");

//....lodash array methods ......

var filteredArray = {};

filteredArray = _.difference(a, b);
console.log(filteredArray)

console.log(_.difference([2, 1], [2, 3]))

console.log(_.chunk(['a', 'b', 'c', 'd', '6'], 2));  //creates chunk array of length 2 

console.log(_.compact([0, 1, false, 2, '', 3]));  //removdes falsey values i.e false,null ,'',0;

console.log(_.differenceBy([2.1, 2, 4.5], [2.3, 3.4], Math.floor));

console.log(_.sortedUniqBy([1.1, 1.2, 2.3, 2.4, 2.5, 5], Math.floor));

console.log(_.drop([1, 2, 3],2));

console.log(_.join(['a', 'b', 'c'], '~'));

console.log(_.slice([1,2,3,4,5], 2, 4 )); //2 inclusive ,,4 exclusive




//lodash object methods ...

var a = { name: "sunita", age: 5, class: 10 };
var b = { name: "sunita", class: 10, age: 10 };


console.log(_.isEqual(a, b)); // true;


let booksArray = [
    { title: "First", pages: 100 },
    { title: "Second", pages: 200 },
    { title: "Third", pages: 400 },
    {title: "Third", pages: 300 }
];

var ob = {};
const find = () => {

    ob = _.find(booksArray, (book) => {
        return book.pages > 150;
    }, 0);


}

find();
console.log(ob);


const filterBooks = () => {
    filteredBooks = _.filter(booksArray, book => {
        return book.pages > 150;
    })

    console.log(filteredBooks);
}

filterBooks();


const reduceBooks  = () => {
    var x = _.reduce( booksArray, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;

   },{});
   return x
   
}
console.log(reduceBooks());

_.forEach(booksArray, (value, key)=>  {
    console.log(value);
  });


console.log(_.sortBy(booksArray, (books)=>{return books }));
console.log('sort by using parameters')
console.log(_.sortBy(booksArray, ['title', 'pages']));

console.log(_.groupBy(booksArray, 'pages'));

console.log(_.keyBy(booksArray, 'pages'));

console.log(_.map(booksArray, 'pages'));

console.log(_.some(booksArray, ['pages', 300]));
