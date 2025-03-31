function showDetails(projectId) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const relatedImages = document.getElementById('related-images');
    
    // Aquí se definen las imágenes relacionadas de cada proyecto
    const projectData = {
        1: ["hero.webp", 'Planos.png', 'planos.webp', 'planos 2.png'],
        2: ['related5.jpg', 'related6.jpg', 'related7.jpg', 'related8.jpg'],
        3: ['related9.jpg', 'related10.jpg', 'related11.jpg', 'related12.jpg'],
        4: ['related13.jpg', 'related14.jpg', 'related15.jpg', 'related16.jpg'],
        5: ['related17.jpg', 'related18.jpg', 'related19.jpg', 'related20.jpg'],
        6: ['related21.jpg', 'related22.jpg', 'related23.jpg', 'related24.jpg'],
        7: ['related25.jpg', 'related26.jpg', 'related27.jpg', 'related28.jpg'],
        8: ['related29.jpg', 'related30.jpg', 'related31.jpg', 'related32.jpg'],
        9: ['related33.jpg', 'related34.jpg', 'related35.jpg', 'related36.jpg'],
        10: ['related37.jpg', 'related38.jpg', 'related39.jpg', 'related40.jpg']
    };

    modal.style.display = 'flex';  // Mostrar el modal

    // Establecer la imagen principal del modal (la primera imagen del proyecto)
    modalImage.src = `imagenes/${projectData[projectId][0]}`;

    // Limpiar imágenes relacionadas previas
    relatedImages.innerHTML = '';

    // Agregar imágenes relacionadas
    projectData[projectId].forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = `imagenes/${img}`;
        imgElement.classList.add('thumbnail');  // Agregar clase para las miniaturas
        relatedImages.appendChild(imgElement);

        // Agregar evento de clic en cada imagen pequeña
        imgElement.onclick = function() {
            modalImage.src = this.src;  // Cambiar la imagen principal al hacer clic
        };
    });
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
