import {tabName} from '../js/addProducts'
import { tabPrice } from './listStockScript'

$(document).ready(()=>{   

    let name
    let price

    $(document).on('click','.validation',()=>{
        $('.product-name').val() = name
        $('.product-price').val() = price
        tabName.push(name)
        tabPrice.push(price)
    })
    
    $(document).on('click','.return',()=>{
        window.location.href = '../index.html'
    })
    

})

