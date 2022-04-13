//variables gramos 
var grams_meat = 100;
var grams_cheese = 100;
var grams_tomatoe = 100;
var grams_lettuce = 100;//lechuga
var grams_pickles = 100;//pepinillos
var grams_cebolla = 100;
var grams_egg = 100;
var grams_chicken = 100;

var clic_cebolla = 1;
var clic_meat = 1;
var clic_cheese = 1;
var clic_tomatoe = 1;
var clic_lettuce = 1;
var clic_pickles = 1;
var clic_egg = 1;
var clic_chicken = 1;

var total_count = 0;

let button_chicken = document.getElementById('button_chicken')
button_chicken.addEventListener('click',add_chicken)


function add_chicken(){
    let box_chicken_gramos = document.getElementById('box_chicken_gramos')
    if (grams_chicken == 50) {
        document.getElementById('negative_button_chicken').style.visibility = 'visible';
        document.getElementById('box_chicken_gramos').style.visibility = 'visible';
    }
    if(clic_chicken == 1){
        document.getElementById('negative_button_chicken').style.visibility = 'visible';
        document.getElementById('box_chicken_gramos').style.visibility = 'visible';
        console.log('entra qui')
        clic_chicken = clic_chicken + 1;
    }else if (clic_chicken == 2){
        if (grams_chicken < 200) {
                grams_chicken = grams_chicken + 50;
                box_chicken_gramos.innerHTML = grams_chicken + "g"
            }
        console.log(grams_chicken)
        clic_chicken = 2;
        }
}

let negative_button_chicken = document.getElementById('negative_button_chicken')
negative_button_chicken.addEventListener('click',remove_chicken)

function remove_chicken(){
    if(grams_chicken > 90){
            grams_chicken = grams_chicken - 50;
            box_chicken_gramos.innerHTML = grams_chicken + "g"
            if (grams_chicken < 90) {
                document.getElementById('negative_button_chicken').style.visibility = 'hidden';
                document.getElementById('box_chicken_gramos').style.visibility = 'hidden';
            }
        }
    console.log(grams_chicken)
}


let button_egg = document.getElementById('button_egg')
button_egg.addEventListener('click',add_egg)


function add_egg(){
    let box_egg_gramos = document.getElementById('box_egg_gramos')
    if (grams_egg == 50) {
        document.getElementById('negative_button_egg').style.visibility = 'visible';
        document.getElementById('box_egg_gramos').style.visibility = 'visible';
    }
    if(clic_egg == 1){
        document.getElementById('negative_button_egg').style.visibility = 'visible';
        document.getElementById('box_egg_gramos').style.visibility = 'visible';
        console.log('entra qui')
        clic_egg = clic_egg + 1;
    }else if (clic_egg == 2){
        if (grams_egg < 200) {
                grams_egg = grams_egg + 50;
                box_egg_gramos.innerHTML = grams_egg + "g"
            }
        console.log(grams_egg)
        clic_egg = 2;
        }
}

let negative_button_egg = document.getElementById('negative_button_egg')
negative_button_egg.addEventListener('click',remove_egg)

function remove_egg(){
    if(grams_egg > 90){
            grams_egg = grams_egg - 50;
            box_egg_gramos.innerHTML = grams_egg + "g"
            if (grams_egg < 90) {
                document.getElementById('negative_button_egg').style.visibility = 'hidden';
                document.getElementById('box_egg_gramos').style.visibility = 'hidden';
            }
        }
    console.log(grams_egg)
}



let button_tomatoe = document.getElementById('button_tomatoe')
button_tomatoe.addEventListener('click',add_tomatoe)


function add_tomatoe(){
    let box_tomatoe_gramos = document.getElementById('box_tomatoe_gramos')
    if (grams_tomatoe == 80) {
        document.getElementById('negative_button_tomatoe').style.visibility = 'visible';
        document.getElementById('box_tomatoe_gramos').style.visibility = 'visible';
    }
    if(clic_tomatoe == 1){
        document.getElementById('negative_button_tomatoe').style.visibility = 'visible';
        document.getElementById('box_tomatoe_gramos').style.visibility = 'visible';
        console.log('entra qui')
        clic_tomatoe = clic_tomatoe + 1;
    }else if (clic_tomatoe == 2){
        if (grams_tomatoe < 140) {
                grams_tomatoe = grams_tomatoe + 20;
                box_tomatoe_gramos.innerHTML = grams_tomatoe + "g"
            }
        console.log(grams_tomatoe)
        clic_tomatoe = 2;
        }
}

let negative_button_tomatoe = document.getElementById('negative_button_tomatoe')
negative_button_tomatoe.addEventListener('click',remove_tomatoe)

function remove_tomatoe(){
    if(grams_tomatoe > 90){
            grams_tomatoe = grams_tomatoe - 20;
            box_tomatoe_gramos.innerHTML = grams_tomatoe + "g"
            if (grams_tomatoe < 90) {
                document.getElementById('negative_button_tomatoe').style.visibility = 'hidden';
                document.getElementById('box_tomatoe_gramos').style.visibility = 'hidden';
            }
        }
    console.log(grams_tomatoe)
}


let button_pickles = document.getElementById('button_pickles')
button_pickles.addEventListener('click',add_pickles)


function add_pickles(){
    let box_pickles_gramos = document.getElementById('box_pickles_gramos')
    if (grams_pickles == 50) {
        document.getElementById('negative_button_pickles').style.visibility = 'visible';
        document.getElementById('box_pickles_gramos').style.visibility = 'visible';
    }
    if(clic_pickles == 1){
        document.getElementById('negative_button_pickles').style.visibility = 'visible';
        document.getElementById('box_pickles_gramos').style.visibility = 'visible';
        console.log('entra qui')
        clic_pickles = clic_pickles + 1;
    }else if (clic_pickles == 2){
        if (grams_pickles < 200) {
                grams_pickles = grams_pickles + 50;
                box_pickles_gramos.innerHTML = grams_pickles + "g"
            }
        console.log(grams_pickles)
        clic_pickles = 2;
        }
}

let negative_button_pickles = document.getElementById('negative_button_pickles')
negative_button_pickles.addEventListener('click',remove_pickles)

function remove_pickles(){
    if(grams_pickles > 90){
            grams_pickles = grams_pickles - 50;
            box_pickles_gramos.innerHTML = grams_pickles + "g"
            if (grams_pickles < 90) {
                document.getElementById('negative_button_pickles').style.visibility = 'hidden';
                document.getElementById('box_pickles_gramos').style.visibility = 'hidden';
            }
        }
    console.log(grams_pickles)
}


let button_lettuce = document.getElementById('button_lettuce')
button_lettuce.addEventListener('click',add_lettuce)


function add_lettuce(){
    let box_lettuce_gramos = document.getElementById('box_lettuce_gramos')
    if (grams_lettuce == 95) {
        document.getElementById('negative_button_lettuce').style.visibility = 'visible';
        document.getElementById('box_lettuce_gramos').style.visibility = 'visible';
    }
    if(clic_lettuce == 1){
        document.getElementById('negative_button_lettuce').style.visibility = 'visible';
        document.getElementById('box_lettuce_gramos').style.visibility = 'visible';
        console.log('entra qui')
        clic_lettuce = clic_lettuce + 1;
    }else if (clic_lettuce == 2){
        if (grams_lettuce < 110) {
                grams_lettuce = grams_lettuce + 5;
                box_lettuce_gramos.innerHTML = grams_lettuce + "g"
            }
        console.log(grams_lettuce)
        clic_lettuce = 2;
        }
}

let negative_button_lettuce = document.getElementById('negative_button_lettuce')
negative_button_lettuce.addEventListener('click',remove_lettuce)

function remove_lettuce(){
    if(grams_lettuce > 96){
            grams_lettuce = grams_lettuce - 5;
            box_lettuce_gramos.innerHTML = grams_lettuce + "g"
            if (grams_lettuce < 96) {
                document.getElementById('negative_button_lettuce').style.visibility = 'hidden';
                document.getElementById('box_lettuce_gramos').style.visibility = 'hidden';
            }
        }
    console.log(grams_lettuce)
}


let button_cheese = document.getElementById('button_cheese')
button_cheese.addEventListener('click',add_cheese)


function add_cheese(){
    let box_cheese_gramos = document.getElementById('box_cheese_gramos')
    if (grams_cheese == 70) {
        document.getElementById('negative_button_cheese').style.visibility = 'visible';
        document.getElementById('box_cheese_gramos').style.visibility = 'visible';
    }
    if(clic_cheese == 1){
        document.getElementById('negative_button_cheese').style.visibility = 'visible';
        document.getElementById('box_cheese_gramos').style.visibility = 'visible';
        console.log('entra qui')
        clic_cheese = clic_cheese + 1;
    }else if (clic_cheese == 2){
        if (grams_cheese < 160) {
                grams_cheese = grams_cheese + 30;
                box_cheese_gramos.innerHTML = grams_cheese + "g"
            }
        console.log(grams_cheese)
        clic_cheese = 2;
        }
}

let negative_button_cheese = document.getElementById('negative_button_cheese')
negative_button_cheese.addEventListener('click',remove_cheese)

function remove_cheese(){
    if(grams_cheese > 90){
            grams_cheese = grams_cheese - 30;
            box_cheese_gramos.innerHTML = grams_cheese + "g"
            if (grams_cheese < 90) {
                document.getElementById('negative_button_cheese').style.visibility = 'hidden';
                document.getElementById('box_cheese_gramos').style.visibility = 'hidden';
            }
        }
    console.log(grams_cheese)
}


let button_meat = document.getElementById('button_meat')
button_meat.addEventListener('click',add_meat)


function add_meat(){
    let box_meat_gramos = document.getElementById('box_meat_gramos')
    if (grams_meat == 50) {
        document.getElementById('negative_button_meat').style.visibility = 'visible';
        document.getElementById('box_meat_gramos').style.visibility = 'visible';
    }
    if(clic_meat == 1){
        document.getElementById('negative_button_meat').style.visibility = 'visible';
        document.getElementById('box_meat_gramos').style.visibility = 'visible';
        console.log('entra qui')
        clic_meat = clic_meat + 1;
    }else if (clic_meat == 2){
        if (grams_meat < 200) {
                grams_meat = grams_meat + 50;
                box_meat_gramos.innerHTML = grams_meat + "g"
            }
        console.log(grams_meat)
        clic_meat = 2;
        }
}

let negative_button_meat = document.getElementById('negative_button_meat')
negative_button_meat.addEventListener('click',remove_meat)

function remove_meat(){
    if(grams_meat > 90){
            grams_meat = grams_meat - 50;
            box_meat_gramos.innerHTML = grams_meat + "g"
            if (grams_meat < 90) {
                document.getElementById('negative_button_meat').style.visibility = 'hidden';
                document.getElementById('box_meat_gramos').style.visibility = 'hidden';
            }
        }
    console.log(grams_meat)
}

let button_cebolla = document.getElementById('button_cebolla')
button_cebolla.addEventListener('click',add_cebolla)


function add_cebolla(){
    let box_cebolla_gramos = document.getElementById('box_cebolla_gramos')
    if (grams_cebolla == 50) {
        document.getElementById('negative_button_cebolla').style.visibility = 'visible';
        document.getElementById('box_cebolla_gramos').style.visibility = 'visible';
    }
    if(clic_cebolla == 1){
        document.getElementById('negative_button_cebolla').style.visibility = 'visible';
        document.getElementById('box_cebolla_gramos').style.visibility = 'visible';
        console.log('entra qui')
        clic_cebolla = clic_cebolla + 1;
    }else if (clic_cebolla == 2){
        if (grams_cebolla < 200) {
                grams_cebolla = grams_cebolla + 50;
                box_cebolla_gramos.innerHTML = grams_cebolla + "g"
            }
        console.log(grams_cebolla)
        clic_cebolla = 2;
        }
}
let negative_button_cebolla = document.getElementById('negative_button_cebolla')
negative_button_cebolla.addEventListener('click',remove_cebolla)

function remove_cebolla(){
    if(grams_cebolla > 90){
            grams_cebolla = grams_cebolla - 50;
            box_cebolla_gramos.innerHTML = grams_cebolla + "g"
            if (grams_cebolla < 90) {
                document.getElementById('negative_button_cebolla').style.visibility = 'hidden';
                document.getElementById('box_cebolla_gramos').style.visibility = 'hidden';
            }
        }
    console.log(grams_cebolla)
}
let buy_button_one = document.getElementById('buy_button_one')
buy_button_one.addEventListener('click',buy_count)
function buy_count() {
    let total = document.getElementById('total')

    if (grams_meat == 100) {
        total_count = total_count + 0.50;
        total.innerHTML = total_count + '$' 
    }else if(grams_meat == 150){
        total_count = total_count + 1.00;
        total.innerHTML = total_count + '$'
    }else if(grams_meat == 200){
        total_count = total_count + 1.50;
        total.innerHTML = total_count + '$'
    }
}

function prueba() {
    console.log('actual carne ' + grams_meat);
    console.log('actual queso ' + grams_cheese);
    console.log('actual lechuga' + grams_lettuce);
}

