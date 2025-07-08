let images = [
`<img src="img/owl-8001879_1280.jpg">`,
`<img src="img/waterfall-8350178_1280.jpg">`,
`<img src="img/nature-3771378_1280.jpg">`,
`<img src="img/dragonfly-7975259_1280.jpg">`,
`<img src="img/mountains-7863214_1280.jpg">`,
`<img src="img/mountains-8123933_1280.jpg">`,
`<img src="img/pier-8091934_1280.jpg">`,
`<img src="img/frog-8159829_1280.jpg">`,
`<img src="img/white-faced-heron-7469267_1280.jpg">`,
`<img src="img/sheep-7934078_1280.jpg">`,
`<img src="img/chipmunk-6733055_1280.jpg">`,
`<img src="img/fox-8308116_1280.jpg">`,                
 ]    
function init() {
    let contentRef = document.getElementById("allImgs");
    contentRef.innerHTML = "";
    for (let index = 0; index < images.length; index++) {
        contentRef.innerHTML += template(index);
    }
}

function template(index) {
    return `<div class="smallImg" onclick="bigImg(${index})" onclick="addOverlayImg()">
                ${images[index]}
            </div>`
}

function bigImg(index) {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";
    contentRef.innerHTML += imagesRender(index);
    addOverlayImg();
}

function nextImage(index) {
    index++; 
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";   
    if (index >= images.length) {
        index = 0;
    } 
    contentRef.innerHTML += imagesRender(index);
}

function prevImage(index) {
    index--;
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";
    if (index < 0) {
        index = images.length - 1;
    }
    contentRef.innerHTML += imagesRender(index);
}

function toggleOverlayImg() {
    let overlayRef = document.getElementById("allImgs")
    overlayRef.classList.toggle("d_none")
}

function removeOverlayImg() {
    let overlayRef = document.getElementById("content")
    overlayRef.classList.add("d_none")
}

function addOverlayImg() {
    let overlayRef = document.getElementById("content")
    overlayRef.classList.remove("d_none")
    stopPropagation()
}

function imagesRender(index) {
    return `<div class="imagesRender" onclick="removeOverlayImg()">
                <div class="imageBox">
                        <button class="close" onclick="closeImage(${index}),stopPropagation()"><img src="img/multiply-303378_1280.png"></button>
                    ${images[index]}
                    <p>${index + 1} / ${images.length}</p>
                    <div>
                        <button onclick="prevImage(${index}),stopPropagation()"><img src="img/green-2304005_1280.png"></button>
                        <button onclick="nextImage(${index}),stopPropagation()"><img src="img/green-2304007_1280.png"></button>
                    </div>
                </div>
            </div>`

        }
function stopPropagation() {
   event.stopPropagation()
}

    