const student ={
    name:"Tony",
    age:22,
    marks: 80,
    about:()=>{
        console.log(`Hi,${this.name} has ${this.marks}marks`)
    },
    about2:function(){
        console.log(`Hi,${this.name} has ${this.marks} marks`)
    }
};
student.about()
student.about2()