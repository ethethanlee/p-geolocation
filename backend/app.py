from flask import Flask, request, jsonify
from sun import process_data
import datetime
from current import ConversionComponent
# from flask_cors import CORS
import sys
import os
import unittest

app = Flask(__name__)
# CORS(app, resources={r"/sun_data_route/*": {"origins": "http://localhost:3000"}})




@app.route('/sun_data_route/<locationInput>/<locationInput2>', methods=['GET', 'POST'])
def get_data(locationInput, locationInput2):

    print('a;lksjdf;laksdfj ;laksd f;laksd f;alsk dfj;alsk djf;lak sd;fl kas dj;flk')
    #data = process_data()
    object = ConversionComponent()
    # Data isn't going to be date, but longitute data.
    
    # we have to put data through what current.py does to get longitude and latitude

    # we have to update process_data so that it uses the pixel coordinates we get from sun_locater 
    # goes through the functions in current.py
    # return('hi')
    now = datetime.datetime.now()
    local_now = str(now.astimezone())[-6:]
    local_int = int(local_now[:3])
    longitude = local_int*15

    if request.method == 'GET':
        return f'GET request with parameters: locationInput={locationInput}, param_value2={locationInput2}'
    
    if request.method == 'POST':
        file1 = request.files['myFiles[0]']  # Access the first file
        file2 = request.files['myFiles[1]']  # Access the second file

        # Process the files as needed
        # Example: save files to a specific directory
        file1.save(f'./temporary_images/{locationInput}')
        file2.save(f'./temporary_images/{locationInput2}')



        # form_data = request.form.to_dict()
        # print(file1, file=sys.stderr)
        # param_value = request.form.get('locationInput')
        # param_value2 = request.form.get('locationInput2')
        # print(type(param_value), file=sys.stderr)
        a = process_data('./temporary_images/'+locationInput)
        print(a)
        b = process_data('./temporary_images/'+locationInput2)

#         object.rad_to_degrees(object.pixel_coords_to_angle([(123,123), (156,100)])[0]), 
# object.pixel_coords_to_angle([(123,123), (156,100)])[1]))

        temp = object.pixel_coords_to_angle([a,b])

        print(object.angle_to_latitude(
                object.get_datetime_metadata('./temporary_images/'+locationInput), 
                                                object.rad_to_degrees(temp[0]), temp[1]), file=sys.stderr)
        print('byeee', file=sys.stderr)

        lat_data = object.angle_to_latitude(
                object.get_datetime_metadata('./temporary_images/'+locationInput), 
                                                object.rad_to_degrees(temp[0]), temp[1])
        
        return jsonify({'latitude': lat_data, 'longitude': longitude})

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