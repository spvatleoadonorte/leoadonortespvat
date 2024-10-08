<!-- Formulário simples de captura de leads -->
<form id="leadForm" action="processa_formulario.php" method="post" onsubmit="handleSubmit(event)">
    <div class="form-group">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required>
    </div>
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required>
    </div>
    <button type="submit" id="submitButton" class="btn-enviar">Enviar</button>
</form>

<!-- Script para manipular o envio do formulário -->
<script>
    function handleSubmit(event) {
        event.preventDefault(); // Evita o envio tradicional do formulário
        const form = document.getElementById('leadForm');
        const submitButton = document.getElementById('submitButton');

        // Envia os dados via AJAX
        const xhr = new XMLHttpRequest();
        xhr.open('POST', form.action, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // Coleta os dados do formulário
        const formData = new FormData(form);
        const params = new URLSearchParams(formData).toString();

        // Função para lidar com o retorno da requisição
        xhr.onload = function () {
            if (xhr.status === 200) {
                // Mostra a mensagem de sucesso no botão
                submitButton.innerHTML = 'Enviado!';
                submitButton.disabled = true; // Desabilita o botão após envio
            } else {
                alert('Erro ao enviar a mensagem.');
            }
        };

        // Envia o formulário via AJAX
        xhr.send(params);
    }
</script>