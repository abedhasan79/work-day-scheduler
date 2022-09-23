let time9Am = $("#9am");
let time10Am = $("#10am");
let time11Am = $("#11am");
let time12Am = $("#12pm");
let time1Am = $("#1pm");
let time2Am = $("#2pm");
let time3Am = $("#3pm");
let time4Am = $("#4pm");
let time5Am = $("#5pm");


function setTime() {
    setInterval(function () {
        let currentDay = moment();
        $("#currentDay").text(currentDay.format('dddd, MMMM Do, h:mm:ss a'));

        let currentTime = moment().format('HH');
        //
        for(let i=9;i<18;i++){
            if (i == currentTime) {
                $('#'+i.toString()).addClass('present');
            } else if (i > currentTime) {
                $('#'+i.toString()).addClass('future');
            } else {
                $('#'+i.toString()).addClass('past');
            }
        }

    }, 1000);
}

setTime();




