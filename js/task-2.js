const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];


const gallery = document.querySelector(".gallery");

const galleryItems = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-image"></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryItems);

const style = document.createElement("style");
style.textContent = `
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center;
  }

  .gallery-item {
    flex: 1 1 calc(33.333% - 16px);
    max-width: 360px;
    
    box-sizing: border-box;
  }

  .gallery-image {
    width: 100%;
    height: auto;
    display: block;
    // border-radius: 8px;
    // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    // transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  // .gallery-image:hover {
  //   // transform: scale(1.05);
  //   box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  // }
`;

document.head.appendChild(style);

