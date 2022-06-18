var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var auditTasks = function () {
  var currentHour = moment().hour();
  $(".task-info").each(function() {
    var divHour = $(this).attr("id");

    if (currentHour === divHour) {
      $(this).addClass('present');
    } else if (currentHour < divHour) {
      $(this).addClass('past');
    } else {
      $(this).addClass('future');
    }
  });
};

var loadTasks = function(){
  var taskStorage = localStorage.getItem("tasks");

  if (!taskStorage) {
      var tasks = {
          "9": "",
          "10": "",
          "11": "",
          "12": "",
          "13": "",
          "14": "",
          "15": "",
          "16": "",
          "17": ""
      };
      localStorage.setItem("tasks", JSON.stringify(tasks));
      return;
  }

  $(".task-info").each(function(){
      timeDiv = $(this).attr("id");
      var taskStorage = JSON.parse(localStorage.getItem("tasks"));
      var timeVal = taskStorage[timeDiv];
      $(this).find(".task").val(timeVal);
  });
};

$(".saveBtn").click(function(event){
  event.preventDefault();
  var inputValue = $(this).siblings(".task").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, inputValue);

  var taskStorage = JSON.parse(localStorage.getItem("tasks"));
  var updated = { ...taskStorage, [time]: inputValue};
  
  localStorage.setItem("tasks", JSON.stringify(updated));
});

loadTasks();
auditTasks();
