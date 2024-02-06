from flask import Flask, request, jsonify,json
from flask_cors import CORS

# Create a GET route 


data = []

app = Flask(__name__)
CORS(app)


@app.route('/getData', methods=['GET'])
def getToDoListData():
    global data
    return data

@app.route('/postData', methods=['POST'])
def postToDoListData():
    inputData = request.get_json()
    data.append(inputData)
    return jsonify({'tasks' : data})
    