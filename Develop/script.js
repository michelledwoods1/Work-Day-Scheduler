// assign body class as per css and add min vh of 100
var body = $("body");
body.addClass(".body min-vh-100");

// add moment script to display current day and date
var today = moment();

$("#currentDay").text(today.format("dddd, MMMM Do"));

var currentHour = today.format("HH");
console.log("Current Hour is " + currentHour);


// declare container object
var timeBlockEl = $(".container");
timeBlockEl.addClass("time-block");

//create message to display when task is saved
var messageEl = $("<h3>");
timeBlockEl.append(messageEl);
messageEl.css("font-size", "12px");


// create array of each hour of the day 9am-5pm
var dayStart = 09;
var dayEnd = 17;

// create a row for each hour of the day, with 3 columns
for (var i = dayStart; i < dayEnd + 1; i++) {
    var containerRow = $("<div>");
    containerRow.addClass("row");
    timeBlockEl.append(containerRow);

    // column 1 to display hour of the day
    var displayHour = $("<div>");;
    displayHour.addClass("hour col-2");
    divTime = moment([i],"HH").format("h a");
    displayHour.text(divTime);
    containerRow.append(displayHour);

    // column 2 to create text area
    var textArea = $("<textArea>");
    textArea.attr("id", "text-" + i);
    textArea.addClass("text-area description col-8");

    // create variable to hold each hour of the day to use in fuction only
    divTime = moment([i],"HH").format("HH");

    // check if acutal time is within an hour of the day on the schedule and change background color accordingly
    if (parseInt(divTime) === parseInt(currentHour)) {
        textArea.addClass("present");
    } else if (parseInt(divTime) < parseInt(currentHour)) {
            textArea.addClass("past");
    } else {
            textArea.addClass("future");
    };
    textArea.css("color", "black");
    containerRow.append(textArea);

    // column 3 for button
    var saveBtn = $("<button>");
    saveBtn.addClass("saveBtn col-2");
    saveBtn.attr("data-index", i);
    saveBtn.html('<i class="far fa-save"></i>');
    containerRow.append(saveBtn);

    // add click event to button
    saveBtn.on("click", function (event) {
        event.preventDefault();
        messageEl.html( '<p>Appointment Added to <em class = "textred">local Storage</em></p>' );

         // delay clearing of message, when button is clicked
        setTimeout(function(){
            messageEl.html("")
        }, 800);

        //create variable for setItem information                
        var textLS =  $(this).siblings(".text-area").val();
        var timeLS = $(this).attr("data-index");
        
        // set localStorage
        localStorage.setItem(timeLS, textLS);
        });
    };

    // recall local storage for each hour of the day
    for (var i = dayStart; i <= dayEnd; i++) {
        if (localStorage.getItem(i)) {
            var timeLSget = localStorage.getItem([i]);
            console.log("This is TEST - local storage i recalled via for loop : " + localStorage.getItem(i))
            $("#text-" +i).val(localStorage.getItem(i));
        };
    };


// description input saved to local storage, cleared and message confirming it has been saved to local storage then disappear
// already in css: color to represent past present and future
// study structure of html
// time blocks to be children of div class "container"
// html structure text area; button & div
// separate each row into its own hour 
// traverse DOM to grab values of text area and id's
// moment js
// depending on the hour - add or remove classes to represent the current or past time
// refresh - values remain (get from local storage)
// current day to display at the top of the calendar
// when timeblock is clicked, event can be entered and saved for that timeblock
