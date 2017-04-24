var dogfoodRequest = new XMLHttpRequest();

dogfoodRequest.open("GET", "dogfood.json");

dogfoodRequest.addEventListener("load", dogfoodRequestLoadComplete);
dogfoodRequest.addEventListener("error", dogfoodRequestError);


function dogfoodRequestLoadComplete(event){
    console.log("COOL! IT LOADED!");
    var dogfood = JSON.parse(event.target.responseText);
    //console.log("dogfood", dogfood);
    showDogFood(dogfood);
}

function dogfoodRequestError(event){
    console.log("OH NO SOMETHING HAPPENED", event);
}

function showDogFood(dogfood){
    var dogfoodDiv = document.getElementById("dogfood-container");
    var dogfoodData = "";
    for (var i=0;i<dogfood.dog_brands.length;i++){
        for (var k=0;k<dogfood.dog_brands[i].types.length;k++){
            for (var j=0; j<dogfood.dog_brands[i].types[k].volumes.length;j++){
            dogfoodData += `<article class="">`;
            dogfoodData += `<h2 class="food-name">${dogfood.dog_brands[i].name}</h2> `;
            dogfoodData += `<p class="food-info"> <span class="food-type">${dogfood.dog_brands[i].types[k].type}</span> - `;
            dogfoodData += `<span class="food-name"> ${dogfood.dog_brands[i].types[k].volumes[j].name} : </span>`;
            dogfoodData += `<span class="food-price"> ${dogfood.dog_brands[i].types[k].volumes[j].price} </span></p>`
            dogfoodData += `</article>`
            }
        }
    }
    dogfoodDiv.innerHTML = dogfoodData;
 };

dogfoodRequest.send();



var catfoodRequest = new XMLHttpRequest();

catfoodRequest.open("GET", "catfood.json");

catfoodRequest.addEventListener("load", catfoodRequestLoadComplete);
catfoodRequest.addEventListener("error", catfoodRequestError);


function catfoodRequestLoadComplete(event){
    console.log("COOL! IT LOADED!");
    var catfood = JSON.parse(event.target.responseText);
    //console.log("dogfood", dogfood);
    showCatFood(catfood);
}

function catfoodRequestError(event){
    console.log("OH NO SOMETHING HAPPENED", event);
}

function showCatFood(catfood){
    var catfoodDiv = document.getElementById("catfood-container");
    var catfoodData = "";

    for (var i=0;i<catfood.cat_brands.length;i++){
        for (var k=0;k<catfood.cat_brands[i].types.length;k++){
            for (var j=0; j<catfood.cat_brands[i].types[k].volumes.length;j++){
            catfoodData += `<article class="">`;
            catfoodData += `<h2>${catfood.cat_brands[i].name} </h2> `;
            catfoodData += `<p> <span>${catfood.cat_brands[i].types[k].type} </span> -  `;
            catfoodData += `<span> ${catfood.cat_brands[i].types[k].volumes[j].name} </span> `;
            catfoodData += `<span> ${catfood.cat_brands[i].types[k].volumes[j].price} </span> </p>`
            catfoodData += `</article>`
            }
        }
    }

    catfoodDiv.innerHTML = catfoodData;
 };

catfoodRequest.send();



































