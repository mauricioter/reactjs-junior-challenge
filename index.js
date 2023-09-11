const data = [
    {
        address: "Rua Albertina",
        company: "asfsafaf",
        email: "mzueiro123@gmail.com",
        name: "Maurício Terto Veras Filho",
        notes: "",
        phone: "86994444541"
    },
    {
        address: "Rua Albertina",
        company: "asfsafaf",
        email: "mzueiro123@gmail.com",
        name: "Gustavo ",
        notes: "",
        phone: "86994444541"
    },
    {
        address: "Rua Albertina",
        company: "asfsafaf",
        email: "mzueiro123@gmail.com",
        name: "Tia Joana",
        notes: "",
        phone: "86994444541"
    }
];
const noData = document.getElementById('no-data')
const form = document.getElementById("formulario");
const inputName = document.getElementById("nome");
const inputCompany = document.getElementById("empresa");
const inputPhone = document.getElementById("telefone");
const inputEmail = document.getElementById("email");
const inputAddress = document.getElementById("endereco");
const inputNotes = document.getElementById("notas");
let tabela = document.querySelector(".table");

function salvarConteudo() {
    data.push({
        name: inputName.value,
        company: inputCompany.value,
        phone: inputPhone.value,
        email: inputEmail.value,
        address: inputAddress.value,
        notes: inputNotes.value,
    });

    console.log(data);
    form.reset();
    loadTable()
}

//
function loadTable() {
    if (data.length > 0) {
        noData.style.setProperty('display', 'none')
    }
    data.forEach((item) => {
        const addLinha = tabela.insertRow(-1);
        addLinha.classList.add('tr-linhasV')

        const novaCelula = addLinha.insertCell(0);
        const novaCelula1 = addLinha.insertCell(1);
        const novaCelula2 = addLinha.insertCell(2);
        const novaCelula3 = addLinha.insertCell(3);
        const novaCelula4 = addLinha.insertCell(4);
        const novaCelula5 = addLinha.insertCell(5);

        novaCelula.innerHTML = "";
        novaCelula.classList.add('linhas')
        novaCelula1.innerHTML = item.name;
        novaCelula2.innerHTML = item.company;
        novaCelula3.innerHTML = item.phone;
        novaCelula5.innerHTML = item.notes;
        novaCelula4.innerHTML = item.email;

    });
}

loadTable()