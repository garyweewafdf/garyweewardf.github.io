window.onload = function run(){
    const images = ['Url(Images/Slideshow/Made1.png)', 'Url(Images/Slideshow/Made2.png)', 'Url(Images/Slideshow/Made3.png)', 'Url(Images/Slideshow/Made4.png)'];

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    async function Counter() {
        document.getElementById("slideshowImg").style.background = images[0];
        document.getElementById("slideshowImg").style.backgroundPosition = "center";
        document.getElementById("slideshowImg").style.backgroundSize = "cover";
        while(true){ // Infinite Loop
            await delay(5000); // 6500 milliseconds (6.5 seconds)
                document.getElementById("slideshowImg").style.background = images[1];
                document.getElementById("slideshowImg").style.backgroundPosition = "center";
                document.getElementById("slideshowImg").style.backgroundSize = "cover";
            await delay(5000);
                document.getElementById("slideshowImg").style.background = images[2];
                document.getElementById("slideshowImg").style.backgroundPosition = "center";
                document.getElementById("slideshowImg").style.backgroundSize = "cover";
            await delay(5000); 
                document.getElementById("slideshowImg").style.background = images[3];
                document.getElementById("slideshowImg").style.backgroundPosition = "center";
                document.getElementById("slideshowImg").style.backgroundSize = "cover";
            await delay(5000); 
                document.getElementById("slideshowImg").style.background = images[0];
                document.getElementById("slideshowImg").style.backgroundPosition = "center";
                document.getElementById("slideshowImg").style.backgroundSize = "cover";
        }
    }
    Counter();
}
