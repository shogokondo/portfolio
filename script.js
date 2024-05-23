let humBtn = document.getElementById("hum-btn");
let humBar = document.getElementById("hum-bar");
let floatBack = document.getElementById("floating-background");
let floatBackImg = document.getElementById("floating-background-image");
humBtn.addEventListener("click",()=>{
    humBar.classList.toggle("show")
})

window.addEventListener('scroll', function() {
    // ページ上部からのスクロール量を取得
    const scrolledPixels = window.scrollY;
    console.log(scrolledPixels)
    if(scrolledPixels > 2800){
        floatBack.className = "floating-background img-back";
    }else if(scrolledPixels > 1500){
        floatBack.className = "floating-background works-back";
    }else if(scrolledPixels > 300){
        floatBack.className = "floating-background img-back";
    }else{
        floatBack.className = "floating-background top-back";
    }

    if(scrolledPixels > 2050){
        floatBackImg.className = "floating-background-image img-back-2";
    }else{
        floatBackImg.className = "floating-background-image img-back-1";
    }
});