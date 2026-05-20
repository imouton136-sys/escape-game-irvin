fetch("a.json")
    .then(rep => {
        return rep.json()
    })
    .then(data => {
        console.log(data)
        afficherhero(data.nomCommercial, data.phraseAccroche, data.textAppelAction)
        afficheavantageclient(data.avantagesClients)
        afficheactivite(data.activites)
        affichetemoignage(data.temoignages)
    })
//role afficher le hero
//parametre hero
//return
function afficherhero(hero) {
let utilisateurhero = ` <h1 class="text-center creepster"> <span class="color-rouge creepster">Dehors ! - Esca</span>pe <span class="color-rouge creepster"> Game Paris</span></h1>
            <h2 class="color-rouge creepster">Découvrez l'aventure ultime avec Dehors!,<span class="color-noir creepster"> votre desti</span>nation d'escape game à Paris</h2>
            <a class="btn-red" href="">reservez votre aventure !</a>`
            document.querySelector("#hero-contain").innerHTML += utilisateurhero
        }
//role afficher les avantages clients
//parametre avantage client
//return
function afficheavantageclient(avantageclient) {
    avantageclient.forEach(avt => {
        let utilisateuravantage = `
                <div class="">
                    <p class="color-rouge">${avt}</p>
                </div>`
        document.querySelector("#avantageclient-contain").innerHTML += utilisateuravantage
    })
}
//role afficher activite
//activite
//return
function afficheactivite(activite) {
    activite.forEach(act => {
        let utilisateuractivite = `
            
                <div class="card-black color-rouge p-16">
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
                <div class="card p-16">
                    <h2>${tem.prenom}</h2>
                    <p>${tem.typeExperience}</p>
                    <p>${tem.commentaire}</p>
                    <p>${noteetoile(tem.note)}</p>
                </div>`
        document.querySelector("#temoignage-contain").innerHTML += utilisateurtemoignage
    })
}
function noteetoile(note){
    let resultatetoile = ""
    if (note === 0){
        return "☆☆☆☆☆"
    }else if (note === 1){
        return "★☆☆☆☆"
    }else if (note === 2){
        return "★★☆☆☆"
    }else if (note === 3){
        return "★★★☆☆"
    }else if (note === 4){
        return "★★★★☆"
    }else {
        return "★★★★★"
    }

}