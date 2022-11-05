
$('#Nav_Home').on('click', function(event) {
document.getElementById('Home_Page').style.display = "block";
document.getElementById('About_Page').style.display = "none";
document.getElementById('About_Page_Section').style.display = "none";


});

$('#Nav_About').on('click', function(event) {
document.getElementById('Home_Page').style.display = "none";
document.getElementById('About_Page').style.display = "block";
document.getElementById('About_Page_Section').style.display = "block";
});

