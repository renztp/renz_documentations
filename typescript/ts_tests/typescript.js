var theData = document.getElementById('blank_data');
var insideData = ['Facebook', 'Twitter', 'Instagram'];
var theContainer = document.querySelector('#container');
// var singleData = document.getElementById("aList").getElementsByTagName("li");
console.log("Data initiated");
for (var i in insideData) {
    showList(i);
}
 



function showList(a) {
    theContainer.innerHTML += '<li id="aList">' + insideData[i] + '<span class="goRight" onclick="removes();">x</span></li>';
}

function adds() {
    var lastNum;
    insideData.push(blank_data.value);
    for(var i in insideData){
        lastNum = i;
    }
    theContainer.innerHTML += '<li id="aList">' + insideData[lastNum] + '<span class="goRight" removes();>x</span></li>';
    console.log(insideData);
}

function something(){
    console.log("Hello world");
    if(x != 25){

    }
}