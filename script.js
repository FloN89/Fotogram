/* Fotogram – einfache Galerie mit Overlay */

const images = [
  "img/owl-8001879_1280.jpg",
  "img/waterfall-8350178_1280.jpg",
  "img/nature-3771378_1280.jpg",
  "img/dragonfly-7975259_1280.jpg",
  "img/mountains-7863214_1280.jpg",
  "img/mountains-8123933_1280.jpg",
  "img/pier-8091934_1280.jpg",
  "img/frog-8159829_1280.jpg",
  "img/white-faced-heron-7469267_1280.jpg",
  "img/sheep-7934078_1280.jpg",
  "img/chipmunk-6733055_1280.jpg",
  "img/fox-8308116_1280.jpg",
];

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  bindOverlayClose();
});

function renderGallery() {
  const gallery = document.getElementById("allImgs");
  gallery.innerHTML = "";
  images.forEach((src, index) => gallery.appendChild(createThumb(src, index)));
}

function createThumb(src, index) {
  const wrapper = document.createElement("div");
  wrapper.className = "smallImg";
  wrapper.addEventListener("click", () => openOverlay(index));

  const img = document.createElement("img");
  img.src = src;
  img.alt = `Galeriebild ${index + 1}`;
  wrapper.appendChild(img);
  return wrapper;
}

function openOverlay(index) {
  currentIndex = index;
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("d_none");
  overlay.setAttribute("aria-hidden", "false");
  overlay.innerHTML = createOverlayHtml();
  bindOverlayControls();
}

function closeOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.classList.add("d_none");
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = "";
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  refreshOverlay();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  refreshOverlay();
}

function refreshOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.innerHTML = createOverlayHtml();
  bindOverlayControls();
}

function createOverlayHtml() {
  return `
    <div class="imagesRender">
      <div class="imageBox" data-stop>
        <img src="${images[currentIndex]}" alt="Großansicht ${currentIndex + 1}" />
        <p>${currentIndex + 1} / ${images.length}</p>
        <div class="navButtons">
          <button id="prevBtn" type="button" aria-label="Vorheriges Bild">
            <img src="img/green-2304005_1280.png" alt="" />
          </button>
          <button id="nextBtn" type="button" aria-label="Nächstes Bild">
            <img src="img/green-2304007_1280.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  `;
}

function bindOverlayControls() {
  document.getElementById("prevBtn").addEventListener("click", stopAnd(showPrev));
  document.getElementById("nextBtn").addEventListener("click", stopAnd(showNext));
  document.querySelector("[data-stop]").addEventListener("click", (e) => e.stopPropagation());
}

function bindOverlayClose() {
  document.getElementById("overlay").addEventListener("click", closeOverlay);
}

function stopAnd(action) {
  return (event) => {
    event.stopPropagation();
    action();
  };
}
