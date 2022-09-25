const { crc16xmodem } = require('crc');

const cal_secret = (data) => {
    let value = crc16xmodem(`${data}6304`, 0xFFFF).toString(16).padStart(4, '0')
    return `63${String(value.length).padStart(2, '0')}${value}`.toUpperCase()
}

const __TRUEWALLET_QR_TEMPLATE = "00020101021229390016A000000677010111031514000{phonenumber}5802TH54{amount_length}{amount}530376481{hex_length}{hex_message}"

/**
* @param {string} [phoneNumber]
* @param {number} [amount]
* @param {string} [message]
*/
function generate(phoneNumber = "", amount = 0, message = "") {
    const _amount = amount.toFixed(2)
    const hexLists = [...String(message)]
    const hexLengthX4 = String(hexLists.length * 4).padStart(2, '0')
    const hexMessage = hexLists.map(str => str.charCodeAt(0).toString(16).padStart(4, '0')).join("")
    const _payload = __TRUEWALLET_QR_TEMPLATE.replace("{phonenumber}", phoneNumber).replace("{amount_length}", String(_amount.length).padStart(2, '0')).replace("{amount}", _amount).replace("{hex_message}", hexMessage).replace("{hex_length}", hexLengthX4)
    return _payload.toUpperCase() + cal_secret(_payload)
}

module.exports = generate