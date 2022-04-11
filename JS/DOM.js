const heart = document.getElementsByClassName("fas fa-heart") 
console.log (heart)
for (let i = 0; i < heart.length; i++) {
    heart [i].onclick=function(){
        if (!this.style.color){
        this.style.color = "red"
        console.log (this.style.color)
        } else {
            this.style.color = ""

        }
    }
    
}

const btnPlus = document.getElementsByClassName("plus")
const tab= []
for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].onclick = function () {
        this.previousElementSibling.value++
        this.previousElementSibling.previousElementSibling.removeAttribute("disabled")

        let oldPrice = this.parentElement.parentElement.nextElementSibling.textContent.split("$")[0].replace(",", ".")
        let newPrice = oldPrice / (this.previousElementSibling.value - 1) * this.previousElementSibling.value;
        let sum=oldPrice*this.previousElementSibling.value
       
        tab[i]=sum
        console.log('total',document.getElementsByClassName('Total'))
        document.getElementsByClassName("Total")[0].innerText=tab.reduce((prev,items)=>prev+items,0).toFixed(2)+" $"
        if (!Number(this.previousElementSibling.value)) {
            alert("please enter a number")
            this.previousElementSibling.value = 1
        }

    }

}



const btnTrash = document.getElementsByClassName ("fas fa-trash")
console.log (btnTrash)
for (let i = 0; i < btnTrash.length; i++) {
    btnTrash[i].addEventListener("click", function(){
         (btnTrash[i].parentNode.parentNode).remove()

    })
    
}
const btnMoins = document.getElementsByClassName("moins")
console.log(btnMoins)
for (let i = 0; i < btnMoins.length; i++) {
    btnMoins[i].onclick = function () {
        if (this.nextElementSibling.innerHTML > 1) {
            this.nextElementSibling.innerHTML--
            console.log(this.nextElementSibling.innerHTML)
            const oldPrice= document.getElementsByClassName("amount")[i].innerHTML.split("$")[0].replace(",", ".")
            console.log(oldPrice,Number(this.nextElementSibling.innerHTML)+1)
            let Price = oldPrice / (Number(this.nextElementSibling.innerHTML) +1)* this.nextElementSibling.innerHTML
            console.log(Price)
            document.getElementsByClassName("amount")[i].innerHTML = Price.toString().replace(".", ",") + " $"
            let amounts=document.getElementsByClassName("amount")
            console.log(amounts)
            let subTotal =0;
            for (let index = 0; index < amounts.length; index++) {
                const element = Number(amounts[index].innerHTML.split("$")[0].replace(",", "."));
                console.log(element)
                subTotal+=element
            }
            console.log(subTotal,    document.getElementsByClassName("total-amount")[0])
            document.getElementsByClassName("total-amount")[0].innerHTML = subTotal.toString().replace('.', ',') + ' $';
    
        }
        else {
            this.setAttribute('disabled', '');
            console.log(this)
        }

    }


}
const badge = document.querySelector(".badge")
badge.innerHTML = btnPlus.length

const prixTotalCalcul = document.getElementsByClassName ("Prix")
console.log (prixTotalCalcul) 
for(let i =0; i< prixTotalCalcul.length; i++) {

}

    
