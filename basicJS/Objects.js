var a=20;
const student ={
    nam:"Tony",
    age:22,
    marks: 80,
    about:()=>{
        
        console.log(`Hi,${this.nam} has ${this.marks} marks`)
    },
    about2:function(){
        this.marks=45
        console.log(`Hi,${this.nam} has ${this.marks} marks ${this.a}`)
    },
    about3:{ 
        depart:"CSE",
        mark:this.marks
    }
};
student.about()
student.about2()
console.log(student.about3)