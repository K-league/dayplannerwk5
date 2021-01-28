//array for day
var wkDay = [
    {hour: "09"},
    {hour: "10"},
    {hour: "11"},
    {hour: "12"},
    {hour: "01"},
    {hour: "02"},
    {hour: "03"},
    {hour: "04"},
    {hour: "05"},
]
//generate current date in header
function getDate() {
    var todaysDate = moment().format('MMM Do YY');
    $("#currentDay").text(todaysDate);
};
//send input to local storage
function saveInput() {
    localStorage.setItem("wkDay", JSON.stringify(wkDay));
};
//color change

//save button