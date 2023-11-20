const gallery = document.getElementById('gallery');

for (let i = 1; i <= 24; i++) {
    const img = document.createElement('img');
    img.src = `covers/p${i}.jpg`;
    img.classList.add('gallery-img');
    img.setAttribute('data-bs-toggle', 'modal');
    img.setAttribute('data-bs-target', '#imageModal');
    img.onclick = function () {
        document.getElementById('modalImage').src = this.src;
    };
    gallery.appendChild(img);
}