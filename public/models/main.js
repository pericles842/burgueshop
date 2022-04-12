
var grams_meat = 100;
var grams_cheese = 100;
var grams_tomatoe = 100;
var grams_lettuce = 100;
var grams_pickles = 100;
var grams_cebolla = 100;
var grams_egg = 100;
var grams_chicken = 100;

let button_cebolla = document.getElementById('button_cebolla')
button_cebolla.addEventListener('click',add_cebolla)

var clic = 1;
function add_cebolla(){
    if(clic == 1){
        document.getElementById('negative_button_cebolla').style.visibility = 'visible';
        document.getElementById('cebolla_gramos').style.visibility = 'visible';
        console.log('entra qui')
        clic = clic + 1;
    }else if (clic == 2){
        grams_cebolla = grams_cebolla + 50
        console.log(grams_cebolla)
        clic = 2;
        }
}
let negative_button_cebolla = document.getElementById('negative_button_cebolla')
negative_button_cebolla.addEventListener('click',remove_cebolla)
function remove_cebolla(){
    
    console.log(grams_cebolla)
}
