function setup() {
    createCanvas(windowWidth, windowHeight);
    background(223, 242, 255);
}

function draw() {
 push()  
    noStroke();
    
    push() //crete
        fill('#29787B');
        rectMode(CORNER)
        translate(width/2, height/2);
        rect(-10, -260, 20, 70, 10);
        rect(-30, -250, 20, 60, 10);
        rect(10, -245, 20, 60, 10);
        rect(-50, -230, 20, 60, 10);
        rect(30, -230, 20, 60, 10);
    pop()
    
    push() //queue
        fill('#065C55');
        translate(width/2, height/2);
        rect(-20, 0, 30, 350,0, 0, 12, 12);
    
        fill('#29787B');
        rect(-50, 0, 30, 330,0, 0, 12, 12);
        rect(10, 0, 30, 300,0, 0, 12, 12);
    
        fill('#00CCBD');
        rect(-80, 0, 30, 300,0, 0, 12, 12);
        rect(40, 0, 30, 270,0, 0, 12, 12);
    pop()

    push()//ailes
        fill('#29787B');
        ellipse(width / 2 - 80, height / 2, 250, 240);
        ellipse(width / 2 + 80, height / 2, 250, 240);
        
    pop()
    
    push()//corps
        fill('#00CCBD');
        ellipse(width / 2, height / 2, 350, 300);
        ellipse(width / 2, height / 2 - 140, 200, 170);
    pop()

    push()//ventre
        fill('#29787B');
        ellipse(width / 2, height / 2 + 40, 250, 200);
    pop()

    push()//yeux blanc
        fill('255');
        ellipse(width / 2 - 30, height / 2 - 160, 20, 20);
        ellipse(width / 2 + 30, height / 2 - 160, 20, 20);
    pop()
    
    push()//yeux iris
        fill('#29787B');
        ellipse(width / 2 - 30, height / 2 - 158, 17, 17);
        ellipse(width / 2 + 30, height / 2 - 158, 17, 17);
    pop()
    
    push() //bouche
        fill('#065C55');
        translate(width / 2, height / 2);
        rotate(TWO_PI - QUARTER_PI);
        arc(90, -70, 35, 35, PI - HALF_PI, TWO_PI);
    pop()
    
    push() //pattes
        fill('#065C55')
        translate(width/2, height/2);
        rotate(PI-1/2*QUARTER_PI)
        arc(10, -160, 60, 60, 0,PI+QUARTER_PI, TWO_PI);
        arc(130, -110, 60, 60, 0,PI+QUARTER_PI, TWO_PI); 
    pop()
    
pop()
}
