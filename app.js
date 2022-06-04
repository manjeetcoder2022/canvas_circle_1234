var event_catch=''
var src_x , srx_y

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color='red'
radius=40


canvas.addEventListener("mouseup" , mouseUp)

function mouseUp(e){
    event_catch='mouseUp'
    console.log(event_catch)
}

canvas.addEventListener("mouseleave" , mouseLeave)

function mouseLeave(e){
    event_catch='mouseleave'
    console.log(event_catch)
}

canvas.addEventListener("mousedown" , mouseDown)

function mouseDown(e){
    event_catch='mouseDown'
    console.log(event_catch)
}

canvas.addEventListener("mousemove", mouseMove)


function mouseMove(e){
    dest_x=e.clientX - canvas.offsetLeft
    dest_y=e.clientY - canvas.offsetTop

    if(event_catch=='mouseDown'){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=1
        ctx.arc(  dest_x, dest_y,radius,0,Math.PI*2)
        ctx.stroke()
    }
    color=document.getElementById("color").value
    radius=document.getElementById("Radius").value
}

function myclear(){
    ctx.clearRect(0,0,canvas.width,canvas.height)

}