song = "";

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(VIDEO, modelLoaded);
    posenet.on("pose",gotPoses)
}

function draw(){
    image(video, 0 , 0 , 600 , 500);
}

function gana(){
    song.play();

    song.setVolume(0.7);
    
    song.rate(1);
}

function modelLoaded(){
    console.log("Model has been loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}