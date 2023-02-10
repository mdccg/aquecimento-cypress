const $ = document.querySelector.bind(document);

// Traduzindo os dados falsos para português brasileiro
faker.locale = 'pt_BR';

const addPerson = () => {
  const peopleList = $('ul');
  const personItem = document.createElement('li');
  const name = faker.name.findName();
  personItem.innerText = name;
  peopleList.appendChild(personItem);
}

const clearList = () => {
  const peopleList = $('ul');
  peopleList.innerHTML = '';
}

const main = () => {
  const container = $('#container');
  const containerTitle = document.createElement('h2');
  const instructions = document.createElement('p');
  const addPersonButton = document.createElement('button');
  const clearListButton = document.createElement('button');
  const peopleList = document.createElement('ul');

  containerTitle.innerText = 'Bem-vind@ ao aquecimento da unidade curricular';
  containerTitle.classList.add('title');

  instructions.innerText = `Clique em 'Adicionar' para adicionar uma nova pessoa`;
  instructions.classList.add('text-content');

  addPersonButton.innerText = 'Adicionar';
  addPersonButton.classList.add('person-button');
  addPersonButton.type = 'button';
  addPersonButton.onclick = addPerson;

  clearListButton.innerText = 'Limpar';
  clearListButton.classList.add('person-button');
  clearListButton.type = 'button';
  clearListButton.onclick = clearList;

  peopleList.id = 'people-list';

  container.appendChild(containerTitle);
  container.appendChild(instructions);
  container.appendChild(addPersonButton);
  container.appendChild(clearListButton);
  container.appendChild(peopleList);
}

main();