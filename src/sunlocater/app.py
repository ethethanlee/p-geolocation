from flask import Flask, request, jsonify
from sun import process_data

app = Flask(__name__)

@app.route('/sun_data_route', methods=['GET'])
def get_data(image_path):
    # Call the process_data function with the provided image_path
    data = process_data(image_path)
    print("json: " , jsonify(data))
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=False)

get_data("src/sunlocater/sunimage1.jpeg")
