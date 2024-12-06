       // Převod Celsia na Fahrenheit
       function convertToFahrenheit() {
        const celsius = parseFloat(document.getElementById("celsius").value);
        if (isNaN(celsius)) {
            document.getElementById("result-celsius").textContent = "Zadejte platné číslo.";
            return;
        }
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("result-celsius").textContent = `${celsius} °C = ${fahrenheit.toFixed(2)} °F`;
    }

    // Převod Fahrenheita na Celsia
    function convertToCelsius() {
        const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
        if (isNaN(fahrenheit)) {
            document.getElementById("result-fahrenheit").textContent = "Zadejte platné číslo.";
            return;
        }
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("result-fahrenheit").textContent = `${fahrenheit} °F = ${celsius.toFixed(2)} °C`;
    }