'use strict';

/*
Задание 1
С использованием возможностей ES-2015 реализовать сл-ю иерархию классов:
    Man(firstName, lastName, age),
        Employee(salary, speciality), Admin, Coder, Designer,
        Company(содержит массив сотрудников и методы добавления, удаления, показа сотрудников).
Управление реализовать в виде формы HTML5.
*/
const SPECIALITY = {
    CODER: 'CODER',
    ADMIN: 'ADMIN',
    DESIGNER: 'DESIGNER'
}
class Man {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class Employee extends Man{

    constructor(name, surname, age, salary, speciality) {
        super(name, surname, age);
        this.salary = salary;
    }
}

class Admin extends Employee {

    constructor(name, surname, age, salary) {
        super(name, surname, age, salary, SPECIALITY.ADMIN);

    }
}

class Coder extends Employee {

    constructor(name, surname, age, salary) {
        super(name, surname, age, salary, SPECIALITY.CODER);

    }

}

class Designer extends Employee {

    constructor(name, surname, age, salary) {
        super(name, surname, age, salary, SPECIALITY.DESIGNER);

    }
}

/*class Company {
    constructor(employees) {

        this._employees = employees || [];

    }

    addEmployee(employee) {

        this._employees.push(employee);

    }

    showEmployee(employee){
        if(employee instanceof Employee){
            console.log(this._employees);
        }
    }

    deleteEmployee(employee){

        if(employee instanceof Employee){
            this._employees.delete();

        }

    };
}*/

class Company{
    constructor(employees) {
        this._employees = employees || [];
    }
    getEmployees(){
        return this._employees
    }
    addEmployees(employee){
        if (employee instanceof Employee){
           this._employees.push(employee)
        }

    }

}

const freshCode = new Company();

//const showButtonElement = document.getElementById("buttonShowEmployee");
//console.log(document.getElementById('buttonAddEmployee'));
document.getElementById('addEmployeeButton').onclick=freshCode.addEmployees(new Admin("Ivan", "Ivanovich", 23, 300));
//document.getElementById('showEmployeeButton').onclick=document.getElementsByClassName('dataOutContainer').innerText.toString(freshCode.getEmployees());

let divForInput= document.getElementById('dataOutContainer');


function arrayToPrint(currentCompany){

/*for (let key in currentCompany){
   divForInput.innerText=key +": "+ currentCompany[key];*/
    //console.log(key +": "+ currentCompany[key]);
//}
    //divForInput.innerText=`<p>Ключ:  + &{key} + значение:  + currentCompany[key]</p>`;


}
function arrayToPrint(currentCompany) {
    currentCompany._employees.forEach(element => divForInput.innerText=JSON.stringify(element));
}
//for (let i=0; i<freshCode._employees.length; i++) {
   arrayToPrint(freshCode);
//}


//divForInput.innerText=freshCode;


//console.log(typeof (freshCode));
//document.getElementById('showEmployeeButton').onclick=ArrayToPrint;
