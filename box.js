class Box {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.4,
          friction:0.1,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility = 255
      this.image=loadImage("Box.jpg")
            World.add(world, this.body);
    }
    display(){
      //console.log(this.body.speed)
      if(this.body.speed <3){
      var pos =this.body.position;
      push ();
      translate(pos.x, pos.y);
        rotate(this.body.angle);
      //rectMode(CENTER);
      //fill(random(0,255),random(0,255),random(0,255));
     //rect(pos.x, pos.y, this.width, this.height);
     imageMode(CENTER)
     image(this.image,0,0,this.width,this.height)
     pop ();
      }
      else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        tint(this.visibility,255)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop(); 
      }
    }
  };