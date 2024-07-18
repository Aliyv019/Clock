const time=document.querySelector('span')
setInterval(()=>{
    const date=new Date()
    const hour=date.getHours()
    const minute=date.getMinutes()
    const second=date.getSeconds()
    time.textContent=`${hour}:${minute}:${second}`
    console.log(hour,minute,second);
},1000)

