
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

    // console.log("timerBlock" + j.toString());
    $('#'+j.toString()).text((localStorage.getItem(("timerBlock"+j.toString()))));
    
}





