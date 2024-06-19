function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let celsius, fahrenheit, kelvin;

    if (isNaN(inputValue)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }

    switch (inputUnit) {
        case 'Celsius':
            celsius = inputValue;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            break;
        case 'Fahrenheit':
            fahrenheit = inputValue;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
            break;
        case 'Kelvin':
            kelvin = inputValue;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            break;
    }

    document.getElementById('result').innerHTML = `
        <p>${celsius.toFixed(2)} °C</p>
<p>${fahrenheit.toFixed(2)} °F</p>
        <p>${kelvin.toFixed(2)} K</p>
    `;
}