// JavaScript Document
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"> </script>

<script>
$(function(){

    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.strokeStyle="none";
    ctx.lineWidth=1;
    ctx.fillStyle="red";

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
    var begin,end;

    function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.moveTo(cx,cy);
        ctx.arc(cx,cy,150,begin,end);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    function handleMouseDown(e){
      e.preventDefault();
      mouseX=parseInt(e.clientX-offsetX);
      mouseY=parseInt(e.clientY-offsetY);

      // Put your mousedown stuff here
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
    }

    $("#canvas").mousedown(function(e){handleMouseDown(e);});
    $("#canvas").mousemove(function(e){handleMouseMove(e);});
    $("#canvas").mouseup(function(e){handleMouseUp(e);});
    $("#canvas").mouseout(function(e){handleMouseOut(e);});



}); // end $(function(){});

$(function(){

    var canvas=document.getElementById("canvas2");
    var ctx=canvas.getContext("2d");
    ctx.strokeStyle="none";
    ctx.lineWidth=1;
    ctx.fillStyle="red";

    var $canvas=$("#canvas2");
    var canvasOffset=$canvas.offset();
    var offsetX=canvasOffset.left;
    var offsetY=canvasOffset.top;
    var scrollX=$canvas.scrollLeft();
    var scrollY=$canvas.scrollTop();

    var isDown=false;
    var startX;
    var startY;

    var cx=75;
    var cy=75;
    var begin,end;

    function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.moveTo(cx,cy);
        ctx.arc(cx,cy,75,begin,end);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    function handleMouseDown(e){
      e.preventDefault();
      mouseX=parseInt(e.clientX-offsetX);
      mouseY=parseInt(e.clientY-offsetY);

      // Put your mousedown stuff here
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
    }

    $("#canvas2").mousedown(function(e){handleMouseDown(e);});
    $("#canvas2").mousemove(function(e){handleMouseMove(e);});
    $("#canvas2").mouseup(function(e){handleMouseUp(e);});
    $("#canvas2").mouseout(function(e){handleMouseOut(e);});



}); // end $(function(){});
</script>