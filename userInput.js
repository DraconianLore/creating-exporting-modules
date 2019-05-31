var sortingModule = require('./sortingModule');

// add data to module
sortingModule.addData(5);
sortingModule.addData(9);
sortingModule.addData(3);
sortingModule.addData(2);
sortingModule.addData(1);

// get sorted list
console.log(sortingModule.sortData());