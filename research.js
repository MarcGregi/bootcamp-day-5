

var list=[];


function push(num) {
    list.push(num)
  };

function sortList () {
    return list.sort(function order(a, b) {
      return a - b;
    });
}

function newFunct(num) {
push(num)
return sortList()
};

module.exports = {
  newFunct: newFunct
};


