from flask import Flask, request, jsonify
from sun import process_data
import datetime
from current import ConversionComponent
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/sun_data_route/*": {"origins": "http://localhost:3000"}})




@app.route('/sun_data_route/<locationInput>/<locationInput2>', methods=['GET', 'POST'])
def get_data(locationInput, locationInput2):
    #data = process_data()
    object = ConversionComponent()
    # Data isn't going to be date, but longitute data.
    
    # we have to put data through what current.py does to get longitude and latitude

    # we have to update process_data so that it uses the pixel coordinates we get from sun_locater 
    # goes through the functions in current.py
    # return('hi')
    now = datetime.datetime.now()
    local_now = str(now.astimezone())[-6:]
    print(local_now)

    if request.method == 'GET':
        return f'GET request with parameters: locationInput={locationInput}, param_value2={locationInput2}'
    
    elif request.method == 'POST':
        param_value = request.form.get('locationInput')
        param_value2 = request.form.get('locationInput2')
        
        return object.angle_to_latitude(
                object.get_datetime_metadata(param_value), object.rad_to_degrees(
                object.pixel_coords_to_angle([process_data(param_value), process_data(param_value2)])[0]), object.pixel_coords_to_angle([process_data(param_value), process_data(param_value2)])[1])

    # print(object.angle_to_latitude(object.get_datetime_metadata(imagename), 
    # object.rad_to_degrees(object.pixel_coords_to_angle([(123,123), (156,100)])[0]), 
    # object.pixel_coords_to_angle([(123,123), (156,100)])[1]))

@app.route('/sun_data_route/sun/', methods=['GET', 'POST'])
def main():
    # Get JSON data from the request
    # return 
    # return(request)

    return('hello')


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")