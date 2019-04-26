function isPrime (int) {
    if (int == null) {
        return "Du lieu vao la null"
    } else if (Number.isInteger(int)) {
        for (let i = 2; i <= int - 1; i++) {
            if (int % i === 0) {
                return false;
            } else return true;
        }
    }else return "Du lieu vao khong phai Integer";
}
console.log(isPrime(12));
console.log(isPrime(17));
