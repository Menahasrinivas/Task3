// //Question 1:Compare two JSON have the same properties without order:
// let obj1 = { "Name":"Person 1", Age: 5};
// let obj2= {"Age": 26,"Name":"Person2" };
// //convert the object to JSON
// let json1= JSON.stringify(obj1);
// let json2= JSON.stringify(obj2);
// if(json1===json2){
//     console.log("both are equal");
// }
// else
// {
//     console.log("both are different");
// }

// //Question 2:Display all country flags in the console
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","true")
request.send();
request.onload = function(){
    var data = request.response;
    // console.log(data);
    var result = JSON.parse(data);
    console.log(result);
    // console.log(result[249].area);
    for( var i=0;i<result.length;i++){
     console.log(result[i].flags.png);
}
   
}

// // // //Question 3:Print all the countries names,Regions,Sub-region and population:
// var request1 = new XMLHttpRequest();
// request1.open("GET","https://restcountries.com/v3.1/all","true")
// request1.send();
// request1.onload = function(){
//     var data1= request1.response;
//     // console.log(data1);
//     var result = JSON.parse(data1);
//     console.log(result);
//     // console.log(result1[249].area);
//   for( var i=0;i<result.length;i++){
//     console.log(result[i].name.common);
//  }
// }

// // Print all the  countries  Region in console:
// var request2 = new XMLHttpRequest();
// request2.open("GET","https://restcountries.com/v3.1/all","true")
// request2.send();
// request2.onload = function(){
//     var data2= request2.response;
//     // console.log(data);
//     var result = JSON.parse(data2);
//     console.log(result);
//   for( var i=0;i<result.length;i++){
//     console.log(result[i].region,result[i].subregion,result[i].population);
//  }
   
// }





