let theData = document.getElementById('blank_data');
let insideData: any[] = ['Facebook', 'Twitter', 'Instagram'];
let theContainer = <HTMLElement> document.querySelector('#container');
let singleData = document.getElementsByTagName('li');

    
console.log("Data initiated");
for(var i in insideData){
    showList(i);
}

function showList(a){
    singleData.innerHTML += '<li>' + insideData[i] + '</li>'; 
}

function adds(){
    insideData.push(document.getElementById('blank_data').value);
    console.log(insideData);
}