from flask import Flask, request, jsonify
from sun import process_data
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/sun_data_route/<locationInput>', methods=['GET'])
def get_data(image_path):
    data = process_data(image_path)
    # Data isn't going to be date, but longitute data.

    # we have to put data through what current.py does to get longitude and latitude

    # we have to update process_data so that it uses the pixel coordinates we get from sun_locater 
    # goes through the functions in current.py

    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
