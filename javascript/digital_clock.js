// Digital Clock(12 hours Format)
// with Current Date
function startTime() {
    var today   // Clock
        , hr
        , min
        , sec
        , ap
        , clock;
    var months  // Date
        , days
        , curWeekDay
        , curDay
        , curMonth
        , curYear
        , date;

    // Clock
    today = new Date();
    hr = today.getHours();  // 0 ~ 23
    min = today.getMinutes();
    sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr === 0) ? 12 : hr;  // == → ===
    hr = (hr > 12) ? hr - 12 : hr;
    // Add a zero in front of numbers < 10
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    clock = hr + ":" + min + ":" + sec + " " + ap;
    document.getElementById("clock").innerHTML = clock;

    // Date
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    curWeekDay = days[today.getDay()];
    curDay = today.getDate();
    curMonth = months[today.getMonth()];
    curYear = today.getFullYear();  // getYear: Deprecated
    date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
    document.getElementById("date").innerHTML = date;

    setTimeout(startTime, 500);
}

startTime();