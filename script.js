const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            section.classList.add("active");
        }

    });

});

const imagen = document.getElementById("zoomImg");

if(imagen){

    imagen.addEventListener("click", () => {

        if(imagen.classList.contains("zoom")){

            imagen.classList.remove("zoom");

        }else{

            imagen.classList.add("zoom");

        }

    });

}