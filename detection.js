//Yoga Pose Detection Logic
// set global - needed for external libraries
/* globals ml5 */
const message = document.querySelector("#message")
const numbers = document.querySelector("#numbers")
const img = document.getElementById("pose")
const canvas = document.getElementById("canvas")
const fileButton = document.querySelector("#file")
const ctx = canvas.getContext("2d")

img.crossOrigin = "Anonymous"

let poses = []
let poseNet
let neuralNetwork

function setup() {
    ctx.strokeStyle = 'red'
    ctx.fillStyle = "white"
    ctx.lineWidth = 3
    
    neuralNetwork = ml5.neuralNetwork({ task: 'classification' })

    const modelInfo = {
        model: './Model/model.json',
        metadata: './Model/model_meta.json',
        weights: 'https://cdn.glitch.me/e0290f89-3adb-4ab8-9de7-bdc16e8e827a%2Fmodel.weights.bin?v=1637783808826',
    }

    neuralNetwork.load(modelInfo, yogaModelLoaded)
    
}

function yogaModelLoaded() {    
    poseNet = ml5.poseNet(poseModelLoaded)
    poseNet.on("pose", function (results) {
        poses = results
        draw()
    })
    draw()
}

function poseModelLoaded() {
    console.log("model loaded!")
    poseNet.singlePose(img)

    fileButton.addEventListener("change", (event) => loadFile(event))
    img.addEventListener("load", () => {
        setScale()
        poseNet.singlePose(img)
    })
}

function draw() { 
    ctx.fillRect(0, 0, 8000, 6000)
    ctx.drawImage(img, 0, 0)
    
    if (poses.length > 0) {
        drawKeypoints()
        drawSkeleton()
        logKeyPoints()
    }
}

// upload a new image
function loadFile(event) {
    img.src = URL.createObjectURL(event.target.files[0])
}

// setting size of images
function setScale() {
    let scale = Math.min(canvas.width / img.width, canvas.height / img.height)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.scale(scale, scale)
}


// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
    // Loop through all the poses detected
    for (let i = 0; i < poses.length; i += 1) {
        // For each pose detected, loop through all the keypoints
        for (let j = 0; j < poses[i].pose.keypoints.length; j += 1) {
            let keypoint = poses[i].pose.keypoints[j]
            // Only draw an ellipse if the pose probability is bigger than 0.2
            if (keypoint.score > 0.2) {
                ctx.beginPath()
                ctx.arc(keypoint.position.x, keypoint.position.y, 10, 0, 2 * Math.PI)
                ctx.stroke()
            }
        }
    }
}

// A function to draw the skeletons
function drawSkeleton() {
    // Loop through all the skeletons detected
    for (let i = 0; i < poses.length; i += 1) {
        // For every skeleton, loop through all body connections
        for (let j = 0; j < poses[i].skeleton.length; j += 1) {
            let partA = poses[i].skeleton[j][0]
            let partB = poses[i].skeleton[j][1]
            ctx.beginPath()
            ctx.moveTo(partA.position.x, partA.position.y)
            ctx.lineTo(partB.position.x, partB.position.y)
            ctx.stroke()
        }
    }
}


function logKeyPoints() {
 
    let points = []
      for (let keypoint of poses[0].pose.keypoints){
        points.push(Math.round(keypoint.position.x))
        points.push(Math.round(keypoint.position.y))
      }
    numbers.value = points.toString()
    console.log(points)
    neuralNetwork.classify(points,yogaResult)
    //console.log(points)
    
}

function yogaResult(error, result) {
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
    }
    message.innerHTML = `Pose detected is: "${result[0].label}" with confidence score of: ${result[0].confidence.toFixed(2)}`
}

setup()













