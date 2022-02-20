console.log(0);
document.querySelectorAll(".drop-zone--input").forEach(inputElement => {
    const dropZoneElement = inputElement.closest(".drop-zone"); 
    console.log(1);
    dropZoneElement.addEventListener("dragover",e =>{
        dropZoneElement.classList.add("drop-zone--over");
    });
});