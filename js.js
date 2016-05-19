var num = prompt("Enter your phone number, please include the dashes!", "phone number");

if (num.charAt(3) && num.charAt(7) === "-") {
    alert("Sweet!, Thats a legit number");
} else {
    alert("Nope, can't fool me, thats not a number");
}

var bdate = prompt("Enter your date of birth, mm/dd/yy", "xx/xx/xx");

if (bdate.charAt(2) && bdate.charAt(5) === "/" && bdate.length === 8) {
    alert("Sweet!, Thats a legit date of birth");
} else {
    alert("Nope, can't fool me, thats not your date of birth!");
}

var pcode = prompt("Enter your postal code, (xxxxx OR xxxxx-xxxx)", "postal code");

if (pcode.charAt(5) === "-" || pcode.length === "5") {
    alert("Sweet!, Thats a legit post code!");
} else {
    alert("Nope, can't fool me, thats not a postal code!");
}

var state = prompt("Enter your State abreviation", "2 letter abreviation");

if (state.length === 2 && state === state.toUpperCase()) {
    alert("Sweet!, Thats a legit state");
} else {
    alert("Nope, can't fool me, thats not a state");
}

var mar = prompt("Are you married", "yes or no");

if (mar == "yes") {
    alert("Congrats!, I'm sure he/she is lovely!");
} else if (mar == "no") {
    alert("Awwww, you'll find someone soon enough with glowing personality");
} else {
    alert("Pretty sure it was a yes or no question, not that hard!");
}
