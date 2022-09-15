const number_card_format = (value) => {
    let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    let matches = v.match(/\d{4,16}/g);
    let match = matches && matches[0] || ''
    let parts = []

    for (let i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4))
    }

    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}
const valid  = {
    card_number: value =>{
        let reg_exp = new RegExp(/\d{4,16}/g);
        if(!reg_exp.test(value)){           
            return false;
        }
        return true;
    },
    only_number: value => {
        let reg_exp = new RegExp(/^\d+$/);
        if(!reg_exp.test(value)){
            return false;
        }
        return true;
    },
}
const serialize = formElement => {
    const values = {};
    const inputs = formElement.elements;
    for (let i = 0; i < inputs.length-1; i++) {        
        values[inputs[i].name] = inputs[i].value;
    }
    return values;
}


export {valid,number_card_format,serialize};
