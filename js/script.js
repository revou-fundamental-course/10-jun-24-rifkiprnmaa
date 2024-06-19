function konversi(){
    var number = document.getElementById('number')
    console.log(number)
}

function konversi(){
    var celsius = document.getElementById('number').value
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit
}

    function resetValue(){
    document.getElementById('number').value = '';
}

function reverse(){
    document.getElementById('celciusText').innerHTML = 'fahrenheit'
    
}