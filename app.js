
// document.getElementById('btn-random').addEventListener('click', randomCharacter);

document.getElementById('paperInputs3').addEventListener('input', findCharacter);

// document.getElementById('btn-death').addEventListener('click', randomDeath);

function findCharacter() {
  const characterName = document.getElementById('paperInputs3').value.trim();

  fetch(`https://www.breakingbadapi.com/api/characters?name=${characterName}`)
  .then(res => res.json())
  .then(data => {
           let output = '';
           
              data.forEach(character => {
                 output += `
                <div class="card col sm-6 style="width: 20rem;">
                <div style="border-right: 1px solid #d0d0d0;
                padding-right: 20px;">
                <h4 class="card-title"><strong>${character.name}</strong></h4>
                <img class="border" src="${character.img}" alt="Card example image" width="300" height="150">
                </div>
                  <div class="card-body">
                    <h5 class="card-subtitle"><strong>Nickname:</strong> ${character.nickname}</h5>
                    <p class="card-text"><strong>Occupation:</strong> ${character.occupation}</p>
                    <p class="card-text"><strong>Status:</strong> ${character.status}</p>
                    <p class="card-text"><strong>Seasons Appeareances:</strong> ${character.appearance}</p>
                    <p><strong>Portrayed:</strong> ${character.portrayed}</p>
                  </div>
                </div>
                 `
                });
            document.getElementById('find').innerHTML = output;
        })
}

function randomCharacter() {
  // const characterName = document.getElementById('paperInputs3').value.trim();

  fetch('https://www.breakingbadapi.com/api/character/random')
  .then(res => res.json())
  .then(data => {
           let output = '';
           
              data.forEach(character => {
                 output += `
                <div class="card style="width: 20rem;">
                <div style="border-right: 1px solid #d0d0d0;
                padding-right: 20px;">
                <h4 class="card-title"><strong>${character.name}</strong></h4>
                <img class="border" src="${character.img}" alt="Card example image" width="300" height="150">
                </div>
                  <div class="card-body">
                    <h5 class="card-subtitle"><strong>Nickname:</strong> ${character.nickname}</h5>
                    <p class="card-text"><strong>Occupation:</strong> ${character.occupation}</p>
                    <p class="card-text"><strong>Status:</strong> ${character.status}</p>
                    <p class="card-text"><strong>Seasons Appeareances:</strong> ${character.appearance}</p>
                    <p><strong>Portrayed:</strong> ${character.portrayed}</p>
                  </div>
                </div>
                 `
                });
            document.getElementById('random').innerHTML = output;
        })
}

function randomDeath() {
  fetch('https://www.breakingbadapi.com/api/random-death')
  .then(res => res.json())
  .then(data => {
           let output = '';
           
              data.forEach(character => {
                 output += `
                <div class="card style="width: 20rem;">
                <div style="border-right: 1px solid #d0d0d0;
                padding-right: 20px;">
                <h4 class="card-title"><strong>${character.death}</strong></h4>
                <img class="border" src="${character.img}" alt="Card example image" width="300" height="150">
                </div>
                  <div class="card-body">
                    <h5 class="card-subtitle"><strong>Nickname:</strong> ${character.nickname}</h5>
                    <p class="card-text"><strong>Cause:</strong> ${character.cause}</p>
                    <p class="card-text"><strong>Responsible:</strong> ${character.responsible}</p>
                    <p class="card-text"><strong>Last Words:</strong> ${character.last_words}</p>
                    <p><strong>Occupation:</strong> ${character.occupation}</p>
                  </div>
                </div>
                 `
                });
            document.getElementById('death').innerHTML = output;
        })
}