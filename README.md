# Truewallet Qr Generator

## Example for use

```js
const generate = require('./')
const qrcode = generate(
    '098xxxxxxx', // เบอร์โทรศัพท์ผู้รับเงิน
    Math.random() * 99, // จำนวนเงิน
    String(Math.floor(Math.random() * 99999999)) // ข้อความตอนทำธุรกรรม
)

console.log(qrcode); // 00020101021229390016A000000677010111031514000098XXXXXXX5802TH540518.1253037648132003300340039003200360037003200326304C812
```