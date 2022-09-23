// let time9Am = $("#9");
// let time10Am = $("#10");
// let time11Am = $("#11");
// let time12Am = $("#12");
// let time1Am = $("#1");
// let time2Am = $("#2");
// let time3Am = $("#3");
// let time4Am = $("#4");
// let time5Am = $("#5");


setInterval(function () {
    let currentDay = moment();
    $("#currentDay").text(currentDay.format('dddd, MMMM Do, h:mm:ss a'));
    let currentTime = moment().format('HH');


    for (let i = 9; i < 18; i++) {
        if (currentTime == i) {

            $('#' + i.toString()).removeClass('past');
            $('#' + i.toString()).removeClass('future');
            $('#' + i.toString()).addClass('present');

        } else if (currentTime < i) {

            $('#' + i.toString()).removeClass('past');
            $('#' + i.toString()).removeClass('present');
            $('#' + i.toString()).addClass('future');

        } else {

            $('#' + i.toString()).removeClass('present');
            $('#' + i.toString()).removeClass('future');
            $('#' + i.toString()).addClass('past');
        }
    }

}, 1000);




for (let i = 9; i < 18; i++) {
    $(".saveBtn"+i.toString()).on('click', function () {
        // console.log($('#'+i.toString()).val());
        localStorage.setItem("timerBlock"+i.toString(), ($('#'+i.toString()).val()));
    });
}



for (let j = 9; j < 18; j++) {
    console.log("timerBlock" + j.toString());
    $('#'+j.toString()).text((localStorage.getItem(("timerBlock"+j.toString()))));
}





