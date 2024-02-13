const catalogo = [
    {
      id: 1,
      nome: "Nike LiteStride",
      marca: `marca:  nike`,
      preco: `preço: $100`,
      nomeArquivoImagem: "nike-RED-Sb-Skateboard-Chron-Slr-red-White.webp",
    }, 

    {
      id: 2,
      nome: "Nike AirFlex Precision",
      marca: `marca:  nike`,
      preco: `preço: $340`,
      nomeArquivoImagem:"844369-104-nike.jpg"
    },

    {
      id:3,
      nome: "Nike Air Velocity Boost",
      marca:`marca:  nike`,
      preco: `preço: $300`,
      nomeArquivoImagem:"ee53a4e86c775518e37e453ed3e08912.jpg"
    },

    {
      id:4,
      nome: "Nike Aero Surge Elite",
      marca:`marca:  nike`,
      preco: `preço: $250`,
      nomeArquivoImagem:"dn4150-001-m1.jpg"
  },
   
    {
      id:5,
      nome:"Nike Infinite Stride",
      marca:`marca:  nike`,
      preco: `preço: $420`,
      nomeArquivoImagem:"2023-10-23-16-40-49-502429-2b104e2a7ebcb2a10b93ab5c762bf7ff.webp"
    },

    {
      id:6,
      nome: " nike jordan 5",
      marca: `marca:  nike`,
      preco: `preço: $520`,
      nomeArquivoImagem:"78dd497638322bd4c6abee0ebed63b96_1x.jpg"
    },          
]



for( const produtoCatalogo of catalogo){
   const cartaoProduto = ` <div class="card">
    <div id="image">
    <img src="img/${produtoCatalogo.nomeArquivoImagem}" alt="" style="width: 220px; 
    height: 300px;">
      <span class="title">${produtoCatalogo.marca}</span>
      <span class="name">${produtoCatalogo.nome}</span>
      <span class="price">${produtoCatalogo.preco}</span>
      <div id="image">
    </div>`
  document.getElementById("card-container").innerHTML += cartaoProduto
  }

  const catalogoAdidas = [
    {
      id: 7,
      nome: "Adidas FlexFit",
      marca: `marca: adidas`,
      preco: `preço: $250`,
      nomeArquivoImagem1: "hUYPPr7Sp1cnakmg.jpg"
    },

    {
      id: 8,
      nome: "Adidas Ultraboost",
      marca: `marca: adidas`,
      preco: `preço: $200`,
      nomeArquivoImagem1: "4e52dab0fb75f69458577bc968b2c6a0.jpg"
    },

    {
      id: 9,
      nome: "Adidas EasyStride",
      marca: `marca: adidas`,
      preco: `preço: $300`,
      nomeArquivoImagem1: "108gy1332_1.jpg"
    },

    {
      id: 10,
      nome: "Adidas LiteRun",
      marca: `marca: adidas`,
      preco: `preço: $180`,
      nomeArquivoImagem1: "36822529-adidas-busenitz-low-top-sneakers.jpg"
    },

    {
      id: 11,
      nome: "Adidas CloudWalk",
      marca: `marca: adidas`,
      preco: `preço: $220`,
      nomeArquivoImagem1: "CG6026_1200x.jpg"
    },

    {
      id: 12,
      nome: "Adidas UrbanGrip",
      marca: `marca: adidas`,
      preco: `preço: $260`,
      nomeArquivoImagem1: "e28026cf97a03920020a984ec95436c8.jpg"
    },  
];

for (const produtoCatalogo2 of catalogoAdidas) {
    const cartaoProdutoAdidas = `<div class="card-adidas">
    <div id="image">
    <img src="img/${produtoCatalogo2.nomeArquivoImagem1}" alt="" style="width: 220px; height: 300px; margin-top:-80px">
    <span class="title">${produtoCatalogo2.marca}</span>
    <span class="text">${produtoCatalogo2.nome}</span>
    <span class="price">${produtoCatalogo2.preco}</span>
    <div id="image">
    </div>`

    document.querySelector(".card-container-adidas").innerHTML += cartaoProdutoAdidas;
}