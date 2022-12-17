/* Your Code Here */

/*
 We're giving you this function[allWagesFor]. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// in this lab we are using this alot unlike in the introduction to context lab

function createEmployeeRecord([firstName,familyName,title,payPerHour]){
   let employee = {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
   } 
   return employee;
}

function createEmployeeRecords(Rows){
    return Rows.map(empRecord => createEmployeeRecord(empRecord))
}

function createTimeInEvent(dateStamp){
    let time = dateStamp.split(' ')
    const newTimeEvent ={}
    
    newTimeEvent.type = "TimeIn"
    newTimeEvent.hour = parseInt(time[1])
    newTimeEvent.date = time[0]
    this.timeInEvents.push(newTimeEvent)
    
    return this 
}

function createTimeOutEvent(dateStamp){
    let time = dateStamp.split(' ')
    const newTimeEvent = {
    }
    newTimeEvent.type = "TimeOut"
    newTimeEvent.hour = parseInt(time[1])
    newTimeEvent.date = time[0]
    this.timeOutEvents.push(newTimeEvent)
    
    return this 
}

//Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent
function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find((event) => event.date ===date)
    let timeOut = this.timeOutEvents.find((event) => event.date ===date)
    let hours = (timeOut.hour - timeIn.hour)/100
    //console.log(timeIn)
    //console.log(timeOut)
    //console.log(hours)
    return hours
}

//Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. 
//Amount should be returned as a number.
function wagesEarnedOnDate(date){
    let payOwed = this.payPerHour
    let hours = hoursWorkedOnDate.call(this,date)
    let wage = payOwed * hours
    return wage
}

//this is the code prvided for us to be revisted in details later
const allWagesFor = function () {
const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
         }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

   return payable
}

function findEmployeeByFirstName(srcArray, firstName){
    for(let i in srcArray) {
        if(srcArray[i].firstName === firstName){
            return srcArray[i]
        }
    }
}

//calculate payroll using allWagesFor
function calculatePayroll(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(payroll,record){
        return payroll + allWagesFor.call(record)
    },0)

}



