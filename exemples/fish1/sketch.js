function setup() {
    // paramètre du code cad = création de la fenêtre de travail
    createCanvas(windowWidth, windowHeight);
    background(0);
}


function draw() {
    background(142, 219, 249);

    //fin du poisson
    push();
    translate(900, 300);
    rotate(PI / 3);
    noStroke();
    fill(255, 148, 0)
    ellipse(0, 0, 100, 130);
    pop();

    push();
    translate(900, 380);
    rotate(PI / 2);
    noStroke();
    fill(255, 148, 0)
    ellipse(0, 0, 100, 130);
    pop();


    //les yeux
    noStroke();
    fill(255, 148, 0)
    ellipse(width / 2, height / 2, 300, 300);

    noStroke();
    fill(255)
    ellipse(620, 300, 70, 70);

    noStroke();
    fill(130, 57, 5);
    ellipse(606, 300, 40, 40);

    noStroke();
    fill(175, 99, 45);
    ellipse(600, 300, 30, 30);

    noStroke();
    fill(255);
    ellipse(598, 300, 20, 20);

    //la bouche
    noStroke();
    fill(232, 60, 131);
    ellipse(584, 380, 10, 10);

    //bulles
    stroke(212, 247, 252);
    strokeWeight(9);
    noFill();
    ellipse(400, 200, 80, 80);

    stroke(212, 247, 252);
    strokeWeight(9);
    noFill();
    ellipse(500, 240, 50, 50);

    //équailles
    
    noStroke();
    fill(255, 204, 241)
    ellipse(720, 300, 50, 50);

    noStroke();
    fill(255, 221, 237)
    ellipse(780, 300, 50, 50);

    noStroke();
    fill(255, 155, 227)
    ellipse(750, 240, 50, 50);

    noStroke();
    fill(255, 137, 222)
    ellipse(750, 360, 50, 50);
    
      noStroke();
    fill(252, 116, 214)
    ellipse(720, 420, 50, 50);

    noStroke();
    fill(249, 94, 206)
    ellipse(780, 420, 50, 50);




}
