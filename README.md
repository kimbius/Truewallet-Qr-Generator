# Truewallet Qr Generator

## ติดตั้ง

```cmd
npm install truewallet-qrcode-generator
```


## ตัวอย่างการใช้งาน

```js
const generate = require('truewallet-qrcode-generator')
const qrcode = generate(
    '098xxxxxxx', // เบอร์โทรศัพท์ผู้รับเงิน
    50, // จำนวนเงิน
    "สวัสดีครับผมมาโอนเงิน" // ข้อความตอนทำธุรกรรม
)

console.log(qrcode); // 00020101021229390016A000000677010111031514000098XXXXXXX5802TH540550.00530376481840E2A0E270E310E2A0E140E350E040E230E310E1A0E1C0E210E210E320E420E2D0E190E400E070E340E196304DC8A
```