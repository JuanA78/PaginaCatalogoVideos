const listaVideos=[
    {titulo:'Recorrido de parkour',descripcion:'Mejor recorrido de esta persona',url:'Multimedia/VideoDesplazamiento.mp4'},
    {titulo:'Competencia de parkour',descripcion:'Competencia en España de parkour',url:'Multimedia/VideoCompe.mp4'},
    {titulo:'Tutorial del 360',descripcion:'Paso a paso de como hacer el 360',url:'Multimedia/VideoTutorial.mp4'}
];

var catalogoVideos=document.getElementById("cat");



function mostarCatalogoVideos (videosMostrados){
    catalogoVideos.innerHTML='';
    videosMostrados.forEach(function(indexVideo)  {
        var filaVideo=document.createElement('div');

         var columna1Video=document.createElement('div');
         var urlVideo=document.createElement('video');

         filaVideo.setAttribute('class','row mt-1');
         columna1Video.setAttribute('class','col');


         urlVideo.setAttribute('src',indexVideo.url);
         urlVideo.setAttribute('width','400px');
         urlVideo.setAttribute('height','400px');
         urlVideo.setAttribute('controls',"");

         columna1Video.appendChild(urlVideo);
         filaVideo.appendChild(columna1Video);

var col2Titulo=document.createElement('div');
var h4Titulo=document.createElement('h4');
var h6Des=document.createElement('h6');
col2Titulo.setAttribute('class','col');

h4Titulo.textContent=indexVideo.titulo;
h6Des.textContent=indexVideo.descripcion;

col2Titulo.appendChild(h4Titulo);
col2Titulo.appendChild(h6Des);
filaVideo.appendChild(col2Titulo);


var col3Icono=document.createElement('div');
var svg=document.createElement('svg');
var path=document.createElement('path');
col3Icono.setAttribute('class','col');
svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
svg.setAttribute('width','32');
svg.setAttribute('height','32');
svg.setAttribute('fill','currentColor');
svg.setAttribute('class','bi bi-heart');
svg.setAttribute('viewBox','0 0 16 16');
svg.setAttribute('d','m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15');

         catalogoVideos.appendChild(filaVideo);
    });
}

function buscarVideos() {
    var contenidoBuscar=document.getElementById('buscar').value;
    var videosBuscados= listaVideos.filter(
        function(indexVideo){
            return indexVideo.titulo.toLowerCase().includes(contenidoBuscar);
        }
    );
    mostarCatalogoVideos(videosBuscados);
}

mostarCatalogoVideos(listaVideos);