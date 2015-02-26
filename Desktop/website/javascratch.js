// JavaScript Document
$(document).ready = function() {

	var foodtype = {	
		dairy: {
			color_select: 'blue',
			startAngle: 0,
			endAngle: 0,
		}
	
		fruit: {
			color_select: 'red',
			startAngle: 0,
			endAngle: 0,
		}
	
		vegetable: {
			color_select: 'green',
			startAngle: 0,
			endAngle: 0,
		}
	
		protein: {
			color_select: '#60C',
			startAngle: 0,
			endAngle: 0,
		}
	
		grain: {
			color_select: '#F60',
			startAngle: 0,
			endAngle: 0,
		}
	
		empty: {
			color_select: 'black',
			startAngle: 0,
			endAngle: 0,
			rotation: 0,
		}
	}
	
	
	//not sure what parameters to put in, but figured those should be there. Thinking begin and end should default to nil
	$(function(){	
	$(".macromenu").children("div").click(function(foodtype, begin, end){
		if($(this).hasClass("blue")){
			//check if other macromenu.child has been clicked 
			
			//if has not been clicked, startAngle = mousedown 
				color_select= 'blue';
				startAngle= 90; //mousedown
				endAngle= handleMouseUp(e); //mouseup
				return startAngle, endAngle;
				dairy.push(startAngle, endAngle); //push startAngle & endAngle into diary object
			
			//If foodtype has been clicked, startAngle = last color's mouse up
				color_select= 'blue';
				startAngle= foodtype.endAngle; //endAngle of previously used foodtype
				endAngle= handleMouseUp(e); //mouseup
				return startAngle, endAngle;
				dairy.push(startAngle, endAngle); //push startAngle & endAngle into diary object
		}
		
		else if($(this).hasClass("red")){
			//check if other macromenu.child has been clicked 
			
			//if has not been clicked, startAngle = mousedown 
				color_select= 'red';
				startAngle= 90; //mousedown
				endAngle= handleMouseUp(e); //mouseup
				return startAngle, endAngle;
				fruit.push(startAngle, endAngle); //push startAngle & endAngle into diary object
			
			//If foodtype has been clicked, startAngle = last color's mouse up
				color_select= 'red';
				startAngle= foodtype.endAngle; //endAngle of previously used foodtype
				endAngle= handleMouseUp(e); //mouseup
				return startAngle, endAngle;
				fruit.push(startAngle, endAngle); //push startAngle & endAngle into diary object
		}
		
		else if($(this).hasClass("green")){
			//check if other macromenu.child has been clicked 
			
			//if has not been clicked, startAngle = mousedown 
				color_select= 'green';
				startAngle= 90; //mousedown
				endAngle= handleMouseUp(e); //mouseup
				return startAngle, endAngle;
				vegetable.push(startAngle, endAngle); //push startAngle & endAngle into diary object
			
			//If foodtype has been clicked, startAngle = last color's mouse up
				color_select= 'green';
				startAngle= foodtype.endAngle; //endAngle of previously used foodtype
				endAngle= handleMouseUp(e); //mouseup
				return startAngle, endAngle;
				vegetable.push(startAngle, endAngle); //push startAngle & endAngle into diary object
			}
			
		else if($(this).hasClass("purple")){
			//check if other macromenu.child has been clicked 
			
			//if has not been clicked, startAngle = mousedown 
				color_select= '#60C';
				startAngle= 90; //mousedown
				endAngle= handleMouseUp(e); //mouseup
				return startAngle, endAngle;
				protein.push(startAngle, endAngle); //push startAngle & endAngle into diary object
			
			//If foodtype has been clicked, startAngle = last color's mouse up
				color_select= '#60C';
				startAngle= foodtype.endAngle; //endAngle of previously used foodtype
				endAngle= handleMouseUp(e); //mouseup
				return startAngle, endAngle;
				protein.push(startAngle, endAngle); //push startAngle & endAngle into diary object
		}
			
		else if($(this).hasClass("orange")){
			//check if other macromenu.child has been clicked 
			
			//if has not been clicked, startAngle = mousedown 
				color_select= '#F60';
				startAngle= 90; //mousedown
				endAngle= handleMouseUp(e); //mouseup
				return startAngle, endAngle;
				grain.push(startAngle, endAngle); //push startAngle & endAngle into diary object
			
			//If foodtype has been clicked, startAngle = last color's mouse up
				color_select= '#F60';
				startAngle= foodtype.endAngle; //endAngle of previously used foodtype
				endAngle= handleMouseUp(e); //mouseup
				return startAngle, endAngle;
				grain.push(startAngle, endAngle); //push startAngle & endAngle into diary object
		}
			
		else if($(this).hasClass("black")){
			//check if other macromenu.child has been clicked 
			
			//if has not been clicked, startAngle = mousedown 
				color_select= 'black';
				startAngle= 90; //mousedown
				endAngle= handleMouseUp(e); //mouseup
				return startAngle, endAngle;
				empty.push(startAngle, endAngle); //push startAngle & endAngle into diary object
			
			//If foodtype has been clicked, startAngle = last color's mouse up
				color_select= 'black';
				startAngle= foodtype.endAngle;//endAngle of previously used foodtype
				endAngle= handleMouseUp(e); //mouseup
				return startAngle, endAngle;
				empty.push(startAngle, endAngle); //push startAngle & endAngle into diary object
		}
	});
	
	
	
	
	
//scratch material
	if ($('.macromenu').clicked() === true {
		this.startAngle = end; //of previous color
		endAngle = handleMouseUp(e)
	});

}






//current working code to create one wedge color
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.fillStyle=color_select;
	

    var $canvas=$("#canvas");
    var canvasOffset=$canvas.offset();
    var offsetX=canvasOffset.left;
    var offsetY=canvasOffset.top;
    var scrollX=$canvas.scrollLeft();
    var scrollY=$canvas.scrollTop();

    var isDown=false;
    var startX;
    var startY;

    var cx=150;
    var cy=150;
    var begin = "handleMouseDown";
	var end = "handleMouseUp";

    function draw(){
		ctx.fillStyle = color_select;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.moveTo(cx,cy);
        ctx.arc(cx,cy,150,begin,end);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
		
		
    }



//Mouse functions
    function handleMouseDown(e){
      e.preventDefault();
      mouseX=parseInt(e.clientX-offsetX);
      mouseY=parseInt(e.clientY-offsetY);

      var dx=mouseX-cx;
      var dy=mouseY-cy;
      begin=Math.atan2(dy,dx);
      isDown=true;
    }

    function handleMouseUp(e){
      e.preventDefault();
      isDown=false;
    }

    function handleMouseOut(e){
      e.preventDefault();
      isDown=false;
    }

    function handleMouseMove(e){
      if(!isDown){return;}
      e.preventDefault();
      mouseX=parseInt(e.clientX-offsetX);
      mouseY=parseInt(e.clientY-offsetY);
      var dx=mouseX-cx;
      var dy=mouseY-cy;
      end=Math.atan2(dy,dx);
      draw();
	  return end //added to check for end point of previous color, 5/28/14
    }

    $("#canvas").mousedown(function(e){handleMouseDown(e);});
    $("#canvas").mousemove(function(e){handleMouseMove(e);});
    $("#canvas").mouseup(function(e){handleMouseUp(e);});
    $("#canvas").mouseout(function(e){handleMouseOut(e);});
	


});




//Plate Examples
//My Diet
<!DOCTYPE HTML>
<html>
  <head>
    <style>
      body {
        margin: 0px;
        padding: 0px;
      }
    </style>
  </head>
  <body>
    <div id="container"></div>
    <script src="http://d3lp1msu2r81bx.cloudfront.net/kjs/js/lib/kinetic-v5.0.2.min.js"></script>
    <script defer="defer">
      var stage = new Kinetic.Stage({
        container: 'container',
        width: 578,
        height: 200
      });

      var layer = new Kinetic.Layer();

            var fruitWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 80,
        fill: 'red',
        rotation: 0
      });

      var vegWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 70,
        fill: 'green',
        rotation: 80
      });
      
      var proteinWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 80,
        fill: '#60C',
        rotation: 150
      });
      
      var grainWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 60,
        fill: '#F60',
        rotation: 230
      });
      
      var dairyWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 50,
        fill: 'blue',
        rotation: 290
      });
      
      var emptyWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 20,
        fill: 'black',
        rotation: 340
      });
      
      // add the shape to the layer
      layer.add(fruitWedge);
      layer.add(vegWedge);
      layer.add(proteinWedge);
      layer.add(grainWedge);
      layer.add(dairyWedge);
      layer.add(emptyWedge);

      // add the layer to the stage
      stage.add(layer);
    </script>
  </body>
</html>      



//High Grain Carb
<!DOCTYPE HTML>
<html>
  <head>
    <style>
      body {
        margin: 0px;
        padding: 0px;
      }
    </style>
  </head>
  <body>
    <div id="container"></div>
    <script src="http://d3lp1msu2r81bx.cloudfront.net/kjs/js/lib/kinetic-v5.0.2.min.js"></script>
    <script defer="defer">
      var stage = new Kinetic.Stage({
        container: 'container',
        width: 578,
        height: 200
      });

      var layer = new Kinetic.Layer();

        var fruitWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 20,
        fill: 'red',
        rotation: 0
      });

      var vegWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 20,
        fill: 'green',
        rotation: 20
      });
      
      var proteinWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 100,
        fill: '#60C',
        rotation: 40
      });
      
      var grainWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 140,
        fill: '#F60',
        rotation: 140
      });
      
      var dairyWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 30,
        fill: 'blue',
        rotation: 280
      });
      
      var emptyWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 50,
        fill: 'black',
        rotation: 310
      });
      
      // add the shape to the layer
      layer.add(fruitWedge);
      layer.add(vegWedge);
      layer.add(proteinWedge);
      layer.add(grainWedge);
      layer.add(dairyWedge);
      layer.add(emptyWedge);

      // add the layer to the stage
      stage.add(layer);
    </script>
  </body>
</html>      




//High Grain and Empty Carb
<!DOCTYPE HTML>
<html>
  <head>
    <style>
      body {
        margin: 0px;
        padding: 0px;
      }
    </style>
  </head>
  <body>
    <div id="container"></div>
    <script src="http://d3lp1msu2r81bx.cloudfront.net/kjs/js/lib/kinetic-v5.0.2.min.js"></script>
    <script defer="defer">
      var stage = new Kinetic.Stage({
        container: 'container',
        width: 578,
        height: 200
      });

      var layer = new Kinetic.Layer();

        var fruitWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 20,
        fill: 'red',
        rotation: 0
      });

      var vegWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 20,
        fill: 'green',
        rotation: 20
      });
      
      var proteinWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 60,
        fill: '#60C',
        rotation: 40
      });
      
      var grainWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 140,
        fill: '#F60',
        rotation: 100
      });
      
      var dairyWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 30,
        fill: 'blue',
        rotation: 240
      });
      
      var emptyWedge = new Kinetic.Wedge({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 70,
        angle: 90,
        fill: 'black',
        rotation: 270
      });
      
      // add the shape to the layer
      layer.add(fruitWedge);
      layer.add(vegWedge);
      layer.add(proteinWedge);
      layer.add(grainWedge);
      layer.add(dairyWedge);
      layer.add(emptyWedge);

      // add the layer to the stage
      stage.add(layer);
    </script>
  </body>
</html>      


