
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 150, 220, 200);

    fill(0, 10, 245);
    stroke(2, 60, 200);
    circle(60, 60, 70);

    circle(630, 530, 70);

    fill(0, 20, 140);
    stroke(0,20,140);
    rect(90,40,460,20);
    rect(90, 420, 460, 20);
    rect(40, 90, 20, 300);
    rect(580, 90, 20, 300);
}

function take_snapshot() {
    save('image.png');
}