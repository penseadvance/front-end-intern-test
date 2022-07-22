// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.
(function() {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  contactForm.addEventListener('submit', function() {
    // A propriedade "value" contém o valor atual de um input ou textarea
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    // A propriedade "length" contém o tamanho (em caracteres) de uma
    // uma string. Toda string contém essa propriedade.
    const nameLength = nameValue.length;
    const emailLength = emailInput.length;
    const messageLenght = messageInput.length;

    /*Usando o classList com a function add, inserimos uma classe que 
    visualmente alerta os campos obrigatórios e com um if deixamos claro
    essa condição.*/
    if(nameLength === 0 || emailLength === 0 || messageLenght === 0){
      nameInput.classList.add('campoInvalido');
      emailInput.classList.add('campoInvalido');
      messageInput.classList.add('campoInvalido');

      window.alert('Verifique os campos em vermelho, seus preenchimentos são obrigatórios.')
    }else{
      window.alert(`Obrigado ${nameValue}! Retornaremos no email ${emailValue} assim que possível, fique de olho em suas menssagens.`);
    }
  });
})();
