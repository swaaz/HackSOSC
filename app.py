from flask import Flask , render_template, request
import  main
app = Flask(__name__)
main.run()
# temp = 'Hello'
# output = main.chat(temp)

@app.route('/')
def index():
    return render_template('index.html')
    # return "hello"

@app.route("/get")
#function for the bot response
def get_bot_response():
    userText = request.args.get('msg')
    return str(main.chat(userText))

if __name__ == '__main__':
    app.run(debug=True)
    
