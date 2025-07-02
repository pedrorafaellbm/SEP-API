const consultarCep = () => {
    console.log('chamou a API')
    const cep = document.getElementById('cep').value

    let uri = `https://cep.awesomeapi.com.br/json/${cep}`

    console.log(`URI: ${uri}`)
    fetch(uri)
        .then(response => response.json())
        .then(json => {
            console.log(json)

            document.getElementById('Logradouro').value = json.address
            document.getElementById('Bairro').value = json.district
            document.getElementById('UF').value = json.state
            document.getElementById('Localidade').value = json.city
            document.getElementById('ddd').value = json.ddd


        })
}

const fetchEstados = () => {
    let uri = `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`

    console.log(`URI: ${uri}`)

    fetch(uri)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            let options = '<option selected disabled>Escolha um estado...</option>'

            data.forEach(estado => {
                options = options + `<option value="${estado.sigla}">${estado.nome}</option>`
            })

            document.getElementById('UF').innerHTML = options

        })
}

fetchEstados()

const fetchMunicipios = (event) => {
    
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        .then(response => response.json())
        .then(json => {
            console.log(json)

            let options = '<option selected disabled>Selecione...</option>'

            json.forEach(municipio => {
                options = options + `<option value="${municipio.nome}">${municipio.nome}</option>`
            })

            document.getElementById('Localidade').innerHTML = options


        })
}

fetchMunicipios()
