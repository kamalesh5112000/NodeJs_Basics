const hobbies=['drawing','','chess','editing','','sports'];
for (let hobby in hobbies){
    console.log("Using in",hobby)
}
for (let hobby of hobbies){
    console.log("Using of",hobby)
}
const b=hobbies;
console.log(b)
//map will not change current instead it will creata new array
//map takes a function as arguments
const newHobbies=hobbies.map((hobby)=>{
    if (hobby==''){
        return "empty string"
    }else{
        return hobby
    }
})
console.log(newHobbies)