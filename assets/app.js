let day=document.getElementById('day').value;
let month=document.getElementById('month').value;
let year=document.getElementById('year').value;


let date = new Date();

let day2 = date.getDay();
let month2 = 1 + date.getMonth();
let year2 = date.getFullYear();
let  mon = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if(day > day2){
    day2 = day2 + mon[month2 - 1];
    month2 = month2 -1;
}

if(month > month2){
    month2 = month2 + 12;
    year2 = year2 - 1;
}

let d = day2 - day;
let m = month2 - month;
let y = year2 - year;

let age =document.getElementById('showText').innerHTML=`
Your age is ${y} years ${m} months ${d} days`;
console.log(age)

