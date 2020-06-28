from flask import Flask , render_template, request
import  main
app = Flask(__name__)

# temp = 'Hello'
# output = main.chat(temp)

@app.route('/')
def index():
    return render_template('index.html')
    # return "hello"

@app.route('/get')
def get_response():
    message = request.args.get("msg")
    return (main.chat(message))

if __name__ == '__main__':
    app.run(debug=True)
    
