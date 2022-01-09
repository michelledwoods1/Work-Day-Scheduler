
// assign body class as per css and add min vh of 100
var body = $("body");
body.addClass(".body min-vh-100");

// add moment script to display current day and date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// declare container object
var timeBlockEl = $(".container");
timeBlockEl.addClass("time-block");

//create message to display when task is saved
var messageEl = $("<h3>");
timeBlockEl.append(messageEl);
messageEl.css("font-size", "10px");
messageEl.text("test text only- to be deleted");

// create array of each hour of the day 9am-5pm
var dayStart = 09;
var dayEnd = 17;
var arr = [];

// create a row for each hour of the day
for (var i = dayStart; i < dayEnd+1; i++) {

    var containerRow = $("<div>");
    containerRow.addClass("row");
    timeBlockEl.append(containerRow);

    // create div to display hour
    var hourDisplay = $("<div>");
    hourDisplay.addClass("hour col-2")
    hourDisplay.text([i]);
    
    
    containerRow.append(hourDisplay);



    // create text area
    var textArea = $("<textArea>");
    textArea.addClass("text-area description col-8");
    // currentHour = today.format("H");
    currentHour = 12;
    console.log(currentHour);
    console.log(hourDisplay.text);

    if (currentHour === hourDisplay) {
        textArea.addClass("present");
    } else if (currentHour < hourDisplay) {
            textArea.addClass("past");
    } else {
            textArea.addClass("future");
    };
    containerRow.append(textArea);
    


    // create button
    var saveBtn = $("<button>");
    saveBtn.addClass("saveBtn col-2");
    // saveBtn.addId(hours[i]);
    saveBtn.html('<i class="far fa-save"></i>');
    containerRow.append(saveBtn);




    saveBtn.on("click", function (event) {
        event.preventDefault();
        console.log(textArea);
        messageEl.html( '<p>Appointment Added to <em class = "textred">local Storage</em></p>' );
        
        // delay
        setTimeout(function(){
            messageEl.html("")
          }, 600);

    

    });



         
    // })
    //.css sets the style attribute in html (try not to use)

};




//reload element.on("click", function () {
    // location.reload();
// });



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

// **video 1: 1.06**



// create new element, append and assign attributes all in one line - no js equivalent

