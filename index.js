// const createEmployeeRecord = (arr) => {
//   return {
//       firstName : arr[0],
//       familyName : arr[1],
//       title : arr[2],
//       payPerHour: arr[3],
//       timeInEvents : [],
//       timeOutEvents : []
//     };
// };

// const createEmployeeRecords = (matrix) => {
//   let result = [];
//   let s = matrix.map(arr => {
//     return result.push(createEmployeeRecord(arr));
//   });
//   return result;
//   };
  
// const createTimeInEvent = (dateIn) => {
//   let dateArray = dateIn.split(' ');
//   this.timeInEvents.push({
//     type: "TimeIn",
//     hour: parseInt(dateArray[1]),
//     date: dateArray[0]
//   });
  
//   return this;
// };
   
// const createTimeOutEvent = (dateOut) => {
//     let dateArray = dateOut.split(' ');
//   let timeObject = {
//     type: "TimeOut",
//     hour: parseInt(dateArray[1]),
//     date: dateArray[0]
    
//   };
//       this.timeOutEvents.push(timeObject);
//       return this;
// };
   
// const hoursWorkedOnDate = (date=0) => {
//   let inEvent = this.timeInEvents.find(function(e){
//         return e.date === date
//     })

//     let outEvent = this.timeOutEvents.find(function(e){
//         return e.date === date
//     })

//     return (outEvent.hour - inEvent.hour) / 100
//   }


// const wagesEarnedOnDate = (date=0) => {
//     let hoursWorked = hoursWorkedOnDate(date)
//     let wages = this.payPerHour*hoursWorked
//     return wages
// }

// // const allWagesFor = () =>{
// //   let eligibleDates = this.timeInEvents.map(el => {
// //         return el.date
// //     })

// //     let payable = eligibleDates.reduce((acc, d) => {
// //         return acc + wagesEarnedOnDate(d)
// //     }, 0)

// //     return payable
// // }
// const calculatePayroll = () => {
//     return this.reduce((acc, val) => {
//         return acc + allWagesFor(val)
//     }, 0)
// }  

// const findEmployeeByFirstName = (arr, string) => {
//   return arr.find(el => {
//     return el.firstName === string
//   })
// }  


let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}

let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let hoursWorkedOnDate = function(soughtDate){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(dateSought){
    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}

// let allWagesFor = function(){
//     let eligibleDates = this.timeInEvents.map(function(e){
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function(memo, d){
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0)

//     return payable
}

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}