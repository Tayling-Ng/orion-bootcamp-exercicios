from flask import Flask

# Inicializa a aplicação Flask
app = Flask(__name__)

# Define a rota principal
@app.route('/')
def hello_container():
    # Retorna a mensagem solicitada
    return "Hello from Docker!"

# Executa a aplicação na porta 3000
if __name__ == '__main__':
    # '0.0.0.0' garante que o servidor seja acessível de fora do container
    app.run(host='0.0.0.0', port=3000)