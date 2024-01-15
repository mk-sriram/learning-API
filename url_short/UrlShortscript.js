
const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortUrl)

function shortUrl(){
    console.log("the button workds shortURL");
    var originalUrl = document.getElementById('originalURL').value; 
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    var shortendedUrltextarea = document.getElementById('shortenedUrl');
    fetch(apiUrl).then(response => response.text()).then(
       
        data => {
            shortendedUrltextarea.value = data;
        }
    ).catch(error => {
        shortendedUrltextarea.value = "Error : Unable to short Url"
    })
    
}

reloadBtn.addEventListener('click', ()=>{
    console.log("the button workds relaodBtn");
    location.reload();
})