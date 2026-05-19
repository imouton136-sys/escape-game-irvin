fetch("a.json")
    .then(rep => {
        return rep.json()
    })
    .then(data => {
        console.log(data)
        afficheactivite(data.activites)
        affichetemoignage(data.temoignages)
    })
//role afficher activite
//activite
//return
function afficheactivite(activite) {
    activite.forEach(act => {
        let utilisateuractivite = `
            
                <div class="card-black color-rouge">
                    <img class="width-100" src="${act.image}" alt="">
                    <h2>${act.nom}</h2>
                    <p>${act.description}</p>
                </div>
               
            `
        document.querySelector("#scenario-contain").innerHTML += utilisateuractivite
    })
};
//role afficher temoignage
//parametre temoignage
//return
function affichetemoignage(temoignage) {
    temoignage.forEach(tem => {
        let utilisateurtemoignage = `
                <div class="card">
                    <h2>${tem.prenom}</h2>
                    <p>${tem.typeExperience}</p>
                    <p>${tem.commentaire}</p>
                </div>`
        document.querySelector("#temoignage-contain").innerHTML += utilisateurtemoignage
    })
}
