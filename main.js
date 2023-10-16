document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const repositorio = document.getElementById('repos');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const link = document.getElementById('link');

    fetch('https://api.github.com/users/Gonteejo')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        username.innerText = json.login;
        repositorio.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        link.href = json.html_url;
    })

});