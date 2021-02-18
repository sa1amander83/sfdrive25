const collapse = function (){
const coll = document.getElementsByClassName("collapse");
let i;
for(i = 0;i<coll.length;i++){
    coll[i].addEventListener("click",function(){
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight = null;
            content.classList.remove("style-active");
        }else{
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add("style-active");
        }
    });
}}
document.addEventListener("DOMContentLoaded",collapse);

export default collapse;