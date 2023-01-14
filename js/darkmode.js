function darkmode() {
    // Get the checkbox
    var checkBox = document.getElementById('darkmode-checkbox');
    var body = document.getElementById('body');
    var backGround = document.getElementById('content');
    var banner = document.getElementById('home');
    var footer = document.getElementById('footer');
    var footerImage = document.getElementById('footer-image')
    var home = document.getElementById('home')

// If the checkbox is checked, display the output text
if (checkBox.checked == true){
    backGround.style.background = "rgb(40,40,40)";
    body.style.background = "#001a33";
    banner.style.background = "#001a33";
    footer.style.background = "#001a33";
    footerImage.style.background = "#001a33";
    home.style.background = "#rgb(60,60,60)";
    console.log ("toggling dark mode");
  } else {
    backGround.style.background = "rgb(130,130,130)";
    body.style.background = "rgb(230,230,230)";
    banner.style.background = "rgb(0, 45, 128)";
    footer.style.background = "rgb(0, 45, 128)";
    footerImage.style.background = "rgb(0, 45, 128)";
    home.style.background = "#rgb(150,150,150)";
    console.log ("toggling light mode");
  }
}