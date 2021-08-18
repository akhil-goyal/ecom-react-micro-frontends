import faker from 'faker';

let cartText = `You have ${faker.datatype.number()} items in your cart.`;

document.querySelector('#cart-dev').innerHTML = cartText;