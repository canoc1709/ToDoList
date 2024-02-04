from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import json
import os 
app = Flask(__name__)

CORS(app)


@app.route('/getData', methods = ['GET'])
def get():
    return render_template("index2.html")

