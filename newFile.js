if (Number.isInteger(input)) {
    alert(`${input} is a number`);
}
else if (Number.isInteger(input) == false) {
    let input = String(input);
    let check1 = input.toUpperCase();
    if (check1 == input) {
        alert(`${input} is an uppercase letter.`);
    }
    else if (check1 != input) {
        alert(`${input} is a lowercase letter`);
    }
}

else {
    alert(`${input} is not a letter or a number`);
}
