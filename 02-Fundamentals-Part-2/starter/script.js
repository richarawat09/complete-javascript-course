/*function ret(birthyear)
{
  const age=2026-birthyear;
  const left=65-age;
  return left;
}
const p=ret(2000);
console.log(`${p} years left`);

//arrow function
const ret = birthyear=> { 
    const age=2037-birthyear;
    const ret= 65 -age;
    return ret;
}
const p=ret(2000);
console.log(`${p} years left`);

const area = sides=>{
    const a=sides*sides;
    return a;
}
const p=area(5);
console.log(`${p} is area`);

//arrow function without a parameter
const area =()=>{
    console.log("hello");

}
area();

//function inside a function 
'use strict';
function fact(n)
{ if(n==1||n==0)
    return 1;
  else
    return fact(n-1)*n}
const p=fact(5)
console.log(p);
*/
//array
const friends=['nick','mike'];
const jonas=['jonas','schmedman',2037-1991,'teacher',friends];
const age=[1990,2000]
console.log(friends);
console.log(jonas);
console.log(2037-age);
console.log(friends.includes('mike'));
console.log(friends.includes('nikeee'))
console.log(jonas.includes(friends))
console.log(jonas.includes(46))


console.log(friends.length)
const news=friends.push('mickey');
console.log(news);
console.log(friends.length)
console.log(jonas.pop());
console.log(jonas.pop());
console.log(jonas.unshift(1));
friends[40]='jay'
console.log(friends)
console.log(jonas);
console.log(friends.indexOf('mickey'))
const jonass=new Array('1','2');
console.log(jonass)
