const fibonacciButton = document.getElementById('fibonacciButton');
fibonacciButton.addEventListener('click', function () {
    let n = parseInt(document.getElementById('insertFibonacci').value);
    let resultFibonacci = document.getElementById('resultFibonacci');
    
    if (n <= 0) {
        resultFibonacci.textContent = "The n must be bigger than 0";
    } else {
        let a = 0;
        let b = 1;
        let result = 0;
        
        for (let i = 2; i <= n; i++) {
            result = a + b;
            a = b;
            b = result;
        }
        
        resultFibonacci.textContent = "The " + n + " Fibonacci sequence is :" + result;
    }
});


//KUBUS
const cubeButton = document.getElementById('cubeButton');

cubeButton.addEventListener('click', function (){
    const cubeSide = document.getElementById('cubeSide').value;
    
    const volume = Math.pow(cubeSide, 3);
    const formattedVolume = volume.toFixed(2);
    
    document.getElementById('resultCube').textContent = 'Result: ' + formattedVolume;
});
const cuboidButton = document.getElementById('cuboidButton');

cuboidButton.addEventListener('click', function () {
    const length = parseFloat(document.getElementById('cuboidLong').value);
    const width = parseFloat(document.getElementById('cuboidWidth').value);
    const height = parseFloat(document.getElementById('cuboidHeight').value);


    const volume = length * width * height;
    const formattedVolume = volume.toFixed(2);

    document.getElementById('resultCuboid').textContent = 'Result: ' + formattedVolume;
});

//BOLA
const ballButton = document.getElementById('ballButton');

ballButton.addEventListener('click', function () {
    const radius = parseFloat(document.getElementById('radiusBall').value);

    if (isNaN(radius) || radius < 0) {
        alert('Please enter a valid positive number for the ball radius.');
        return;
    }

    const volume = (4/3) * Math.PI * Math.pow(radius, 3);

    const formattedVolume = volume.toFixed(2);
    
    document.getElementById('resultBall').textContent = 'Result: ' + formattedVolume;
});


//TABUNG
const cylinderButton = document.getElementById('cylinderButton');

cylinderButton.addEventListener('click', function () {
    const radius = parseFloat(document.getElementById('cylinderRadius').value);
    const height = parseFloat(document.getElementById('cylinderHeight').value);

    if (isNaN(radius) || isNaN(height) || radius < 0 || height < 0) {
        alert('Please enter valid positive numbers for the cylinder radius and height.');
        return;
    }

    const volume = Math.PI * Math.pow(radius, 2) * height;
    
    const formattedVolume = volume.toFixed(2);

    document.getElementById('resultCylinder').textContent = 'Result: ' + formattedVolume;
});

//KERUCUT
const coneButton = document.getElementById('coneButton');

coneButton.addEventListener('click', function () {
    const radius = parseFloat(document.getElementById('radiusCone').value);
    const height = parseFloat(document.getElementById('coneHeight').value);

    if (isNaN(radius) || isNaN(height) || radius < 0 || height < 0) {
        alert('Please enter valid positive numbers for the cone radius and height.');
        return;
    }

    const volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;

    document.getElementById('resultCone').textContent = 'Result: ' + volume.toFixed(2);
});



