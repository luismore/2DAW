class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.stomach = [];
    }


    //method
    eat(food){
        this.stomach.push(food);
    }

    poop(){
        this.stomach = [];

    }

    toString(){
        return this.name +", "+ this.age;
    }



}


class Car{
    constructor(model, milesPerGallon){
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        tank = 0;
        odometer = 0;
    }
    
    //methods

    fill(gallons){
        tank = gallons;
    }

    drive(distance){
        distance += odometer;
        tank  -= distance/milesPerGallon;
        if(tank = 0){
            console.log("Run out of gas at "+ odometer +"km!");
        }
    }
}


class Lambdasian{
    constructor(name, age, location){
        this.name = name;
        this.age = age;
        this.location = location;
    }

    //methods

    speak(){
        return console.log("Hello my name is "+ this.name +", I am from "+ this.location)
    }
}

class Instructor extends Lambdasian{
    constructor(name, age, location, specialty, favLanguage, catchPhrase){
        super(name, age, location);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    //methods

    demo(subject){
        return console.log("Today we are going to learn about "+ subject +". "+ this.catchPhrase)
    }

    grade(Student, subject){
        console.log(Student.name+" receives a perfect score on "+subject)
    }
}

class Student{
    constructor(name, age, location, previousBackground, classname, favSubjects){
        this.name = name;
        this.age = age;
        this.location = location;
        this.previousBackground = previousBackground;
        this.classname = classname;
        this.favSubjects = favSubjects;
    }

    //methods

    listSubjects(){
        return console.log("Loves "+ this.favSubjects);
    }

    PRAssignment(subject){
        return console.log(student.name + "has submitted a PR for "+ subject);
    }

    sprintChallenge(subject){
        return console.log(student.name + "has begun sprint challenge on" + subject);
    }
}

class ProjectManager extends Instructor{
    constructor(name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor){
        super(name, age, location, specialty, favLanguage, catchPhrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    
}