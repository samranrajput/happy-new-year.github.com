document.addEventListener("DOMContentLoaded",function() {
    
    const countdown = document.getElementById("countdown");
    const colot = ["white","gray"];
    let ndexs = 0;

    setInterval(function() {
        countdown.style.color = colot[ndexs];
        ndexs = (ndexs + 1) % colot.length;
    }, 1000);

    const countDownDate = new Date("January 1, 2024 00:00:00 UTC").getTime();

    const x = setInterval(function() {
        const textcElement = document.getElementById("textc")
          textcElement.innerHTML = ""; 
    
        const now = new Date().getTime();

        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " 
        + minutes + "m " + seconds + "s ";
        countdown.style.fontFamily = "'Dhurjati', sans-serif";

        if (distance < 0) {

            const textz = document.getElementById("textz");
            const coloi = ["red", "green", "blue", "orange", "purple",'gray','pink',"blueviolet",
            "chartreuse","darkorange","darkslategrey","yellow","pink","#1fdaab","#1c056d"];
            let ndexsm = 0;

            setInterval(function() {
                textz.style.color = coloi[ndexsm];
                ndexsm = (ndexsm + 1) % coloi.length;
            }, 1000);

            const countdown = document.getElementById("countdown");
    const colot = ["red", "green", "blue", "orange", "purple",'gray','pink',
    "blueviolet","chartreuse","darkorange","darkslategrey","yellow","pink","#1fdaab",
    "#1c056d"];
    let ndexs = 0;

    setInterval(function() {
        countdown.style.color = colot[ndexs];
        ndexs = (ndexs + 1) % colot.length;
    }, 1000);

            const changingText = document.getElementById("changingText");
    const colors = ["red", "green", "blue", "orange", "purple",'black','gray','pink',
    "blueviolet","chartreuse","darkorange","darkslategrey","yellow","pink","#1fdaab",
    "#1c056d"];
    let index = 0;

    setInterval(function() {
        changingText.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);

    const s1 = document.getElementById("s1");
    const colore = ["red", "green", "blue", "orange", "purple",'black','gray','pink',
    "blueviolet","chartreuse","darkorange","darkslategrey","yellow","pink","#1fdaab",
    "#1c056d"];
    let ndex = 0;

    setInterval(function() {
        s1.style.color = colore[ndex];
        ndex = (ndex + 1) % colore.length;
    }, 1000);

    const text = document.getElementById("text");
    const colorj = ["red", "green", "blue", "orange", "purple",'gray','pink',"blueviolet",
    "chartreuse","darkorange","darkslategrey","yellow","pink","#1fdaab","#1c056d"];
    let ndel = 0;

    setInterval(function() {
        text.style.color = colorj[ndel];
        ndel = (ndel + 1) % colorj.length;
    }, 1000);

    const textv = document.getElementById("textb");
    const colorb = ["red", "green", "blue", "orange", "purple",'gray','pink',"blueviolet",
    "chartreuse","darkorange","darkslategrey","yellow","pink","#1fdaab","#1c056d"];
    let ndeb = 0;

    setInterval(function() {
        textv.style.color = colorb[ndeb];
        ndeb = (ndeb + 1) % colorb.length;
    }, 1000);

    
            clearInterval(x);
            const countdownElement = document.getElementById("countdown")
            countdownElement.innerHTML = "HAPPY NEW YEAR"; 
            countdownElement.style.marginLeft = "60px";
            countdownElement.style.marginTop = "-30px";

            function run() {
                countdownElement.classList.add("running-text-animation");
            }
        
            setTimeout(run,1);

            const textbElement = document.getElementById("textb")
            textbElement.innerHTML = "2024"; 
            textbElement.style.fontFamily = "'Dhurjati', sans-serif";
            textbElement.style.marginLeft = "145px";
            textbElement.style.fontSize = "35px";
            function runb() {
                textbElement.classList.add("running-text-animation");
            }
        
            setTimeout(runb,1);

            const textElement = document.getElementById("text");
            textElement.innerHTML = "Na koi gum ka lamha <br> &nbsp;&nbsp;&nbsp;&nbsp; kisi k pass aye <br> Khuda\
            kare naya saal <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sub ko raz aye";
            textElement.style.fontSize = "25px";
            textElement.style.marginLeft = "65px";

            function runLetters() {
                textElement.classList.add("running-text-animation");
            }
        
            setTimeout(runLetters,1);
            
            const fireworksContainer = document.getElementById("fireworks-container");

    function createFirework() {
        const firework = document.createElement("div");
        firework.className = "firework";
        fireworksContainer.appendChild(firework);

        const colors = ["red","aqua", "blue","blueviolet","chartreuse","darkorange",
        "darkslategrey","yellow","pink","#1fdaab","#1c056d"]

        const color = colors[Math.floor(Math.random() * colors.length)];
        firework.style.backgroundColor = color;

        const left = Math.random() * 100 + "vw";
        const top = Math.random() * 30 + 70 + "vh";
        firework.style.left = left;
        firework.style.top = top;

        setTimeout(() => {
            firework.remove();
        }, 2000);
    }
    

    setInterval(createFirework, 108);
        }
    }, 1000);
});
