async function sendsms(){
fetch("http://192.168.1.104:3001/")
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