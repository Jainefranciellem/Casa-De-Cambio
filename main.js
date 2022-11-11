import './style.css';
import Swal from 'sweetalert2';


const  createList = ([ coin, quotation ]) => {
  const li = document.createElement('li');
  li.innerHTML = `<span id="coin">${coin}:<span/> <span id="quotation">${quotation}<span/>`;
  listAPI.appendChild(li);
}

const getAPI = async (coin) => {
  try {
    const api = await fetch(`https://api.exchangerate.host/latest?base=${coin}`)
    const resposta = await api.json()
    return resposta;
  } catch (error) {
    
  }
  
};

button.addEventListener('click', async (event) => {
  event.preventDefault();
  const coin = inputMoeda.value
  if(!coin) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Voçê precisa passar uma moeda',
    })
  }
  const resultado = await getAPI(coin);
  const array = Object.entries(resultado.rates);
  array.forEach((current) => createList(current))
});


