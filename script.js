function calculateFactorial() {
    let num = parseInt(document.getElementById("number").value);

    if (isNaN(num) || num < 0) {
        document.getElementById("result").innerText =
            "Please enter a valid non-negative number.";
        return;
    }

    let factorial = 1;

    // Loop to calculate factorial
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    document.getElementById("result").innerText =
        `Factorial of ${num} is ${factorial}`;
}
