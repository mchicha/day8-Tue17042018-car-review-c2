
// create a global array called cars.
var cars = [];

// function that check if the array is empty
var isEmpty = function(str) {
    return (!str || 0 === str.length || !str.trim);
}
//function definition
var addCar = function(){
    let car = {};
    // give us the value of the car name input
    car.name = $('.car-input').val();
    // give us the value of the car manufacturer input
    car.manufacturer = $('.manufacturer-input').val();
    // give us the value of the car rate input
    car.rate = $( ".rate-input" ).val();
    if (!(isEmpty(car.name)) || !(isEmpty(car.manufacturer)))
    {
        // Add a new value in the cars array
        cars.push(car);
        // Invoke renderCars inside your click handler just below
        // where you're invoking the addCar function.
        renderCars();
        // Clears the form 
        // clear the car-input placeholder
        $('.car-input').val("");
        // clear the manufacturer-input placeholder
        $('.manufacturer-input').val("");
         // clear the rate-input placeholder
        $('.rate-input').val("");
    }
};

var sortCarByRate = function(){
    debugger;
    cars.sort(function(a,b){return a.rate -b.rate});
    renderCars();
};


var renderCars = function(){
    // 1 - Empty the cars <ul> so that it no longer has any <li> elements
    $('.cars-list').empty();
    // 2 - Loop through the cars array,
    // inside the loop append the cars to the cars <ul>
    var liValue = "";
    for (var i=0; i < cars.length; i++) {
        var liValue = "<li>" + cars[i].name + " - " + cars[i].manufacturer + " - "  + cars[i].rate + "</li>";
        $('.cars-list').append(liValue);
    }
};

//addCar() === invocation
$('.post-car').click(addCar);
$('.sortByRate-car').click(sortCarByRate);

