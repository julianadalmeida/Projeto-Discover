function toggleMode() {
  const html=document.documentElement
  html.classList.toggle ("light")

  //Pegar a Tag img//  
const img = document.querySelector ("#profile img")

  //Substituir a imagem//
if (html.classList.contains("light")) {

  //Se tiver light mode, adicionar a imagem light//
  img.setAttribute("src", './assets/avatar-light@2x.png')
}

else {

  //Se tiver sem light mode, mater a imagem normal//
  img.setAttribute("src", './assets/Avatar.png')
}

}