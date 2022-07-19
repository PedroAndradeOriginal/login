document.getElementById('olho').addEventListener('mousedown', function () {
    document.getElementById('pass').type = 'text';
});

document.getElementById('olho').addEventListener('mouseup', function () {
    document.getElementById('pass').type = 'password';
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho').addEventListener('mousemove', function () {
    document.getElementById('pass').type = 'password';
});

document.getElementById('olho2').addEventListener('mousedown', function () {
    document.getElementById('pass2').type = 'text';
});

document.getElementById('olho2').addEventListener('mouseup', function () {
    document.getElementById('pass2').type = 'password';
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho2').addEventListener('mousemove', function () {
    document.getElementById('pass2').type = 'password';
});