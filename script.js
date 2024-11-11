async function fetchSkills() {
    try {
        const reponse = await fetch('data/skills.json');
        const skills = await reponse.json(); // Parse le JSON en tableau
        return skills
    } catch (error) {
        console.error('Erreur de récupération JSON:', error);
        return []; 
    }
}


fetchSkills().then(data => {
    
    console.log(data)
    const frontEndSkills = data["FrontEnd"][0].nom;
    console.log(frontEndSkills)

});