
var data = [];

// add data
var addData = function(newData) {
  data.push(newData);
}


// sort data
var sortData = function() {
  return data.sort(function(a,b) {
    return a - b;
  })
}



module.exports = {
  addData: addData,
  sortData: sortData
}
