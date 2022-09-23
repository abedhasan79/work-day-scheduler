let time9Am = $("#9");
let time10Am = $("#10");
let time11Am = $("#11");
let time12Am = $("#12");
let time1Am = $("#1");
let time2Am = $("#2");
let time3Am = $("#3");
let time4Am = $("#4");
let time5Am = $("#5");


function setTime() {
    setInterval(function () {
        let currentDay = moment();
        $("#currentDay").text(currentDay.format('dddd, MMMM Do, h:mm:ss a'));

        let currentTime = moment().format('HH');
        //
        for (let i = 9; i < 18; i++) {
            if (i == currentTime) {
                $('#' + i.toString()).addClass('present');
            } else if (i > currentTime) {
                $('#' + i.toString()).addClass('future');
            } else {
                $('#' + i.toString()).addClass('past');
            }
        }

    }, 1000);
}

setTime();



for (let i = 9; i < 18; i++) {
    if (!document.getElementById(i.toString()).getAttribute('readonly')) {
        $(".saveBtn" + i.toString()).on('click', function () {
            $('#' + i.toString()).attr('readonly', 'true');
        });
    } else {
        $(".saveBtn" + i.toString()).off('click');
    }


}




