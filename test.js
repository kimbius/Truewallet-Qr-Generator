const generate = require('./')
const qrcode = generate('098xxxxxxx', Math.random() * 99, String(Math.floor(Math.random() * 99999999)))
console.log(qrcode);