const consultarCep = () => {
    console.log('chamou a API')
const cep = document.getElementById('cep').value

let uri = `https://cep.awesomeapi.com.br/json/${cep}`

console.log(`URI: ${uri}`)
fetch(uri)
  .then(response => response.json())
  .then(json => {
    console.log(json)

    document.getElementById('Logradouro').value = json.adress
    document.getElementById('Bairro').value = json.adress
    document.getElementById('UF').value = json.adress

})
}