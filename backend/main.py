from flask import Flask, request, jsonify
from flask_cors import CORS

# Create a GET route 


data = []

app = Flask(__name__)
CORS(app)
@app.route('/getData', methods=['GET'])
def getToDoListData():
    global data
    data.append(request.args.get("value"))
    # Giả sử dữ liệu được truyền qua tham số truy vấn
    return jsonify({"DATA" : data})


@app.route('/postData', methods=['POST'])
def postToDoListData():
    inputData = request.args.get('inputData')  # Get inputData from the JSON request
    # data.append(inputData)  # Add the inputData to the dataList
    return jsonify({'DATA' : inputData}), 200

