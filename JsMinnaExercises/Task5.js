/*========Question 1==========*/

/*
    There are two ways of declaring an object in Javascript; Object literal and Object Constructor.
    
    Differences
    =>The object literal notation is declared by delivering a singleton object i.e {}.
        =>e.g let printJade = {printName: 'my name is jade and I'm a cat'};
        printJade.printName; -> using the object on the go.
    =>On the other hand,with the object constructor notation, you create an object that can be used on multiple occasions using the *new* keyword.
        =>e.g funtion catNames (name) {
            this.name = name;
            this.printName = function () {
                console.log(`my name is ${this.name} and I'm a cat`);
            }
        };

        const jade = new catNames('jade'); ----> object has to be instantiated first
        jade.printName(); -> using the object.

    =>To use the object constructor, you have to instantiate first, while the object literal can be used directly;
*/



/*========Question 2==========*/
const data = {
    'alfred': {
        age: 47,
        years: 20,
        performance: 7,
        salary: 10000
    },
    'john': {
        age: 55,
        years: 26,
        performance: 10,
        salary: 14000
    },
    'joshua': {
        age: 60,
        years: 35,
        performance: 9,
        salary: 20000
    },
    'daniel': {
        age: 30,
        years: 5,
        performance: 7,
        salary: 10500
    },
    'jamie': {
        age: 40,
        years: 14,
        performance: 6,
        salary: 13000
    }
};

/*=========function to calculate increase in salary based off employees years=====*/
const calculateSalaryIncrease = (years, perfScore, salary) => {
    let percentIncrease = (years/10) * perfScore;

    return percentIncrease;
};

/*=========main function to calculate salary raise data of company=========*/
const companyRaiseData = (data) => {
    //get names of employees
    const namesOfEmployees = Object.keys(data);

    //get details of employees
    const employeeDetails = Object.values(data);

    let newSalaries = [];
    let greaterThan15 = [];
    let totalSalaries = [];

    //output variables
    let salaries=[];
    let raiseGt15 = [];

    /*======= map the employees details to calculate new salary 
    and if the % increase in salary is greater than 15% =======*/
    employeeDetails.map(detail => {
        let newSalary;

        let percentIncrease = calculateSalaryIncrease(detail.years, detail.performance, detail.salary);

        let increase = (percentIncrease/100) * detail.salary;

        /*====logic to figure out new salary based on 
        employees age and no of years========*/
        switch (true) {
            case detail.age > 50:
               newSalary =  detail.salary + 200 + increase;
               break;
            case detail.age > 30:
                newSalary = detail.salary + 100 + increase;
                break;
            default:
                newSalary = detail.salary + increase;
                break;
        };

        totalSalaries.push(detail.salary);

        newSalaries.push(newSalary);

        if (percentIncrease > 15) {
            greaterThan15.push(true);
        } else {
            greaterThan15.push(false);
        }
    });

    /*========calculate total salary before increase======*/
    const totalSalary = totalSalaries.reduce((num, arg) => {
        return num + arg;
    }, 0);

    /*========calculate total salary after increase======*/
    const overallNewSalary = newSalaries.reduce((num, arg) => {
        return num + arg;
    }, 0);

    /*===========overall companies payout increase==========*/
    const overallPayoutIncrease = overallNewSalary - totalSalary;

    
    /*========get employee names and their new salaries in an object,
    get names of employees with % increase in salary > 15% 
    and push to an array as required by output format========*/
    newSalaries.forEach((salary, idx) => {
        salaries.push({
            [namesOfEmployees[idx]]:newSalaries[idx]
        });

        if (greaterThan15[idx] === true) {
            raiseGt15.push(namesOfEmployees[idx])
        }
    });

    /*=====return output========*/
    return {
        salaries: salaries,
        raiseGt15: raiseGt15,
        overallPayoutIncrease: overallPayoutIncrease,
    }
};

console.log(companyRaiseData(data));