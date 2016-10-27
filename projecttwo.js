console.log(19=='19');
console.log(19===19);
console.log(19==='19');
var Arun = {
  printName : function(){
    console.log("Hey ");
    console.log(this===Arun);//true
  }
};
Arun.printName();
