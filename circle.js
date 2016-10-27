function area(r)
{
  return 3.14*r*r;
}
module.exports.A=area;

module.exports =
{
  circumference : function(j)
  {
    var x = 2*3.14*j;
    console.log("The circumference of the circle of radius "+j+" is : "+x);
  }
};
module.exports.A=area;
