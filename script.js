// time display at top
// var now = moment();
// console.log(now);

var nowContainer = document.getElementById("current-day");
var nowDisplay = moment().format("[Today is] dddd, MMMM Do YYYY");
nowContainer.innerHTML = nowDisplay;

// time blocks

var timeBlockContainer = document.getElementById("timeblock-container");

var createTimeBlock = function () {
  var timeBlock = document.createElement("div");
  timeBlock.setAttribute("class", "row time-block");
  timeBlockContainer.appendChild(timeBlock);
  for (var i = 0; i < 13; i++) {
    var hourEl = document.createElement("div");
    hourEl.setAttribute("class", "hour col-2");
    // hourEl.textContent = ;
    var textEl = document.createElement("textarea");
    textEl.setAttribute("class", "present col-6");
    var saveBtn = document.createElement("button");
    saveBtn.setAttribute("class", "saveBtn col-2");
  }
  timeBlock.appendChild(hourEl);
  timeBlock.appendChild(textEl);
  timeBlock.appendChild(saveBtn);
};

// // var saveTask = function() {
// //     var taskInput = document.querySelector("textarea").value;

// }
