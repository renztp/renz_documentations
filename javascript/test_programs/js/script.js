// let Day = /\w/g;
// let theDate = "Tuesday 4124";
// let result = theDate.match(Day);
// function showThis() : void {
//     console.log(result);
// }
var theDate = new Date();
var Month = theDate.getMonth();
var year = theDate.getFullYear();
var days = ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday',
    'Saturday'];
var months = ['March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December', 'January'];
var Day = theDate.getDay();
function showThis() {
    console.log(Day + ', ' + months[Month] + ', ' + year);
}
