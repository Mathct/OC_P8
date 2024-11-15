///Récupation et affichage des skills

async function fetchSkills() {
    try {
        const reponse = await fetch('data/skills.json');
        const skills = await reponse.json(); 
        return skills
    } catch (error) {
        console.error('Erreur de récupération JSON:', error);
        return []; 
    }
}


fetchSkills().then(data => {
    
    /// Skills Frontend /////
    for (let i = 0; i < data["Frontend"].length; i++) {
    
    const parent = document.getElementById("linearskills");

    const newDiv = document.createElement("div");
    newDiv.id = "front_"+data["Frontend"][i].id;
    newDiv.innerHTML = `${data["Frontend"][i].icon}`;
    newDiv.style.color = data["Frontend"][i].color;
    newDiv.className = "skillicon";
    parent.appendChild(newDiv);

    const progressline = document.createElement("div");
    progressline.id = "progressfront_"+data["Frontend"][i].id;
    progressline.className = "progressline";
    parent.appendChild(progressline);


    const parent2 = document.getElementById("progressfront_"+data["Frontend"][i].id);
    const newSpan= document.createElement("span");
    newSpan.id = "progressfront_"+data["Frontend"][i].id;
    newSpan.style.width = data["Frontend"][i].niveau + "%";
    newSpan.style.backgroundColor = data["Frontend"][i].color;
    parent2.appendChild(newSpan);

    const newDiv2= document.createElement("span");
    newDiv2.id = "valeurfront_"+data["Frontend"][i].id;
    newDiv2.className = "valeur";
    newDiv2.innerText = data["Frontend"][i].niveau+"%";
    newDiv2.style.color = data["Frontend"][i].color;
    parent2.appendChild(newDiv2);

    const newDiv3= document.createElement("span");
    newDiv3.id = "namefront_"+data["Frontend"][i].id;
    newDiv3.className = "titreskill";
    newDiv3.innerText = data["Frontend"][i].nom;
    newDiv3.style.color = data["Frontend"][i].color;
    parent2.appendChild(newDiv3);



    }
    

    /// Skills Backend /////
    
    for (let i = 0; i < data["Backend"].length; i++) {

        const parent = document.getElementById("linearskills");
        const newDiv = document.createElement("div");
        newDiv.id = "back_"+data["Backend"][i].id;
        newDiv.innerHTML = `${data["Backend"][i].icon}`;
        newDiv.style.color = data["Backend"][i].color;

        newDiv.className = "skillicon";
        parent.appendChild(newDiv);

        const progressline = document.createElement("div");
        progressline.id = "progressback_"+data["Backend"][i].id;
        progressline.className = "progressline";
        parent.appendChild(progressline);

        const parent2 = document.getElementById("progressback_"+data["Backend"][i].id);
        const newSpan= document.createElement("span");
        newSpan.id = "progressback_"+data["Backend"][i].id;
        newSpan.style.width = data["Backend"][i].niveau + "%";
        newSpan.style.backgroundColor = data["Backend"][i].color;
        parent2.appendChild(newSpan);

        const newDiv2= document.createElement("span");
        newDiv2.id = "valeurfront_"+data["Backend"][i].id;
        newDiv2.className = "valeur";
        newDiv2.innerText = data["Backend"][i].niveau+"%";
        newDiv2.style.color = data["Backend"][i].color;
        parent2.appendChild(newDiv2);

        const newDiv3= document.createElement("span");
        newDiv3.id = "namefront_"+data["Backend"][i].id;
        newDiv3.className = "titreskill";
        newDiv3.innerText = data["Backend"][i].nom;
        newDiv3.style.color = data["Backend"][i].color;
        parent2.appendChild(newDiv3);
    
   
    
    }

    /// Skills Radial /////

    for (let i = 0; i < data["Radial"].length; i++) {

        const parent = document.getElementById("radialskills");
        const newDiv = document.createElement("div");
        newDiv.id = "radial_"+data["Radial"][i].id;
        newDiv.className = "progress";
        newDiv.innerHTML = 
                `<svg class="progress-bar" width="250" height="250">
                    <circle id="circle_1_${i}" class="progress-circle circle1" cx="125" cy="125" r="100"></circle>
                    <circle id="circle_2_${i}" class="progress-circle circle2" cx="125" cy="125" r="100"></circle>
                </svg>
                <div class="text" style="color: ${data["Radial"][i].color};">
                ${data["Radial"][i].nom}
                    <span style="color: ${data["Radial"][i].color};">${data["Radial"][i].niveau}%</span>
                </div>`;

        parent.appendChild(newDiv);

        const circle = document.getElementById("circle_2_"+i);
        circle.style.stroke = data["Radial"][i].color;
        circle.style.strokeDashoffset = 628 - (628 * data["Radial"][i].niveau) / 100;
     
    
    }
   

});



// Variable pour stocker les projets
let projetsData = [];

/// Récupération et stockage des projets
async function fetchProjets() {
    try {
        const reponse = await fetch('data/projets.json');
        const projets = await reponse.json();
        // je stocke les projets dans projetsData
        projetsData = projets["Projets"];
        return projetsData;
    } catch (error) {
        console.error('Erreur de récupération JSON:', error);
        return [];
    }
}

// Affichage des projets
fetchProjets().then(data => {
    const parent = document.getElementById("projets-content");

    for (let i = 0; i < data.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.id = "projet_" + data[i].id;
        newDiv.className = "projet";
        newDiv.innerHTML = 
            `<img src="${data[i].img}" alt="${data[i].alt}">
            <div class="projet-layer">
                <h1>${data[i].nom}</h1>
                <p>${data[i].description}</p>
                <i id="btn_projet_${data[i].id}" class="bx bx-link-external"></i>
            </div>`;
        parent.appendChild(newDiv);

        // EventListener sur chaque bouton projet
        const projetopen = document.querySelector(`#btn_projet_${data[i].id}`);
        projetopen.addEventListener('click', openProjet);
    }
});


// Fonction recuperer le projet (dans projetsData) cliqué... puis l'injecter dans une modale
const openProjet = (event) => {
    
    const clickedId = event.target.id.replace("btn_projet_", "");
    const projet = projetsData.find(projet => projet.id == clickedId);

    const modal = document.getElementById("modal");
    modal.classList.remove('hidden');
    
    // Afficher l'id
    //console.log('Nom du projet :', projet.id);
   
    
};  







///Formulaire

const validateForm = () => {
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    
    if (!emailPattern.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return false;
    }


    return true;
};


/// NAV BAR


let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let decal = document.querySelectorAll('.first');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

}


const toggleMenu = () => {
    navbar.classList.toggle('show');
    menuicon.classList.toggle('red');
    decal.forEach(element => {
        element.classList.toggle('decal');
    });
    
};

menuicon.addEventListener('click', toggleMenu);



// Pour masquer le menu quand un lien est cliqué
navlinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('show')) {
            toggleMenu(); 
        }
    });
});


/// MODAL 

const modal = document.getElementById("modal");
modal.addEventListener ('click', CloseModal);

function CloseModal (e)
{

    if ((e.target === document.querySelector("#modal"))||(e.target === document.querySelector(".close")))
    {
        
        const modal = document.querySelector("#modal");
        modal.classList.add('hidden');
        
    }
}



