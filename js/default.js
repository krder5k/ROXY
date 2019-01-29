var logoRotation = [
    {transform: 'rotate(0) translate(0, -20px)'},
    {transform: 'rotate(360deg) translate(0, 0)'}
];

var logoRotationTiming = {
    duration: 200,
    iterations: Infinity
};

function rotateLogo() {
    document.getElementById("logo").animate(logoRotation, logoRotationTiming);
}