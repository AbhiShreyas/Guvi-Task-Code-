/*Q1:How to compare two JSON having same Properties without order?
let obj1={name:"Person1",age:5}
let obj2={age:5,name:"Person1"}*/

let obj1={name:"Person1",age:5}
let obj2={age:5,name:"Person1"}
let final = "Properties are same"
//Comparison based on the length.
//If both objects have different number of properties they cannot be equal.
if(Object.keys(obj1).length == Object.keys(obj2).length){
    for(key in obj1){
        if(obj1[key]==obj2[key]){
            continue
        }
        else{
            final = "Properties are not same";
        }
    }
}
else{
    final = "Properties are not same"
}
//Output
console.log(final)



//Q2: Display all country flags in the console.(API url:https://restcountries.com/v3.1/all)

var request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var result = JSON.parse(request.response)
    for(i=0;i<=result.length;i++){
        console.log(result[i].flags)
    }
}

//Q3: Print all countries' names,regions,sub-regions and population

var request2= new XMLHttpRequest()
request2.open("GET","https://restcountries.com/v3.1/all")
request2.send()
request2.onload=function(){
    var result2=JSON.parse(request2.response)
    for(i=0;i<=result2.length;i++){
        console.log(result2[i].name, result2[i].region, result2[i].subregion, result2[i].population)
    }
}