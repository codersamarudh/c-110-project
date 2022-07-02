//https://teachablemachine.withgoogle.com/models/S_VAMjf8h/

Prediction1="";
Prediction2="";

Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90

});

camera =document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5.version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/S_VAMjf8h/model.json',modelLoaded);


function modelLoaded(){
console.log('model Loaded!')

}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is "+Prediction1;
    speak_data_2="and the second prediction is "+Prediction2;
    var UtterThis= new SpeechSynthesisUtterance (speak_data_1+speak_data_2);
    synth.speak(UtterThis);
}

function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResults);

}

function gotResults(error,results){
if (error) {
    console.error(error);
} else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    Prediction1= results[0].label;
    Prediction2= results[1].label;
    speak();
    if(results[0].label=="Happy ")
    {
        document.getElementById("update_emoji").innerHTML ="&#128522;";
    }

    if(results[0].label=="Sad")
    {
        document.getElementById("update_emoji").innerHTML ="&#128532;";
    }
    if(results[0].label=="Angry")
    {
        document.getElementById("update_emoji").innerHTML ="&#128548;";
    }
    
    if(results[1].label=="Happy ")
    {
        document.getElementById("update_emoji2").innerHTML ="&#128522;";
    }

    if(results[1].label=="Sad")
    {
        document.getElementById("update_emoji2").innerHTML ="&#128532;";
    }
    if(results[1].label=="Angry")
    {
        document.getElementById("update_emoji2").innerHTML ="&#128548;";
    }
    
}
}













