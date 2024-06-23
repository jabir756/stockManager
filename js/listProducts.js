export const tabName = ['biere']
export const tabPrice = [4]

$(document).ready(()=>{ 

    for(let i=0; i<tabName.length; i++){
        $('.list-products-container>nav>ul').append(`
            <li>${tabName[i]+' = '+tabPrice[i]+'$'}</li>
        `)
    }
    
    $(document).on('click','.return',()=>{
        window.location.href = '../index.html'
    })

})
