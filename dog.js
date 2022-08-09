function preload(){
    img=loadImage("angry dog.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status1").innerHTML="Status: Detecting Objects..."
}
function modelLoaded(){
    console.log("Model Is Loaded");
    state=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
        console.log(results);

}
