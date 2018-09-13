let first = document.getElementById('first')
let second = document.getElementById('second')
let last = document.getElementById('last')
let date = document.getElementById('date')
let locate = document.getElementById('location')
let h1 = document.getElementById('initials')
let h2 = document.getElementById('names')
let surname = document.getElementById('surname')
let p = document.getElementById('day')
let h4 = document.getElementById('place')
let formal = document.getElementById('formal')
let spring = document.getElementById('spring')
let art = document.getElementById('art')
let radio = document.getElementsByClassName('radio')
let invitation = document.getElementById('invitation')




document.addEventListener('keyup', event =>{
  h1.innerHTML = `${first.value.charAt(0)} & ${second.value.charAt(0)}`
  h2.innerHTML = `${first.value} & ${second.value}`
  surname.innerHTML = last.value
  p.innerHTML = date.value
  h4.innerHTML = locate.value
    
})
  spring.addEventListener('click', event =>{

    invitation.style.backgroundImage = "url('https://png.pngtree.com/thumb_back/fw800/back_pic/04/50/42/90585cd249d15db.jpg')"
    invitation.style.fontFamily = "Impact,Charcoal,sans-serif";
    $('#invitation').fadeOut(1)
    $('#invitation').fadeIn(1500)

})

  art.addEventListener('click', event =>{

    invitation.style.backgroundImage = "url('https://i.pinimg.com/originals/a2/78/03/a27803ee5561dc3540320953c56c806f.png')"
    $('#invitation').fadeOut(1)
    $('#invitation').fadeIn(1500)

})
  formal.addEventListener('click', event =>{
    invitation.style.backgroundImage = "url('https://i.pinimg.com/originals/37/9a/b0/379ab02a9fa1119ad55fb319971f622d.jpg')"
  })






