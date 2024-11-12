///Récupation des skills

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



const validateForm = () => {
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    
    if (!emailPattern.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return false;
    }


    return true;
};