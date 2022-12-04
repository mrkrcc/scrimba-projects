import { menuArray } from "./data.js"



let totalBill = 0
let orderList = {}
let isOrdered = false
let customer = ""
function newOrderList(){menuArray.forEach(function(menu){
    orderList[menu.name] = {}
    orderList[menu.name]["price"] = menu.price
    orderList[menu.name]["id"] = menu.id
    orderList[menu.name]["count"] = 0
})
}
newOrderList()
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.addEventListener("click", function(e){
    const modal = document.getElementById("payment")
    const targetMenuObj = menuArray.filter(function(menu){
        return menu.id === Number(e.target.dataset.add) || menu.id === Number(e.target.dataset.remove) 
    })[0]
    if(e.target.dataset.add === "0"){
        totalBill += targetMenuObj.price 
        orderList[targetMenuObj.name]["count"] += 1
    } else if(e.target.dataset.add === "1"){
        totalBill += targetMenuObj.price 
        orderList[targetMenuObj.name]["count"] += 1
    } else if(e.target.dataset.add === "2"){
        totalBill += targetMenuObj.price 
        orderList[targetMenuObj.name]["count"] += 1
    } else if(e.target.dataset.remove === "0"){
        totalBill -= targetMenuObj.price 
        orderList[targetMenuObj.name]["count"] -= 1
    } else if(e.target.dataset.remove === "1"){
        totalBill -= targetMenuObj.price 
        orderList[targetMenuObj.name]["count"] -= 1
    } else if(e.target.dataset.remove === "2"){
        totalBill -= targetMenuObj.price 
        orderList[targetMenuObj.name]["count"] -= 1
    }
    
    if(e.target.id === "btn-order"){
        console.log(document.getElementById("payment"))
        modal.style.display = "inline"
    }
    
    if(e.target.id === "btn-pay"){
        console.log("pay")
        totalBill = 0
        customer = capitalizeFirstLetter( document.getElementById("customer-name").value)
        modal.style.display = "none"
        isOrdered = true
        newOrderList()
        e.preventDefault()
    }
    if(e.target.id === "modal-close-btn"){
        modal.style.display= "none"
    }
    render()
})


function getFeedHtml(){
    let feedHtml = ``

    menuArray.forEach(function(menu){
        // console.log(menu)
        feedHtml += `
        <div class="item">
            <p class="item-image">${menu.emoji}</p>
            <div class="contents">
                <h4 class="item-name">${menu.name}</h4>
                <span class="item-ingredients">${menu.ingredients}</span>
                <h4 class="item-price">$${menu.price}</h4>
            </div>
            <button class="btn-add" data-add="${menu.id}">+</button>
        </div>
        `
    })
    let orderHtml = ``

    if(isOrdered){
        orderHtml = `
        <div class="order-msg">Thanks, ${customer}! Your order is on its way!</div>
        `
    }
    if(totalBill){
        orderHtml += `
        <div class="orders">
        `
        for(let order in  orderList){
            if(orderList[order].count){
                orderHtml += `
                <div class="order">
                    <h4>${order}</h4>
                    <button class="remove" data-remove="${orderList[order].id}">remove</button>
                    <h4 class="order-price">$${orderList[order].price} x ${orderList[order].count}</h4>
                </div>
                `
            }
        }
        orderHtml += `
            </div>
            <div class="bill">
                <h4>Total price:</h4>
                <h4 class="bill-price">$${totalBill}</h4>
            </div>
            <button class="btn" id="btn-order">Complete order</button>
        `
    }
    feedHtml += orderHtml
    return feedHtml
}


function render(){
    document.getElementById("feed").innerHTML = getFeedHtml()
}

render()