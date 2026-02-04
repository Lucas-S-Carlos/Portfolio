function veri() {
    let certo = true


    let nome = document.getElementById('nome');
    let idade = document.getElementById('idade');
    let end = document.getElementById('end');
    let data = document.getElementById('data');
    let cep = document.getElementById('cep');
    let cpf = document.getElementById('cpf');
    let mail = document.getElementById('mail');
    let tel = document.getElementById('tel');


    console.log('aa');

    if (nome.value.trim() === "") {
        alert("O campo nome não foi preenchido.")
        nome.style.backgroundColor = 'red';
        certo = false
    }else{
        nome.style.backgroundColor = 'transparent';
    }

    if (idade.value.trim() === "") {
        alert("O campo idade não foi preenchido.")
        idade.style.backgroundColor = 'red';
        certo = false
    }else{
        idade.style.backgroundColor = 'transparent';
    }

    if (data.value.trim() === "") {
        alert("O campo data de nascimento não foi preenchido.")
        data.style.backgroundColor = 'red';
        certo = false
    }else{
        data.style.backgroundColor = 'transparent';
    }

    if (end.value.trim() === "") {
        alert("O campo endereço não foi preenchido.")
        end.style.backgroundColor = 'red';
        certo = false
    }else{
        end.style.backgroundColor = 'transparent';
    }

    if (cep.value.trim() === "") {
        alert("O campo CEP não foi preenchido.")
        cep.style.backgroundColor = 'red';
        certo = false
    }else{
        cep.style.backgroundColor = 'transparent';
    }

    if (cpf.value.trim() === "") {
        alert("O campo CPF não foi preenchido.")
        cpf.style.backgroundColor = 'red';
        certo = false
    }else{
        cpf.style.backgroundColor = 'transparent';
    }

    if (mail.value.trim() === "") {
        alert("O campo email não foi preenchido.")
        mail.style.backgroundColor = 'red';
        certo = false
    }else{
        mail.style.backgroundColor = 'transparent';
    }

    if (tel.value.trim() === "") {
        alert("O campo telefone não foi preenchido.")
        tel.style.backgroundColor = 'red';
        certo = false
    }else{
        cpf.style.backgroundColor = 'transparent';
    }

    if (certo == true){
        window.location.href = "outro.html";
    }
}

const campos = document.querySelectorAll('#formCadastro input'); 

campos.forEach(campo => { 
    campo.addEventListener('focus', () => { 
        campos.forEach(c => c.classList.remove('destacado')); 
        campo.classList.add('destacado'); 
    }); 
    
    campo.addEventListener('blur', () => { 
        campo.classList.remove('destacado'); 
    }); 
});