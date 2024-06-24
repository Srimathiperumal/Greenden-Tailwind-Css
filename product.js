// Selection side navbar and menuIcon

var sidenav = document.getElementById("sidenav")
var menuIcon = document.getElementById("menuIcon")
var closenav = document.getElementById("closenav")
menuIcon.addEventListener("click",function()
{
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
// product search funtionality
var productContainer = document.getElementById("productContainer")
var search = document.getElementById("search")
  
    var productlist = productContainer.querySelectorAll("div")
    
    
    search.addEventListener("keyup",function()
{
    var enteredValue = event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1)
       
    {
        var productname = productlist[count].querySelector("p").textContent

        if(productname .toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"
        }
        else{   
            productlist[count].style.display="block"
        }
    }
})