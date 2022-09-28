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
function saveToStorage() {
    $(".saveBtn9").on('click', function () {
        localStorage.setItem("timerBlock9", $('#9').val());
    });

    $(".saveBtn10").on('click', function () {
        localStorage.setItem("timerBlock10", $('#10').val());
    });

    $(".saveBtn11").on('click', function () {
        localStorage.setItem("timerBlock11", $('#11').val());
    });

    $(".saveBtn12").on('click', function () {
        localStorage.setItem("timerBlock12", $('#12').val());
    });

    $(".saveBtn13").on('click', function () {
        localStorage.setItem("timerBlock1", $('#13').val());
    });

    $(".saveBtn14").on('click', function () {
        localStorage.setItem("timerBlock2", $('#14').val());
    });

    $(".saveBtn15").on('click', function () {
        localStorage.setItem("timerBlock3", $('#15').val());
    });

    $(".saveBtn16").on('click', function () {
        localStorage.setItem("timerBlock4", $('#16').val());
    });

    $(".saveBtn17").on('click', function () {
        localStorage.setItem("timerBlock5", $('#17').val());
    });

}

saveToStorage()

// gets save info for text area from local storage and set the text in text area when page if refreshed
function renderMessage() {
    $('#9').text((localStorage.getItem("timerBlock9")));
    $('#10').text((localStorage.getItem("timerBlock10")));
    $('#11').text((localStorage.getItem("timerBlock11")));
    $('#12').text((localStorage.getItem("timerBlock12")));
    $('#13').text((localStorage.getItem("timerBlock1")));
    $('#14').text((localStorage.getItem("timerBlock2")));
    $('#15').text((localStorage.getItem("timerBlock3")));
    $('#16').text((localStorage.getItem("timerBlock4")));
    $('#17').text((localStorage.getItem("timerBlock5")));
}

renderMessage();






