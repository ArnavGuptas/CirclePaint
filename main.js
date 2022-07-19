var mouseEvent = ""
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var color = ""
var radius = ""
var width = ""
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e){
  radius=document.getElementById("radius").value
  width=document.getElementById("linewidth").value
  color=document.getElementById("color").value
  mouseEvent="mouseDown"
}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e){
  mouseEvent="mouseUp"
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e){
  mouseEvent="mouseLeave"
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
  mousex=e.clientX-canvas.offsetLeft
  mousey=e.clientY-canvas.offsetTop
  if(mouseEvent=="mouseDown"){
    ctx.beginPath()
    ctx.strokeStyle=document.getElementById("color").value
    ctx.lineWidth=document.getElementById("linewidth").value
    radius=document.getElementById("radius").value
    ctx.arc(mousex,mousey,radius,0,360)
    ctx.stroke()
  }
}
