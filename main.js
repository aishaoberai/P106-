

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    clasifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7qDmmFvzx/model.json' , modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {

    console.log('Got Result');
}

