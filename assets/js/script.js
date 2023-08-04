// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. 
var eventSave = $('.saveBtn');
var savedTime = $('.hour');
var userInput;
var userTime;
var todayDate = dayjs().format('dddd');
var todayName = dayjs();
var compareTime = dayjs().format('hh:mm:ss A');
var hourNine = $('#hour-9');
var hourTen = $('#hour-10');
var hourEleven = $('#hour-11');
var hourTwelve = $('#hour-12');
var hourOne = $('#hour-13');
var hourTwo = $('#hour-14');
var hourThree = $('#hour-15');
var hourFour = $('#hour-16');
var hourFive = $('#hour-17');
var currentTime = new Date();
var currentHour = currentTime.getHours();

$(function () {
    // 
    eventSave.on('click', function () { //when the save is clicked then user info is saved 
        userInput = $(this).siblings(".description").val();
        console.log(userInput);//using console.log helped in determining if description was being read
        userTime = $(this).siblings(savedTime).text();
        console.log(userTime);//used to help determine output from userTime
        localStorage.setItem(userTime, JSON.stringify(userInput));
        console.log(localStorage);//checks if local storage contains description
    });
    //
    //

    // this function assinged the different future, present, and past classes
    $('.time-block').each(function () {
        var timeBlock = parseInt($(this).attr("id").split("-")[1]);
        if (timeBlock < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");

        }
        
        else if (timeBlock > currentHour) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
    

    //
    // 
    function saveLocal() {
        //this part sets up the local storage names as well as assigned the values user input into the values
        //this is repeated for all hours from 9am to 5pm
        //Method was implemented after
        var nineInMorning = localStorage.getItem("9AM");
        hourNine.val(nineInMorning);

        var tenInMorning = localStorage.getItem("10AM");
        hourTen.val(tenInMorning);

        var elevenInMorning = localStorage.getItem("11AM");
        hourEleven.val(elevenInMorning);

        var twelveInAfternoon = localStorage.getItem("12PM");
        hourTwelve.val(twelveInAfternoon);

        var oneInAfternoon = localStorage.getItem("1PM");
        hourOne.val(oneInAfternoon);

        var twoInAfternoon = localStorage.getItem("2PM");
        hourTwo.val(twoInAfternoon);

        var threeInAfternoon = localStorage.getItem("3PM");
        hourThree.val(threeInAfternoon);

        var fourInAfternoon = localStorage.getItem("4PM");
        hourFour.val(fourInAfternoon);

        var fiveInAfternoon = localStorage.getItem("5PM");
        hourFive.val(fiveInAfternoon);

    }
    //
    //display the current date in the header of the page.
    var currDate = setInterval(function () {
        $('#currentDay').html(todayDate + ' ' + todayName.format('MMMM YYYY'));
    }, 100);
});