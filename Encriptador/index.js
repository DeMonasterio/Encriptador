// const texto = document.querySelector('.textarea--secondary');
// console.log(texto);

const btnPrimary = document.getElementById("btn-encriptar"),
      btnSecondary = document.getElementById("btn-desencriptar"), 
      btnCopy = document.getElementById('btn-copy');
      
btnPrimary.onclick = encriptar;
btnSecondary.onclick = desencriptar;
btnCopy.onclick = copiar;



function encriptar (){
    const texto = document.getElementById("areatext").value;
    // const textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    
    // document.querySelector('.msg__paragraph').innerText = textoCifrado;
    // document.querySelector("#areatext").value;
    
    if(texto === ''){
        const title = document.querySelector(".msg__title");
        const paragraph = document.querySelector('.msg__paragraph');
        document.querySelector('.msg__paragraph').innerText = "Ingresa el texto que desees encriptar o desencriptar.";
        
        title.classList.remove("msg__title--disable");
        paragraph.classList.remove("msg__paragraph--size");
        btnCopy.classList.add("btn--disabled");
    }
    else
    {
        const textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector('.msg__paragraph').innerText = textoCifrado;
        document.querySelector("#areatext").value;


        const title = document.querySelector(".msg__title");
        const paragraph = document.querySelector('.msg__paragraph');

        title.classList.add("msg__title--disable");
        paragraph.classList.add("msg__paragraph--size");
        btnCopy.classList.remove("btn--disabled");
        
        const dollimage = document.querySelector("#imagen__muñeco");
        dollimage.classList.add("imagen__disabled");

    };
};


    
    
// function desencriptar (){ 
//     const texto = document.querySelector("#areatext").value; 
    
//     if(texto === '')
//     {
//         const title = document.querySelector(".msg__title");
//         const paragraph = document.querySelector('.msg__paragraph');
//         paragraph.innerText = "Ingresa el texto que desees encriptar o desencriptar.";
        
        
//         title.classList.remove("msg__title--disable");
//         btnCopy.classList.add("btn--disabled");
//         paragraph.classList.remove("msg__paragraph--size");
        
//     } 
//     else
//     {

//         // Hay que hacer otra comprobacion de si no hay nada para reemplazar 

//         const textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
//         const paragraph = document.querySelector('.msg__paragraph');
//         document.querySelector('.msg__paragraph').innerText = textoCifrado;
//         document.querySelector("#areatext").value;
    
//         const title = document.querySelector(".msg__title");
//         title.classList.add("msg__title--disable");
//         paragraph.classList.add("msg__paragraph--size");

//         btnCopy.classList.remove("btn--disabled");
//     };
// };

function desencriptar() {
    const texto = document.querySelector("#areatext").value;
  
    if (texto === '') {
      // Si no hay texto ingresado, mostramos un mensaje de advertencia
      const title = document.querySelector(".msg__title");
      const paragraph = document.querySelector('.msg__paragraph');
      paragraph.innerText = "Ingresa el texto que desees encriptar o desencriptar.";
  
      title.classList.remove("msg__title--disable");
      btnCopy.classList.add("btn--disabled");
      paragraph.classList.remove("msg__paragraph--size");


      
      const dollimage = document.querySelector("#imagen__muñeco");
      dollimage.classList.remove("imagen__disabled");

  
    } else if (texto.includes("enter") || texto.includes("imes") || texto.includes("ai") || texto.includes("ober") || texto.includes("ufat")) {
      // Si el texto contiene alguna de las palabras clave de encriptación, procedemos con la desencriptación
      const textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
      const paragraph = document.querySelector('.msg__paragraph');
      document.querySelector('.msg__paragraph').innerText = textoCifrado;
      document.querySelector("#areatext").value;
  
      const title = document.querySelector(".msg__title");
      title.classList.add("msg__title--disable");
      paragraph.classList.add("msg__paragraph--size");
  
      btnCopy.classList.remove("btn--disabled");
    } else {

      // Si el texto no necesita desencriptación, mostramos un mensaje indicando esto
      
      const dollimage = document.querySelector("#imagen__muñeco");
      dollimage.classList.remove("imagen__disabled");

      const title = document.querySelector(".msg__title");
      const paragraph = document.querySelector('.msg__paragraph');
      paragraph.innerText = "El texto no necesita desencriptación.";
  
      title.classList.remove("msg__title--disable");
      btnCopy.classList.add("btn--disabled");
      paragraph.classList.remove("msg__paragraph--size");
    }
  };





function copiar() {
    /* Obtener el elemento del párrafo que deseas copiar */
    const parrafo = document.querySelector(".msg__paragraph");
  
    /* Crear un elemento de textarea temporal */
    const textareaTemp = document.createElement("textarea");
  
    /* Establecer el valor del textarea al texto del párrafo */
    textareaTemp.value = parrafo.innerText;
  
    /* Agregar el textarea al documento */
    document.body.appendChild(textareaTemp);
  
    /* Seleccionar todo el texto en el textarea */
    textareaTemp.select();
  
    /* Copiar el texto al portapapeles */
    document.execCommand("copy");
  
    /* Eliminar el textarea temporal */
    document.body.removeChild(textareaTemp);
};
  

const textarea = document.getElementById("textarea");

textarea.addEventListener("input", e =>{
    // Establece la altura del textarea según el contenido y el número de líneas
    textarea.style.height = textarea.scrollHeight + "px";

});
