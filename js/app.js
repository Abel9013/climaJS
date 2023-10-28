const container = document.querySelector(".container")
const resultado = document.querySelector("#resultado")
const formulario = document.querySelector("#formulario")

window.addEventListener("load",()=>{
  formulario.addEventListener("submit", buscarClima)
} )

function buscarClima(e){
  e.preventDefault()
  // validar
  const ciudad = document.querySelector("#ciudad").value;
  const pais = document.querySelector("#pais").value;
  if(ciudad=== "" || pais===""){
    mostrarError("Ambos campos son obligatorios")
    return
  }

}

function mostrarError(mensaje){
  console.log(mensaje);
}