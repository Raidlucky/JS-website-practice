let password = 'Burger23!';
let salt = '12345678992'
let converted = []
let bits = 0
for (i=0;i < password.length;i++) { //converting password to binary
    converted.push(password[i].charCodeAt(0).toString(2).padEnd(8, '0')); //using padEnd to organize strings into 8 digits
    bits = bits + converted[i].length;
}
console.log(bits);

for (i=0;converted.length < 12;i++) {
    converted.push(salt[i].charCodeAt(0).toString(2).padEnd(8, '0'));
    bits = bits + converted[i].length;
}
console.log(bits);

converted.push("10000000");
for (i=0;bits < 496;i++) {
    converted.push("00000000");
    bits = bits + converted[i].length;
}
bits = bits + 16;
converted.push("01100000");
console.log(bits, converted); //padded input of 512 bits
let sorted = [];

while (converted.length > 0) {
    sorted.push(converted.splice(0 , 4))
}

let hex = "";
/*for (i=0;i < sorted.length;i++) {
    console.log(parseInt(sorted[i].join(''), 2).toString(16).toUpperCase())
    hex = hex.concat(parseInt(sorted[i].join(''), 2).toString(16).toUpperCase());
}*/

//above is the orginal way I was going to do this

console.log(hex, hex.length, 'final')

async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    console.log(hashHex);
}

sha256(password)