from flask import Flask, request, jsonify,json
from flask_cors import CORS

# Create a GET route 


data = []

app = Flask(__name__)
CORS(app)


@app.route('/getData', methods=['GET'])
def getToDoListData():
    global data
    data.append(request.args.get('data'))  # Giả sử dữ liệu được truyền qua tham số truy vấn
    return 'Lưu dữ liệu thành công!', 200

@app.route('/postData', methods=['POST', 'GET'])
def postToDoListData():
    inputData = request.get_json().get('inputData')  # Get inputData from the JSON request
    data.append(inputData)  # Add the inputData to the dataList
    return jsonify({'message': 'Data received successfully', 'dataList': data}), 200