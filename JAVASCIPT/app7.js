class person{
    constructor(name,age,phoneno){
        this.name=name
        this.age=age
        this.phoneno=phoneno

    }
    walk(){
        console.log(this.name+"  walking")
    }
    running(){
        console.log(this.name+"  running")
    }
    eat(){
        console.log(this.name+"  eating")
    }
}
class student extends person{
    constructor(name,age,phoneno,marks){
        super(name,age,phoneno)
        this.marks=marks
    }
    reading(){
        console.log(this.name+"  reading")
    }
}
let person1=new person('balaji',30,9652337118)
let person2=new person('siva',28,8367622812)

let student1=new student('ram',12,9848,89)
console.log(person1.name)
person2.walk()
console.log(person2.age)
console.log(student1.marks)
student1.reading()