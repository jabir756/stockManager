
$(document).ready(()=>{ 

    let tab = ['biere','cafe'];

    for(let i=0; i<tab.length; i++){
        $('.list-products-container>nav>ul').append(`
            <li>${tab[i]}</li>
        `)
    } 
    
    $(document).on('click','.return',()=>{
        window.location.href = '../index.html'
    })

})
