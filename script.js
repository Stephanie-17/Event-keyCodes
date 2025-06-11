
window.addEventListener('keydown',(e)=>{
   let keyHtml = `<div class="key">
            <p>${e.key===" "?"Space":e.key}</p>
            <small>event.key</small>
        </div>
         <div class="key-code">
            <p>${e.keyCode}</p>
            <small>event.keyCode</small>
        </div>
        <div class="event-code">
            <p>${e.code}</p>
            <small>event.code</small>
        </div>`

        document.querySelector('.event').innerHTML = keyHtml

})




