//Types of Employees---->       These are the products
class FullTime{
    salary=20000;
    // workTime=12
}
class PartTime{
    salary=10000;
    // workTime=8
}
class Contractor{
    salary=7000;
    // workTime=7;
}
class Freelancer{
    salary=5000;
    // workTime=5
}


// Factory / Creator
class EmployeeFactory{
    emp=null
    createEmployee(type){
        switch(type){
            case 'fullTime':
                this.emp=new FullTime();
                break;
            case 'partTime':
                this.emp=new PartTime();
                break;
            case 'contractor':
                this.emp=new Contractor();
                break;
            case 'freelancer':
                this.emp=new Freelancer();
                break;
            default:break;                
        }
        // this.emp.hello=type;
        this.emp.type=type;
        return this.emp;
    }
}

const employeeFactory=new EmployeeFactory();
// console.log(employeeFactory)

//type fullTime
console.log(employeeFactory.createEmployee('fullTime'));

//type partTime
console.log(employeeFactory.createEmployee('partTime'));

//type freeLancer
console.log(employeeFactory.createEmployee('freelancer'))

//type contractor
console.log(employeeFactory.createEmployee('contractor'))
