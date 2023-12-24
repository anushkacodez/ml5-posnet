let capture;
let posenet;
let noseX;
let noseY;
let singlePose;
let skeleton;

let img;

function setup()
{
    createCanvas(800, 500);
    capture=createCapture(VIDEO);
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses);
    img=loadImage('saltBae.jpeg');
}

function receivedPoses(poses)
{
    console.log(poses);
    if(poses.length>0)
    {
        singlePose = poses[0].pose;
        skeleton= poses[0].skeleton;
        
    }
    //console.log(noseX+" "+noseY);
}

function modelLoaded(){
    console.log('Model has loaded');
}
function draw()
{
    image(capture, 0, 0);
    fill(255,0,0);
    //ellipse(noseX, noseY, 10,10);
    if(singlePose)
    {
        for(let i=0; i<singlePose.keypoints.length; i++)
        {
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 20);
        }
        stroke(255,255,255);
        strokeWeight(2);
        for(let j=0; j<skeleton.length; j++)
        {
            
            line(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,skeleton[j][1].position.y);
        }
        //image(img, singlePose.nose.x-100, singlePose.nose.y-130,200,200);
    }
    
}
