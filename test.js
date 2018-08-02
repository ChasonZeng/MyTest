

var arr = [1,2,3.45,'zcs',null,true];
console.log(arr.length);
arr.push('www');
console.log(arr.length);
console.log(arr.indexOf(null));
var arr1= arr.slice(0,3);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}
arr.sort();
arr.reverse();
console.log(arr.join('__'));
var name="zcs";
var name2="asd"
arr.splice(3,0,name,name2)
console.log(arr.join('__'));
     
      /* version 5.0 */

      /* br2:我也做了修改 */