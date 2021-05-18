function validateLogin() {
    if(document.loginForm.username.value == ""){
        alert("Please provde your Username!");
        document.loginForm.username.focus();
        return false;
    } else {
        var name = document.getElementById("username").value;
    }

    if(document.loginForm.password.value == "" ) {
        alert( "Please provide your password" );
        document.myForm.password.focus();
        return false;
    } else {
        alert("Hello " + name + " You have login successfully!");
        return true;
    }
}

var pet = {};

function addPet(){

    if(document.addPetForm.name.value == ""){
        alert("Please provde your pet's name!");
        document.addPetForm.name.focus();
        return false;
    } else {
        pet.name = document.addPetForm.name.value;
    }

    if(document.addPetForm.gender.value == "" ) {
        alert( "Please provide your pet gender" );
        document.addPetForm.gender.focus();
        return false;
    } else {
        pet.gender = document.addPetForm.gender.value;
    }

    if(document.getElementById('cat').checked){
        pet.type = "cat";
        catList.push(pet);
    } else if(document.getElementById('dog').checked){
        pet.type = "dog";
        dogList.push(pet);
    } else if(!document.getElementById('cat').checked && !document.getElementById('dog').checked){
        alert("Please select your pet type!");
        return false;
    }

    console.log(pet.name);
    console.log(pet.gender);
    console.log(pet.type);
    console.log(catList);
    console.log(dogList);
    alert("You have successfully add " + pet.name + " to the list!");
}

var catList = [
    { name: "Leo", gender: "Boy" },
    { name: "Lucy", gender: "Girl"},
    { name: "Milo", gender: "Girl" },
    { name: "Jack", gender: "Boy" },
    { name: "Charlie", gender: "Boy" },
    { name: "Tommy", gender: "Boy" }
];

var dogList = [
    { name: "Max", gender: "Boy" },
    { name: "Bella", gender: "Girl"},
    { name: "Lucy", gender: "Girl" },
    { name: "Buddy", gender: "Boy" },
    { name: "Rocky", gender: "Boy" },
    { name: "Duke", gender: "Boy" },
    { name: "Sophie", gender: "Girl"},
    { name: "Maggie", gender: "Girl"},
];

function displayCatList(){
    var catTable = document.getElementById("catTable");

    var tbody = document.createElement("tbody");
    catTable.appendChild(tbody);

    orderArray.forEach(function(catList) {
    var row = document.createElement("tr");
    catList.forEach(function(cat) {
        var cell = document.createElement("td");
        cell.textContent = cat;
        row.appendChild(cell);
    });
    tbody.appendChild(row);
    });
}

function makeTableHead(table, data){
    let thead = table.createTHead();
    let row = thead.insertRow();
    for(let key of data){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}


function makeTable(table, data){
    for(let element of data){
        let row = table.insertRow();
        for(key in element){
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table1 = document.getElementById("catTable");
let data1 = Object.keys(catList[0]);
makeTableHead(table1, data1);
makeTable(table1, catList);


document.addEventListener('DOMContentLoaded', () => {
    const messageToggle = document.querySelector('.toggleMessage');
    const elementToToggle = document.getElementById('toggleElement');    
    
    messageToggle.addEventListener('mousedown', () => {
    elementToToggle.classList.toggle('hide');
    messageToggle.classList.toggle('hide');
    });
});


//https://www.valentinog.com/blog/html-table/