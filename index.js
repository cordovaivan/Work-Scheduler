var now = moment();
var timeBlocks = $(".time-block");
// var currentHour = moment().format("H");

$("#currentDay").text(now.format("dddd, MMM Do YYYY"));

function hourUpdate() {
    var currentHour = moment().hour();
    console.log(currentHour);

    timeBlocks.each(function(index) {
        var Blockhour = parseInt($(this).attr("id"));

        if (Blockhour < currentHour) {
            timeBlocks.addClass("past");
            timeBlocks.removeClass("future");
            timeBlocks.removeClass("present");
        }

        if else (Blockhour > currentHour) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }

        else (Blockhour == currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        };
    });
};


hourUpdate();

// console.log(currentHour);

// var Blockhour = parseInt($(timeBlocks).attr("id").split("")[0]);

// console.log(Blockhour);

// timeBlocks.each(function() {
//     var Blockhour = $(timeBlocks).attr("id").split("")[0];

//     if (Blockhour < currentHour) {
//         timeBlocks.addClass("past");
//     };

//     if (Blockhour > currentHour) {
//         timeBlocks.addClass("future");
//     };

//     if (Blockhour == currentHour) {
//         timeBlocks.addClass("present");
//     };
// });

// console.log(Blockhour);



