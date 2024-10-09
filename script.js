# O conteúdo atual do arquivo JS foi carregado e contém o código que podemos minificar para melhorar o desempenho.
js_code = '''
function handleSubmit(event){event.preventDefault();const e=document.getElementById("leadForm"),t=document.getElementById("submitButton"),n=new XMLHttpRequest;n.open("POST",e.action,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded");const o=new FormData(e),a=new URLSearchParams(o).toString();n.onload=function(){200===n.status?(t.innerHTML="Enviado!",t.disabled=!0):alert("Erro ao enviar a mensagem.")},n.send(a)}
'''

# Minificação manual do código JS
minified_js_code = 'function handleSubmit(event){event.preventDefault();const e=document.getElementById("leadForm"),t=document.getElementById("submitButton"),n=new XMLHttpRequest;n.open("POST",e.action,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded");const o=new FormData(e),a=new URLSearchParams(o).toString();n.onload=function(){200===n.status?(t.innerHTML="Enviado!",t.disabled=!0):alert("Erro ao enviar a mensagem.")},n.send(a)}'

# Salvando o código JavaScript minificado
minified_js_output_path = '/mnt/data/script_minimized.js'

with open(minified_js_output_path, 'w', encoding='utf-8') as file:
    file.write(minified_js_code)

minified_js_output_path
