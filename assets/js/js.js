let dangerClose = document.querySelector(".danger_Msg")
let infoClose = document.querySelector(".info_Msg")
let successClose = document.querySelector(".success_Msg")
let warningClose = document.querySelector(".warning_Msg")
let blur = document.querySelector(".blur")
let login = document.querySelector(".login_form")
let register = document.querySelector(".register_form")
let footer = document.querySelector(".footer_size")

let order = 0


 window.onclick = e => {
   //notification close 
    if(e.target.classList.contains("success_close")){
        e.target.parentNode.classList.add("hidden")
        
    }if(e.target.classList.contains("danger_close")){
        e.target.parentNode.classList.add("hidden")
        

    }if(e.target.classList.contains("info_close")){
        e.target.parentNode.classList.add("hidden")
        

    }if(e.target.classList.contains("warning_close")){
        e.target.parentNode.classList.add("hidden")
        

    }
    console.log(e.target.classList)
    //show notifications

    if(e.target.classList.contains("warning") && warningClose.classList.contains("hidden")){
        warningClose.classList.remove("hidden")
        warningClose.style.order = order
        order ++
        
    }
    if(e.target.classList.contains("success") && successClose.classList.contains("hidden")){
        successClose.classList.remove("hidden")
        successClose.style.order = order
        order ++
        
    }
    if(e.target.classList.contains("info") && infoClose.classList.contains("hidden")){
        infoClose.classList.remove("hidden")
        infoClose.style.order = order
        order ++
        
    }
    if(e.target.classList.contains("danger") && dangerClose.classList.contains("hidden")){
        dangerClose.classList.remove("hidden")
        dangerClose.style.order = order
        order ++
        
    }

    //login / Register form

    if(e.target.classList.contains("login")){
        blur.classList.remove("hidden")
        login.classList.remove("hidden")

    }
    if(e.target.classList.contains("size_close_sym")){
        e.target.parentNode.parentNode.classList.add("hidden")
        blur.classList.add("hidden")
    }
    if(e.target.classList.contains("register")){
        register.classList.remove("hidden")
        blur.classList.remove("hidden")
    }
    if(e.target.innerHTML =="Licence"){
       footer.classList.remove("hidden") 
       blur.classList.remove("hidden")
       
    }
}

// document.querySelector("#register").addEventListener("click", (a)=>{
//     console.log(a.target)
// })