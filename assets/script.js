// function updates time every second.
setInterval(function () {

    // sets currents day month date and time inside jumbotron
    let currentDay = moment();
    $("#currentDay").text(currentDay.format('dddd, MMMM Do, h:mm:ss a'));

    // chages color inside text area based on current time.
    let currentTime = moment().format('HH');

    for (let i = 9; i < 18; i++) {
        if (currentTime == i) {

            //when current time adds class past and removes class present and future from textarea
            $('#' + i.toString()).removeClass('past');
            $('#' + i.toString()).removeClass('future');
            $('#' + i.toString()).addClass('present');

        } else if (currentTime < i) {

            //when current time is less than the time beside the textarea add the class future and removes 
            // past and present from textarea
            $('#' + i.toString()).removeClass('past');
            $('#' + i.toString()).removeClass('present');
            $('#' + i.toString()).addClass('future');

        } else {

            //when current time is greater than the time beside the textarea add the class past and removes 
            // future and present from textarea
            $('#' + i.toString()).removeClass('present');
            $('#' + i.toString()).removeClass('future');
            $('#' + i.toString()).addClass('past');
        }
    }

}, 1000);



//saves inputs inside text area in local storage
for (let i = 9; i < 18; i++) {
    $(".saveBtn"+i.toString()).on('click', function () {

        // console.log($('#'+i.toString()).val());
        localStorage.setItem("timerBlock"+i.toString(), ($('#'+i.toString()).val()));

    });
}


// gets save info for text area from local storage and set the text in text area when page if refreshed
for (let j = 9; j < 18; j++) {

    // console.log("timerBlock" + j.toString());
    $('#'+j.toString()).text((localStorage.getItem(("timerBlock"+j.toString()))));

}





