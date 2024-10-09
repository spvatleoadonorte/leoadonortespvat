# Minificando o código JavaScript atual sem prejudicar o funcionamento
js_code = '''
function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('leadForm');
    const submitButton = document.getElementById('submitButton');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    const formData = new FormData(form);
    const params = new URLSearchParams(formData).toString();
    xhr.onload = function () {
        if (xhr.status === 200) {
            submitButton.innerHTML = 'Enviado!';
            submitButton.disabled = true;
        } else {
            alert('Erro ao enviar a mensagem.');
        }
    };
    xhr.send(params);
}
'''

# Minificando o código removendo espaços e quebras de linha desnecessárias
minified_js_code = 'function handleSubmit(event){event.preventDefault();const e=document.getElementById("leadForm"),t=document.getElementById("submitButton"),n=new XMLHttpRequest;n.open("POST",e.action,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded");const o=new FormData(e),a=new URLSearchParams(o).toString();n.onload=function(){200===n.status?(t.innerHTML="Enviado!",t.disabled=!0):alert("Erro ao enviar a mensagem.")},n.send(a)}'

# Salvando o código JavaScript minificado
minified_js_output_path = '/mnt/data/script_min.js'

with open(minified_js_output_path, 'w', encoding='utf-8') as file:
    file.write(minified_js_code)

minified_js_output_path

        };

        // Envia o formulário via AJAX
        xhr.send(params);
    }
</script>
