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
    } else if (fromUnit === "km" && toUnit === "mi") {
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
    } else if (fromUnit === "ft" && toUnit === "m") {
        var result = amount / 3.28084;
        document.getElementById("result").innerHTML = result + " meters";
        return result;
    } else if (fromUnit === "m" && toUnit === "ft") {
        var result = amount * 3.28084;
        document.getElementById("result").innerHTML = result + " feet";
        return result;
    } else if (fromUnit === "m" && toUnit === "cm") {
        var result = amount * 100;
        document.getElementById("result").innerHTML = result + " centimeters";
        return result;
    } else if (fromUnit === "m" && toUnit === "km") {
        var result = amount / 1000;
        document.getElementById("result").innerHTML = result + " kilometers";
        return result;
    } else if (fromUnit === "km" && toUnit === "m") {
        var result = amount * 1000;
        document.getElementById("result").innerHTML = result + " meters";
        return result;
    } else if (fromUnit === "mi" && toUnit === "m") {
        var result = amount * 1609.34;
        document.getElementById("result").innerHTML = result + " meters";
        return result;
    } else if (fromUnit === "m" && toUnit === "mi") {
        var result = amount / 1609.34;
        document.getElementById("result").innerHTML = result + " miles";
        return result;
    }   else if (fromUnit === "mi" && toUnit === "ft") {
        var result = amount * 5280;
        document.getElementById("result").innerHTML = result + " feet";
        return result;
    } else if (fromUnit === "ft" && toUnit === "mi") {
        var result = amount / 5280;
        document.getElementById("result").innerHTML = result + " miles";
        return result;
    } else if (fromUnit === "mi" && toUnit === "cm") {
        var result = amount * 160934;
        document.getElementById("result").innerHTML = result + " centimeters";
        return result;
    } else if (fromUnit === "cm" && toUnit === "mi") {
        var result = amount / 160934;
        document.getElementById("result").innerHTML = result + " miles";
        return result;
    } else if (fromUnit === "mi" && toUnit === "in") {
        var result = amount * 63360;
        document.getElementById("result").innerHTML = result + " inches";
        return result;
    } else if (fromUnit === "in" && toUnit === "mi") {
        var result = amount / 63360;
        document.getElementById("result").innerHTML = result + " miles";
        return result;
    } else if (fromUnit === "nmi" && toUnit === "m") {
        var result = amount * 1852;
        document.getElementById("result").innerHTML = result + " meters";
        return result;
    } else if (fromUnit === "m" && toUnit === "nmi") {
        var result = amount / 1852;
        document.getElementById("result").innerHTML = result + " nautical miles";
        return result;
    } else if (fromUnit === "nmi" && toUnit === "cm") {
        var result = amount * 185200;
        document.getElementById("result").innerHTML = result + " centimeters";
        return result;
    } else if (fromUnit === "cm" && toUnit === "nmi") {
        var result = amount / 185200;
        document.getElementById("result").innerHTML = result + " nautical miles";
        return result;
    } else if (fromUnit === "nmi" && toUnit === "ft") {
        var result = amount * 6076.12;
        document.getElementById("result").innerHTML = result + " feet";
        return result;
    } else if (fromUnit === "ft" && toUnit === "nmi") {
        var result = amount / 6076.12;
        document.getElementById("result").innerHTML = result + " nautical miles";
        return result;
    } else if (fromUnit === "nmi" && toUnit === "in") {
        var result = amount * 72913.4;
        document.getElementById("result").innerHTML = result + " inches";
        return result;
    } else if (fromUnit === "in" && toUnit === "nmi") {
        var result = amount / 72913.4;
        document.getElementById("result").innerHTML = result + " nautical miles";
        return result;
    }
    document.getElementById("result").innerHTML = "Conversion not supported.";
    return null;
}

// Base Conversions Top, New Conversions Bottom

if (fromUnit === "?" && toUnit === "?") {

}

function convertFile() {
    var file = document.getElementById("fileInput").files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        var lines = contents.split("\n");
        var results = [];
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            // Process each line as needed
        }
    }
      
}