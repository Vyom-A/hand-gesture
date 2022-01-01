var prediction1 = "";

var camera = document.getElementById("camera")

Webcam.set({
    width: 350,
    height: 300,
    image_format: "jpeg",
    jpeg_quality: 90
});

Webcam.attach(camera);

function take_snapshot() {
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = '<img id = "captured_image" src = "' + data_uri + '"/>';
});
}

console.log("Ml5 version is ",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3i_QujwjZ/model.json",modelLoaded);

function modelLoaded() {
console.log("Model loaded");
}

function speak() {
var synth = window.speechSynthesis;
var speak_data = "The predcition is " + prediction1;
var utterthis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
}