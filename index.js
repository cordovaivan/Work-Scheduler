var now = moment();
var timeBlocks = $(".time-block");
// var currentHour = moment().format("H");

$("#currentDay").text(now.format("dddd, MMM Do YYYY"));

function hourUpdate() {
    var currentHour = moment().hour();
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



function eventHandler(event) {
    event.preventDefault();

    const inpKey = localStorage.setItem('event', "");
    const inpValue = document.getElementsById("event");
    const saveBtn = document.getElementById("save");

    saveBtn.onclick = function () {
        const key = inpKey.value;
        const value = inpValue.value;

        if (key && value) {
            localStorage.setItem(key, value);
    
        }
    }


};

