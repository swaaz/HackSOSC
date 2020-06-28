from flask import Flask , render_template
import  main
app = Flask(__name__)

temp = 'Hello'
output = main.chat(temp)

@app.route('/')
def index():
    # return render_template('index.html')
    return output

if __name__ == '__main__':
    app.run(debug=True)