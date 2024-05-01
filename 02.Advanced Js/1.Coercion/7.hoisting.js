getName();

console.log(x);

var x = 7; // remove this line it whill show not defined
console.log(getName);
function getName() {
  console.log("hello js");
}

var getName2 = function () {
  console.log("hello js 2");
};

var getName = () => {
    //behave like veriable
  console.log("hello js");
};

console.log(getName);
