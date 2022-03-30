// display current day at the top
// generate timeblocks for all hours of a day
// timeblocks can be edited to add text information
// save button next to timeblock saves to local storage
var now = moment();
console.log(now);

var nowContainer = document.getElementById("current-day");
var nowDisplay = moment().format("[Today is] dddd, MMMM Do YYYY");
nowContainer.innerHTML = nowDisplay;

var timeBlockContainer = getElementById("timeblock-container");

var createTimeBlock = function () {
    const timeBlock = document.createElement("div");
    timeBlock.setattribute("class", "textarea");

};


// generate timeblock function (start with time, check against rules, fill with info from localstorage or empty, append to DOM)
// loop through all time blocks and add class based on time
// form input for each time block, submit saves
