var now = moment();
var timeBlocks = $(".time-block");
var currentHour = moment().format("H");

console.log(currentHour);

$("#currentDay").text(now.format("dddd, MMM Do YYYY"));

var Blockhour = parseInt($(this).attr("id"));

console.log(Blockhour);



