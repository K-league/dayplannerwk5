//array for day
var wkDay = [
    { hour: "09" },
    { hour: "10" },
    { hour: "11" },
    { hour: "12" },
    { hour: "01" },
    { hour: "02" },
    { hour: "03" },
    { hour: "04" },
    { hour: "05" },
]
//generate current date in header
function getDate() {
    var todaysDate = moment().format('MMM Do YY');
    $("#currentDay").text(todaysDate);
    console.log(todaysDate)
};
//send input to local storage
function saveInput() {
    localStorage.setItem("wkDay", JSON.stringify(wkDay));
};
function buildHour() {
    //this is where i can manipulate the planner inputs(local storage,etc)
    for (let index = 0; index < 9; index++) {
        var row = $(`<div class="row">
        <div class="hour">Hour</div>
        <div class="description">Text Input
          <input type="text" value="">
        </div>
        <div class="saveBtn">Save Button</div>
        </div>`);
        $('.time-block').append(row);
        console.log(index);
    }

}
buildHour();
//color change

//save button