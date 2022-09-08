import {number_card_format} from './helper.js';

let cardholder_name = document.getElementById('cardholder_name');
let label_month_exp = document.getElementById('label_month_exp');
let label_year_exp = document.getElementById('label_year_exp');
let exp_date_mm = document.getElementById('exp_date_mm');
let exp_date_yy = document.getElementById('exp_date_yy');
let card_number = document.getElementById('card_number');
let label_card_number = document.getElementById('label_card_number');
let label_cvc = document.getElementById('label_cvc');
let cvc = document.getElementById('input__cvc');
let btn_confirm = document.getElementById('btn_confirm');
let form_card_data = document.getElementById('form_card_data');

const reg_only_number = new RegExp('^[0-9]+$');

let set_cardholder = () => {
    let v = cardholder_name.value;    
    document.getElementById('label_cardholder_name').innerText = v;
}

let set_card_number = (e) => {    
    let number_card = number_card_format(card_number.value);
    card_number.value = number_card;
    label_card_number.innerHTML = number_card;
}

let set_exp_date_month = () =>{
    let month = exp_date_mm.value;
    label_month_exp.innerHTML = month;
}

let set_exp_date_year = () =>{
    let year = exp_date_yy.value;
    label_year_exp.innerHTML = year;
}

let set_cvc = () => {
    let val = cvc.value;
    label_cvc.innerHTML = val;
}

let confirm_data = () => {
    

    fetch('./confirm.html')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {        
        form_card_data.innerHTML = html;
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });     
}

cardholder_name.addEventListener('keyup',set_cardholder);
card_number.addEventListener('keyup',set_card_number);
exp_date_mm.addEventListener('keyup',set_exp_date_month);
exp_date_yy.addEventListener('keyup',set_exp_date_year);
cvc.addEventListener('keyup',set_cvc);
btn_confirm.addEventListener('click',confirm_data);
