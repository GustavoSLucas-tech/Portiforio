function buscarPerfil(){

document.getElementById("loading").style.display="block";

document.getElementById("resultado").innerHTML="";

fetch("http://127.0.0.1:8000/api/perfil")

.then(response => response.json())

.then(data => {

document.getElementById("loading").style.display="none";

document.getElementById("statusAPI").innerHTML = "API Status: 🟢 Online";

document.getElementById("resultado").innerHTML =

"<h2>" + data.nome + "</h2>" +

"<h3>" + data.cargo + "</h3>" +

"<p>" + data.sobre + "</p>";

let skillsHTML = "<h3>Skills:</h3>";

data.skills.forEach(skill => {

let icone = "💻";

if(skill == "Python") icone="🐍";
if(skill == "HTML") icone="🌐";
if(skill == "CSS") icone="🎨";
if(skill == "JavaScript") icone="⚡";
if(skill == "FastAPI") icone="🚀";

skillsHTML +=

"<span class='skill'>" +

icone + " " + skill +

"</span>";

});

document.getElementById("resultado").innerHTML += skillsHTML;

let experienciaHTML = "<h3>Experiência:</h3>";

data.experiencia.forEach(exp => {

experienciaHTML +=

"<div class='card'>" +

"<b>" + exp.empresa + "</b><br>" +

exp.cargo + "<br>" +

"<small>" + exp.ano + "</small>" +

"</div>";

});

document.getElementById("resultado").innerHTML += experienciaHTML;

let projetosHTML = "<h3>Projetos:</h3><ul>";

data.projetos.forEach(proj => {

projetosHTML += "<li>" + proj + "</li>";

});

projetosHTML += "</ul>";

document.getElementById("resultado").innerHTML += projetosHTML;

})

.catch(error => {

document.getElementById("loading").style.display="none";

document.getElementById("statusAPI").innerHTML =

"API Status: 🔴 Offline";

document.getElementById("resultado").innerHTML =

"Erro ao carregar perfil";

console.log(error);

});

}