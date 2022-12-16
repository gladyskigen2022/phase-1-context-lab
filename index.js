/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord([firstName,familyName,title,payPerHour,timeInEvents,timeOutEvents]){
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
    return Rows.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp){
    let time = dateStamp.split(' ')
    const checkIn = {
    }
    checkIn.type = "TimeIn"
    checkIn.hour = parseInt(time[1])
    checkIn.date = time[0]
    this.timeInEvents.push(checkIn)
    
    return this 
}

function createTimeOutEvent(dateStamp){
    let time = dateStamp.split(' ')
    const checkOut = {
    }
    checkOut.type = "TimeOut"
    checkOut.hour = parseInt(time[1])
    checkOut.date = time[0]
    this.timeInEvents.push(checkOut)
    
    return this 
}

//const allWagesFor = function () {
   // const eligibleDates = this.timeInEvents.map(function (e) {
        //return e.date
    //})

    //const payable = eligibleDates.reduce(function (memo, d) {
        //return memo + wagesEarnedOnDate.call(this, d)
   // }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

   // return payable
//}

