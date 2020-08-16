document.addEventListener('DOMContentLoaded',function(){
    let cnt = 0
    let running = false
    let interval

    document.querySelector('button').addEventListener('click',function(){
        document.querySelector('#running').classList.toggle('open')
        if(running){
            document.querySelector('button').textContent = 'Start'
            clearInterval(interval)
            running = false            
        }else{
            document.querySelector('button').textContent = 'Stop'
            running = true
            interval = setInterval(function (){
                cnt = cnt+1
                document.getElementById('seconds').textContent= Math.floor(cnt)
                green =  document.querySelector('.dots div:last-child')
                document.querySelector('.dots').insertAdjacentElement('afterbegin',green)
            },100)}
    })

})
