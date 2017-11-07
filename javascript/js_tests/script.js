let ages = [5, 10, 25, 31];

function findAge(age){
    return age >= 25;
}

document.getElementById('thisId').innerHTML = ages.find(findAge);