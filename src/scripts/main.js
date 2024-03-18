document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita o envio do formulário padrão

      // Validação dos campos
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name === '' || email === '' || message === '') {
          alert('Por favor, preencha todos os campos.');
          return;
      }

      // Simulação de envio dos dados (aqui você pode implementar a lógica para enviar os dados para o servidor)
      alert('Dados enviados com sucesso:\nNome: ' + name + '\nEmail: ' + email + '\nMensagem: ' + message);

      // Limpa os campos após o envio bem-sucedido
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
  });
});
