from distutils.log import debug
from flask import Flask, jsonify, request 
import pickle
import requests
import numpy as np


model = pickle.load(open("predict_price.pkl", "rb"))

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({
        'name' : 'Jikit',
        'add' : 'India'
    })

@app.route("/pricepred", methods = ["POST", "GET"])
def pricepred():
    year = int(request.form.get("year", False))
    Age = 2022 - year

    present_price = float(request.form.get("presnt_price", False))

    fuel_type = (request.form.get("fuel_type", False))
    if fuel_type == "Petrol":
        fuel_P = 1
        fuel_D = 0
    else: 
        fuel_P = 0
        fuel_D = 1
        
    kms_driven = int(request.form.get("kms_driven", False))

    transmission = (request.form.get("transmission", False))
    if transmission == "Manual":
        transmission_manual = 1
    else:
        transmission_manual = 0

    seller_type = (request.form.get("seller_type", False))
    if seller_type == "Individual":
        seller_individual = 1
    else: 
        seller_individual = 0

    owner = int(request.form.get("owner", False))

    values = [[
        present_price,
        kms_driven,
        owner,
        Age,
        fuel_D,
        fuel_P,
        seller_individual,
        transmission_manual
    ]]

    values = np.array(values)
    values = values.reshape(1, -1)

    prediction = model.predict(values)
    prediction = round(prediction[0], 2)

    return prediction;

if __name__ == "__main__":
    app.run(host='0.0.0.0')
