function person(Teacher,subject){
    this.Teacher = Teacher;
    this.subject = subject;
   
}

person.prototype.teach = function(){
    return this.Teacher+" is now teaching "+this.subject;
}

const him = new person("shiva","python");
console.log(him.teach())