$(document).ready(()=>{

    let tab = ['bonbon','sucre']

    $('.list-products-button').click(()=>{
        $('body').html(`
            <header>
                <button> << Return</button>
            </header>
            <div class="list-products">
                <h1>List of Products:</h1>
                <div class="list-products-container">
                    <nav>
                        <ul>
                        </ul>
                    </nav>
                </div>
            </div>
            `);
        
        for (let i=0; i<tab.length; i++){
            $('.list-products-container>nav>ul').append(`
                <li>${tab[i]}</li>
            `)
        }
        
    })









})