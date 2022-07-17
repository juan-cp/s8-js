document.body.appendChild(modal);
document.getElementById("clickModal").addEventListener('click',function(){
    document.querySelector(".modal").classList.add("show");

});
document.getElementById("save").addEventListener("click",function(){
    document.querySelector(".modal").classList.remove("show");
});