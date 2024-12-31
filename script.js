var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('toggler');
var home = document.getElementById('home');
var iframeToggler = document.getElementById('iframes-toggler');
var iframeContainer = document.getElementById('iframes-container');
var workFrame = document.getElementById('work-frame');
var graphicsToggler = document.getElementById('graphicsToggler');
var systemsToggler = document.getElementById('systemsToggler');
var gamesToggler = document.getElementById('gamesToggler');
var btnCloseIframe = document.getElementById('btn-close-iframe');

    darkMode.addEventListener("click", function() {
        darkMode.classList.toggle('active');
        content.classList.toggle('dark-mode');
        // home.classList.toggle('bg-dark');
    });

    btnCloseIframe.addEventListener("click", ()=>{
        iframeContainer.classList.remove('iframes-active');
        workFrame.src="";
        window.location = "index.html#works";
        content.style.position = "unset";
        
    });

    graphicsToggler.addEventListener("click", ()=>{
        iframeContainer.classList.add('iframes-active');
        workFrame.src = "graphics.html";
        content.style.position = "fixed";
    });