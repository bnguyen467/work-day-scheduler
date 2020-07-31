// Current day and time
setInterval(() => {
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY, h:mm:ss a'));
}, 1000);

// When save button is clicked
$(".saveBtn").click(function() {
    let time = $(this).parents().attr("id");
    let value = $(this).siblings(".description").val();

    localStorage.setItem(time, value);
})

// Show task when the page refresh
for(i = 8; i <= 17; i++)
    $(`#${i} .description`).val(localStorage.getItem(i));

// Change color for each time block
let currentHour = moment().hour();
$(".time-block").each(function () {
    let timeBlock = parseInt($(this).attr("id"));

    if(timeBlock === currentHour)
        $(this).addClass("present");
    else if (timeBlock > currentHour)
        $(this).addClass("future");
    else
        $(this).addClass("past");
})


