let properties = []
const showMenu = () => {
    let option
    do {
        option = prompt(`Menu:
1. Cadastrar um novo imóvel
2. Listar imóveis cadastrados
3. Sair
Total de imóveis cadastrados: ${properties.length}`)

        switch (option) {
            case '1': registerProperty(); break
            case '2': listProperties(); break
            case '3': alert('Saindo do sistema...'); break
            default: alert('Opção inválida. Tente novamente.')
        }
    } while (option !== '3')
}
const registerProperty = () => {
    const ownerName = prompt('Nome do proprietário:')
    let numberOfBedrooms
    do {
        numberOfBedrooms = prompt('Quantidade de quartos:')
    } while (numberOfBedrooms === '' || numberOfBedrooms < 0)

    let numberOfBathrooms
    do {
        numberOfBathrooms = prompt('Quantidade de banheiros:')
    } while (numberOfBathrooms === '' || numberOfBathrooms < 0)

    const hasGarage = confirm('O imóvel tem garagem?')

    properties.push({
        ownerName,
        numberOfBedrooms: +numberOfBedrooms,
        numberOfBathrooms: +numberOfBathrooms,
        hasGarage
    })
    if (confirm('Deseja salvar este imóvel?')) {
        alert('Imóvel salvo com sucesso!')
    } else {
        alert('Cadastro cancelado.')
        properties.pop()
    }
}
const listProperties = () => {
    if (!properties.length) return alert('Nenhum imóvel cadastrado.')
    alert('Imóveis cadastrados:\n' + properties.map((p, i) => 
        `${i + 1}. Proprietário: ${p.ownerName}, Quartos: ${p.numberOfBedrooms}, Banheiros: ${p.numberOfBathrooms}, Garagem: ${p.hasGarage ? 'Sim' : 'Não'}`).join('\n'))
}
showMenu()