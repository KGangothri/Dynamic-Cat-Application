function switchOFF(){
    document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent="Switched Off";
    document.getElementById("bg-color1").style.backgroundColor="#cbd2d9";
    document.getElementById("bg-color2").style.backgroundColor="#22c55e";
    
}

function switchON(){
    document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent="Switched On";
    document.getElementById("bg-color1").style.backgroundColor="red";
    document.getElementById("bg-color2").style.backgroundColor="#cbd2d9";
}