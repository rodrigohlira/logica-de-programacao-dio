function converterParaCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) * (5/9);
    return celsius.toFixed(2);
}

function receberTemperatura(){
    let fahrenheit = 98

    let calculoTemperatura = converterParaCelsius(fahrenheit);

    console.log(`${fahrenheit}° Fahrenheit é equivalente à ${calculoTemperatura}° Celsius`);
}

receberTemperatura();