document.getElementById('meuForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const message = document.getElementById('message');

    if (campoB > campoA) {
        message.textContent = 'Formulário validado com sucesso!';
        message.style.color = 'green';
     } else {
        message.textContent = 'Formulário inválido!';
        message.style.color = 'red';
     }
    
});