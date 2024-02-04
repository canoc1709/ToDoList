from flask import Flask, request, jsonify, render_template, redirect
from flask_cors import CORS
import json
import os 
app = Flask(__name__, template_folder="templates")

CORS(app)
res = []

@app.route('/')
def khoitao():
    return render_template("./index.html")

@app.route('/post', methods = ['POST', 'GET'])
def postData():
    if request.method == "POST":
        data = request.form['INPUT']
        res.append(data)
        print(res)
        return data

