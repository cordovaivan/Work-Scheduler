var now = moment();
var timeBlocks = $(".time-block");
// var currentHour = moment().format("H");

$("#currentDay").text(now.format("dddd, MMM Do YYYY"));

function hourUpdate() {
    var currentHour = 15;
    console.log(currentHour);

    timeBlocks.each(function(index) {
        var Blockhour = parseInt($(this).attr("id"));
        console.log(Blockhour);

        if (Blockhour < currentHour) {
            console.log(Blockhour, currentHour ,(Blockhour < currentHour));
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }else if (Blockhour > currentHour) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }else {
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



