document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });


function buscaserenazgo(){

let usuariop=document.getElementById("usuario");
let passwordp=document.getElementById("password");
let validador=false;

let ruta='./personal.json'
fetch(ruta)
.then(response=>response.json())
.then(data=>mostrardatos(data))
.then(error=>console.log(error))

const mostrardatos=(data)=>{

for(let i=0; i<data.length;i++){
if(data[i].usuario===usuariop.value && data[i].password===passwordp.value){
  validador=true;
  if(usuariop.value==="43234938" && passwordp.value==="43234938"){
    window.location.href="principal_mecanico.html";
  }else if(usuariop.value==="MJHONG" && passwordp.value==="MJHONG"){
    window.location.href="principal_gerente.html";
  }else if(usuariop.value==="AMURILLO" && passwordp.value==="AMURILLO"){
    window.location.href="principal_subgerente.html";
  }else if(usuariop.value==="CFARROMEQUE" && passwordp.value==="CFARROMEQUE"){
    window.location.href="principal_informatica.html";
  }else{
    if(data[i].turno==="MAÑANA"){
      window.location.href="principal_morning.html";
    }else if(data[i].turno==="TARDE"){
      window.location.href="principal_afternoon.html";
    }else if(data[i].turno==="NOCHE"){
      window.location.href="principal_night.html";
    }else{
      alert("NO TIENE TURNO EL SERENO ",data[i].name)
    }
  }
}
}
if(validador===false){
  
  usuariop.value="";
  passwordp.value="";

Swal.fire({
  position: "top-end",
  icon: "error",
  title: "Datos Incorrectos",
  showConfirmButton: false,
  timer: 1000
});
} 

}
}
