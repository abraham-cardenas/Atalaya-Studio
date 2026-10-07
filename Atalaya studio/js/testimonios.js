const testimonialsContainer = document.getElementById('testimonialsContainer');

async function cargarTestimonios() {

    try {

        const response = await fetch(
            'https://jsonplaceholder.typicode.com/comments?_limit=3'
        );

        if (!response.ok) {
            throw new Error('No fue posible obtener los testimonios.');
        }

        const data = await response.json();

        // Limpiamos "Cargando testimonios..."
        testimonialsContainer.replaceChildren();

        data.forEach((item) => {

            const article = document.createElement('article');
            article.classList.add('testimonial');

            const title = document.createElement('h3');
            title.textContent = item.name;

            const message = document.createElement('p');
            message.textContent = item.body;

            article.appendChild(title);
            article.appendChild(message);

            testimonialsContainer.appendChild(article);
        });

    } catch (error) {

        testimonialsContainer.textContent =
            'No fue posible cargar los testimonios.';

        console.error('Error al cargar testimonios:', error);
    }
}

cargarTestimonios();