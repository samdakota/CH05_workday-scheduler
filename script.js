// time display at top
// var now = moment();
// console.log(now);

// var nowContainer = document.getElementById("current-day");
// var nowDisplay = moment().format("[Today is] dddd, MMMM Do YYYY");
// nowContainer.innerHTML = nowDisplay;

// time blocks
var now= 13;
var time = "";
var startTime = 8;
var endTime = 20;

var timeBlockContainer = document.getElementById("timeblock-container");
var saveTask = document.getElementById("save").click();


var style = "";
var setBlockColor = function() {
    if (time < now) {
        style = "past col-6";
    }
    else if (time == now) {
        style = "present col-6";
    }
    else {
        style = "future col-6";
    }
}

var createTimeBlock = function () {
  var timeBlock = document.createElement("div");
  timeBlock.setAttribute("class", "row time-block");
  timeBlockContainer.appendChild(timeBlock);
    var hourEl = document.createElement("div");
    hourEl.setAttribute("class", "hour col-2");
    hourEl.textContent = time;
    var textEl = document.createElement("textarea");
    setBlockColor();
    textEl.setAttribute("class", style);
    var saveBtn = document.createElement("button");
    saveBtn.setAttribute("class", "saveBtn col-2");
    saveBtn.textContent = "Save";
    timeBlock.appendChild(hourEl);
    timeBlock.appendChild(textEl);
    timeBlock.appendChild(saveBtn);
};

var createTimeBlockList = function() {
    for (var i = 0; i <= (endTime - startTime); i++) {
        createTimeBlock();
    }
}
createTimeBlockList();

var saveTimeBlock = function() {

}

// // var saveTask = function() {
// //     var taskInput = document.querySelector("textarea").value;

// }
