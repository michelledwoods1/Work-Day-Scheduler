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


// declare object for an existing element - js equivilant: var timeBlockEl = querySelector(".container");
var timeBlockEl = $(".container");

// assign existing class - js equivalent: timeblockEl.className = ("time-block");
// nb: if no second value, becomes 'get' attribute (not 'set' attribute)
timeBlockEl.addClass("time-block");

// create and assign new class - js equivalent: timeblockEl.classList.add("d-Flex");
timeBlockEl.addClass("c-Flex");


// create array of each hour of the day 9am-5pm
var hours = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
];

// create rows for each hour of the day
for (var i = 0; i < hours.length; i++) {

    // create div to hold display elements - js equivilant: var rowEl = document.createElement("div");
    var rowEl = $("<div>");
    rowEl.addClass("d-Flex");
    rowEl.addClass("row");
    // rowEl.addClass("row");
    // for testing only - need to create an if rule
    // rowEl.addClass("description");
    timeBlockEl.append(rowEl);

    // create div to display hour
    var hourDisplay = $("<div>");

    // append new element - js equivilant: timeBlockEl.appendChild(labelEl);
    rowEl.append(hourDisplay);

    //add text content - js equivalent: hoursEl.textContent = hours[i];
    hourDisplay.text(hours[i]);
    hourDisplay.attr("class", "hour");
    
    // create text area
    var textArea = $("<textArea>")
    rowEl.append(textArea);
    textArea.addClass("past");
    textArea.addClass("textarea");
    textArea.addClass("description");
   
    // create button
    saveBtn = $("<button>");
    saveBtn.attr("class", "saveBtn");
    rowEl.append(saveBtn);

    //.css sets the style attribute in html (try not to use)

    

};
//reload element.on("click", function () {
    // location.reload();
// });
