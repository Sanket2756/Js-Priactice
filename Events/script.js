let owl = document.getElementById('owl');
let Images = document.getElementById("images")
owl.addEventListener("click",(e)=>{
    alert("owl");
})

Images.addEventListener("click",(e)=>{
    if(e.target.tagName === 'IMG') e.target.parentNode.remove();
})