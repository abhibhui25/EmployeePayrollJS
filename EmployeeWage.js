// CHECKING IF EMPLOYEE IS PRESENT OR ABSENT
const PRESENT = 1;
const ABSENT = 0;
let attendance = Math.floor(Math.random()*10) % 2;
if(attendance == ABSENT){
    console.log("Employee is absent");
    return;
}
else
    console.log("Employee is present");

// CONSTANTS IF EMPLOYEE IS PRESENT
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const PER_HOUR_WAGE = 20;
const NUM_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

var total_emp_hours = 0;
var total_working_days = 1;

var employeeWageArray = new Array()
var employeeWageMapArray = new Array

// FUNCTION TO SET EMPLOYEE HOURS
function demo(options){
    let emp_hours = 0;
    switch(options){
        case IS_PART_TIME:
            emp_hours = PART_TIME_HOUR; break;
        case IS_FULL_TIME:
            emp_hours = FULL_TIME_HOUR; break;
    }
    return emp_hours;
}

// FUNCTION TO CALCULATE DAILY WAGE OF AN EMPLOYEE
function calculateDailyWage(emp_hours){
    return emp_hours * PER_HOUR_WAGE;
}

while(total_emp_hours <= MAX_WORKING_HOURS && total_working_days <= NUM_WORKING_DAYS){
    let daily_emp_hours = demo(Math.floor(Math.random()* 10) % 3)
    employeeWageArray.push(calculateDailyWage(daily_emp_hours))
    total_emp_hours += daily_emp_hours
    total_working_days ++
}

// 7A: CALCULATE TOTAL WAGES OF EMPLOYEE
let total_emp_Wage = 0;
function sum(dailyWage){
    total_emp_Wage += dailyWage;
}
employeeWageArray.forEach(sum)
console.log("Total Wages From ForEach: " + total_emp_Wage)

function wages(totalWage, dailyWage){
    return totalWage + dailyWage
}
console.log("Total Wages From Reduce:  " + employeeWageArray.reduce(wages))

// 7B: MAP FUNCTION: TO SHOW DAY AND DAILY WAGE
let day = 0;
function mapDayToDailyWage (emp_daily_wage){
    day ++;
    return "Day: " + day + "  Daily Wage: " + emp_daily_wage + "\n";
}
employeeWageMapArray = employeeWageArray.map(mapDayToDailyWage)
console.log("Map: Day to Daily Wages \n" + employeeWageMapArray)

// 7C: DAYS ON WHICH FULL TIME WAGE IS EARNED
function displayDaysFullTimeWage (dailyWage){
    return dailyWage.includes("160");
}
let fullTimeWageArray = employeeWageMapArray.filter(displayDaysFullTimeWage)
console.log("Days (Full Time Wage): " + fullTimeWageArray)

// 7D: FIRST OCCURENCE OF FULL TIME WAGE
console.log("First Occurence of Full Time Wage: " + employeeWageMapArray.find(displayDaysFullTimeWage))

// 7E: CHECK FOR EVERY OCCURRENCE OF FULL TIME WAGES
//console.log("Check every occurrence of full time wages: " + employeeWageMapArray.every(displayDaysFullTimeWage))

// 7F: CHECK IF THERE IS PART TIME WAGES
function displayDaysPartTimeWage (dailyWage){
    return dailyWage.includes("80");
}
console.log("Checking for part time wages: " + employeeWageMapArray.filter(displayDaysPartTimeWage))

// 7G: GET TOTAL WORKING DAYS
function getTotalWorkingDays(totalWorkingDays, dailyWage){
    if(dailyWage > 0) totalWorkingDays ++;
    return totalWorkingDays
}
console.log("Total Working Days: " + employeeWageArray.reduce(getTotalWorkingDays,0))

// UC14: CHECK FOR EMPLOYEE ID, SALARY > 0, GENDER-> 'M' or 'F'
class Employee{
    id;
    salary;
    gender;
    date;

    constructor(id, name, salary, gender, date){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.date = date;
    }

    set id(id){
        let regex = RegExp('^[0-9]+')
        if(regex.test(id))
            this._id = id;
        else throw "Incorrect Id"
    }
    set name(name){
        this._name = name;
    }
    set salary(salary){
        let regex = RegExp('^[0-9]+')
        if(regex.test(salary))
            this._salary = salary;
        else throw "Incorrect Salary"
    }
    set gender(gender){
        let regex = RegExp('?[MF]')
        if(regex.test(gender))
            this._gender = gender;
        else throw "Incorrect Gender"
    }
    set date(date){
        this._date = date
    }
}

try{
    let employee1 = new Employee(-1, "Mark", 1000, 'M', new Date())
    console.log(employee1.toString())
}catch (error){
    console.log("Error: " + error)
}
try{
    let employee2 = new Employee(1, "Mark", -1000, 'M', new Date())
    console.log(employee2.toString())
}catch (error){
    console.log("Error: " + error)
}
try{
    let employee3 = new Employee(1, "Mark", 2000, 'H', new Date())
    console.log(employee3.toString())
}catch (error){
    console.log("Error: " + error)
}
try{
    let employee4 = new Employee(1, "Mark", 3000, 'M', new Date())
    console.log(employee4.toString())
}catch (error){
    console.log("Error: " + error)
}