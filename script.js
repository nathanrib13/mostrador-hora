
function carregar() {
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('img')
let date = new Date()  
let hour = date.getHours()

msg.innerHTML = `It's ${hour} hours! Have a nice day`

if (hour >= 0 && hour <12) {
//bom dia
img.src  = 'fotomanha.png'
document.body.style.backgroundColor = '#e2cd90'
} else if (hour >= 12 && hour <18) {
    //boa tarde
    img.src = 'fototarde.png'
    document.body.style.backgroundColor = '#b9846c'
} else {
    //boa noite
    img.src = 'fotonoite.png'
    document.body.style.backgroundColor = '#555154'
}
 
}
