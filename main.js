document.addEventListener("DOMContentLoaded", async function(event) {
    let date = new Date().getFullYear()
    document.getElementById('year').innerHTML = date

    let consulta = await fetch('https://api.unsplash.com/photos/?client_id=_n7_LVkcrHUocVS7Xo9yph5ppJ2t_h55nrAWz-WXf9s')
        .then(response => response.json())
        .then(data => data);
    
    handleImages(consulta)
});

const handleImages = (data) => {
    return data.map(i => {
        var capa = document.getElementById("container_images");
        var img = document.createElement("img");
        img.src = `${i.urls.regular}`
        capa.appendChild(img);
    })
}