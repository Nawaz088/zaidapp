from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

def excel_to_json(excel_file):
    # Read Excel file
    data = pd.read_excel(excel_file, sheet_name="Sheet1")


    # Convert data to JSON
    json_data = data.to_json(orient="records")

    return json_data

app = Flask(__name__)
CORS(app)

@app.route("/get_data", methods=["GET"])

def get_data():
    # Call the excel_to_json function here
    json_data = excel_to_json("test_for_web.xlsx")
    return jsonify(json_data)

if __name__ == "__main__":
    app.run(debug=True)
