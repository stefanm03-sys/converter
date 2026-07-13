function convertUnits() {
    var inputValue = document.getElementById("inputval").value;
    var fromUnit = document.getElementById("fromconv").value;
    var toUnit = document.getElementById("toconv").value;
    var amount = parseFloat(inputValue);

    if (Number.isNaN(amount)) {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
        return;
    }

    if (fromUnit === "km" && toUnit === "nmi") {
        var result = amount / 1.852;
        document.getElementById("result").innerHTML = result + " nautical miles";
        return result;
    } else if (fromUnit === "nmi" && toUnit === "km") {
        var result = amount * 1.852;
        document.getElementById("result").innerHTML = result + " kilometers";
        return result;
    } else if (fromUnit === "ft" && toUnit === "in") {
        var result = amount * 12;
        document.getElementById("result").innerHTML = result + " inches";
        return result;
    } else if (fromUnit === "in" && toUnit === "ft") {
        var result = amount / 12;
        document.getElementById("result").innerHTML = result + " feet";
        return result;
    } else if (fromUnit === "in" && toUnit === "cm") {
        var result = amount * 2.54;
        document.getElementById("result").innerHTML = result + " centimeters";
        return result;
    } else if (fromUnit === "in" && toUnit === "m") {
        var result = amount / 39.3700787;
        document.getElementById("result").innerHTML = result + " meters";
        return result;
    } else if (fromUnit === "in" && toUnit === "km") {
        var result = amount / 39370.0787;
        document.getElementById("result").innerHTML = result + " meters";
        return result;
    } else if (fromUnit === "cm" && toUnit === "in") {
        var result = amount / 2.54;
        document.getElementById("result").innerHTML = result + " inches";
        return result;
    } else if (fromUnit === "cm" && toUnit === "m") {
        var result = amount / 100;
        document.getElementById("result").innerHTML = result + " meters";
        return result;
    } else if (fromUnit === "cm" && toUnit === "ft") {
        var result = amount / 30.48;
        document.getElementById("result").innerHTML = result + " feet";
        return result;
    } else if (fromUnit === "cm" && toUnit === "km") {
        var result = amount / 100000;
        document.getElementById("result").innerHTML = result + " kilometers";
        return result;
    } else if (fromUnit === toUnit) {
        document.getElementById("result").innerHTML = amount + " " + fromUnit;
        return amount;
    } 

    if (fromUnit === "km" && toUnit === "mi") {
        var result = amount / 1.60934;
        document.getElementById("result").innerHTML = result + " miles";
        return result;
    } else if (fromUnit === "mi" && toUnit === "km") {
        var result = amount * 1.60934;
        document.getElementById("result").innerHTML = result + " kilometers";
        return result;
    } else if (fromUnit === "nmi" && toUnit === "mi") {
        var result = amount / 0.868976;
        document.getElementById("result").innerHTML = result + " miles";
        return result;
    } else if (fromUnit === "mi" && toUnit === "nmi") {
        var result = amount * 0.868976;
        document.getElementById("result").innerHTML = result + " nautical miles";
        return result;
    }

    document.getElementById("result").innerHTML = "Conversion not supported.";
    return null;
}
