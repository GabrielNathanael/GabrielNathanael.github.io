const fibonacciButton = document.getElementById('fibonacciButton');

fibonacciButton.addEventListener('click', function (){
    
    let terms = parseInt(document.getElementById('insertFibonacci').value);
    
    if (isNaN(terms) || terms <= 0) {
        alert('Please enter a valid positive integer for the number of terms.');
        return;
    }

    let a = 0;
    let b = 1;
    let c;

    for (let i = 0; i < terms; i++) {
        c = a + b;
        a = b;
        b = c;
        document.getElementById('resultFibonacci').textContent += c + ',';

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



