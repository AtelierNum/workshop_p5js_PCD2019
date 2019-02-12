let SIZE 

function setup(){
    createCanvas(windowWidth,windowHeight)
    angleMode(DEGREES)
}

function draw(){
    background(242,238,227)
    generateBirds()
}


function generateBirds(){
    let size = 300;
    for(i = 0; i < 10;i++){
        for(j = 0; j < 10;j++){
            push()
                translate(size*i,size*j*1.3)
                bird2(3)
            pop() 
        }
    }
}



function bird2(SIZE){
    stroke(0,0,0)
    strokeWeight(1)
    translate(100,100)

    noStroke()
    fill(206,41,73)
    arc(15 * SIZE,15* SIZE, 30 * SIZE,30 * SIZE, 180, 270)
    

    fill(88,40,65)
    arc(15 * SIZE,30* SIZE, 60 * SIZE,60 * SIZE, 270, 0)

    // Eye
    fill(255)
    ellipse(20 * SIZE,10* SIZE,3 * SIZE,3* SIZE)

    fill(206,41,73)
    ellipse(29 * SIZE,40* SIZE,35 * SIZE,50* SIZE)
    rect(11.5 * SIZE,40* SIZE,10*SIZE,40*SIZE)


    // Tail
    push()
        translate(0,30 * SIZE)
        fill(155,16,91) 
        rotate(map(mouseX,0,width,-30,2))
        rect(11 * SIZE,55* SIZE,5*SIZE,40*SIZE)
        fill(206,41,73)
        rect(16 * SIZE,50* SIZE,5*SIZE,40*SIZE)
        fill(239,70,72)  
        rect(21 * SIZE,45* SIZE,5*SIZE,40*SIZE)
        fill(253,110,56)
        rect(26 * SIZE,40* SIZE,5*SIZE,40*SIZE)
    pop()

  
    // Wing 
    push()
        ellipseMode(CORNER)
        translate(43*SIZE,20*SIZE)
        rotate(map(mouseX,0,width,35,45))
        push()
            translate(-35*SIZE,0)
            fill(248,158,76) 
            arc(0,0, 70 * SIZE,80 * SIZE, 270, 90)
        pop()

        push()
            rotate(map(mouseX,0,width,-7,7))
            translate(-30*SIZE,0)
            fill(253,110,56)
            arc(0,0, 60 * SIZE,65 * SIZE, 270, 90)
        pop()

        push()
            rotate(map(mouseX,0,width,-15,15))
            translate(-15*SIZE,0)
            fill(239,70,72)  
            arc(0,0, 30 * SIZE,40 * SIZE, 270, 90)
        pop()

    pop()
}




function bird(SIZE){
    
    rotate(45)
    line(-SIZE,0,SIZE,0)
    line(0,-SIZE,0,SIZE)
   
   
    noStroke()

    // head 
    fill(0)
    arc(0, -SIZE/16, SIZE/4, SIZE/4, 180 -70,280 ,CHORD)
    fill(223,23,42)
    arc(0, -SIZE/16, SIZE/4, SIZE/4, 180 -30,360 +30 ,CHORD)
    triangle(0,0, 0, -SIZE/8.5, SIZE/1.7, 0);
 
    //body
    arc(SIZE/3, 0, SIZE/2, SIZE/3, 0 ,180 ,CHORD);

    push()
        fill(0)
        rotate(map(mouseY,0,height,0,-20))
        translate(SIZE/9,SIZE/20)
        rect(SIZE/9,0,SIZE/2,SIZE/20)
        rect(SIZE/5,SIZE/20,SIZE/1.8,SIZE/28)
        rect(SIZE/3,SIZE/14,SIZE/1.8,SIZE/28)

        rotate(map(mouseY,0,height,0,-20))
        arc(SIZE/3.5, -SIZE/20, SIZE/2, SIZE/3, 0 ,180 ,CHORD);
    pop()


    // eye
    fill(0)
    ellipse(-SIZE/30,-SIZE/14,SIZE/20,-SIZE/20)
    fill(255)
    ellipse(-SIZE/30,-SIZE/14,map(mouseX,0,width,-SIZE/70,SIZE/70) ,-SIZE/70)
}
