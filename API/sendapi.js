async function sendsms(){
fetch("http://localhost:3000/")
  .then(response => {
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados');
    }

    return response.json();
  })

  .then(data => {console.log(data)})
  .catch(error => {console.error('Ocorreu um erro:', error)});

}
sendsms();
module.exports = sendsms;