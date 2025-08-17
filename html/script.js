function togglemode() {
    const html= document.documentElement
    html.classList.toggle('light')

    // pegar a tag imagem

    const img = document.querySelector("#profile img")

    //substituir imagem
    if(html.classList.contains('light')) {
   // se tiver light mode, adicionar a imagem light
   img.setAttribute('src','/assets/imagemluiz.png')
   
    } else {
        img.setAttribute('src','/assets/imagemluiz.png')
    }

   
} 