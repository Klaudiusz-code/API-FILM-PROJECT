const slider = document.querySelector('.swiper-wrapper');


async function movies() {
    try {
        let arrayFilm = [];

        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();

        data.forEach(show => {
            const {image: {medium}} = show;
            arrayFilm.push({medium});
        });

        arrayFilm.forEach(el => {
            const box = document.createElement('div');
            box.classList.add('swiper-slide');

            const image = document.createElement('div')
            image.classList.add('image')

            const slide = document.createElement('img')
            slide.classList.add('img')
            slide.src = el.medium

            box.appendChild(image)
            image.appendChild(slide)
            slider.appendChild(box);
        });
    } catch (err) {
        console.error('Error', err)
    }
}
movies();