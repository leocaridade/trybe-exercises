const a = 30;
const b = -30;
const c = 100;

if (a + b + c === 180) {
    console.log(true);
} else if (a < 0 || b < 0 || c < 0) {
    console.log("ERRO")
} else {
    console.log(false);
}