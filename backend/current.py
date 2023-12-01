import math
from PIL import Image
from PIL.ExifTags import TAGS



class ConversionComponent:

    '''calculate the angle between the two coords assuming that
    the horizon is aligned with the horizontal plane of our picture

    returns a tuple (angle in radians, whether the sun is setting {so True for setting and False for rising})'''
    def pixel_coords_to_angle(self, coords):
        adjacent_side = coords[0][1] - coords[1][1]
        opposite_side = coords[0][0] - coords[1][0]
        return (math.atan((opposite_side) / (adjacent_side)), adjacent_side < 0)


    def rad_to_degrees(self, rad):
        return rad*math.pi/180
    
    def day_of_year(self, ydt, leap):
        month = int(ydt[:2])
        day = int(ydt[3:5])
        month_lengths = [31,28,31,30,31,30,31,31,30,31,30,31]
        output = 0
        if leap and month > 2:
            output = 1
        for i in range(month-1):
            output += month_lengths[i]
        return output + day

    # do we want to return a range or specific coords?
        '''example datetime:
        2023:10:04 19:32:41
        assume we know the timezone
            we will get from iphone world clock?
        '''
    '''
        given the datetime string, integer angle in degrees, and a boolean if the sun is setting
        return an integer latitude
    '''
    def angle_to_latitude(self, datetime_str, angle, setting):
        # slice the year from the datetime string
        yearless_datetime = datetime_str[5:]
        leap_year = not bool((int(datetime_str[:4]))%4)
        # convert month:day to number day of year
        day_of_year = self.day_of_year(yearless_datetime, leap_year)
        # find a way to figure when the next equinox will be
            # the spring equinox is usually 79 days into the year (80 on leap years)
            # the fall equinox is usually 264 days into the year (265 on leap years)
        if setting:
            angle = -1 * angle

        if day_of_year <= 78:
            new_day = day_of_year + 10
            angle_multiplier = new_day / 88.99
            latitude = (angle_multiplier * -23.5) - angle
        elif day_of_year >= 79 and day_of_year <= 171:
            new_day = day_of_year - 79
            angle_multiplier = new_day / 92.76
            latitude = angle - (angle_multiplier * 23.5)
        elif day_of_year >= 172 and day_of_year <= 263:
            new_day = day_of_year - 172
            angle_multiplier = new_day / 93.65
            latitude = (angle_multiplier * 23.5) - angle
        elif day_of_year >= 264 and day_of_year <= 354:
            new_day = day_of_year - 264
            angle_multiplier = new_day / 89.84
            latitude = angle - (angle_multiplier * -23.5)
        elif day_of_year >=355 and day_of_year <= 365:
            new_day = day_of_year - 355
            angle_multiplier = new_day / 88.99
            latitude = (angle_multiplier * -23.5) - angle
        else:
            return 'error'
            
        return latitude
        # days since last equinox / days between equinox and solstice
        """
        December solstice to March equinox: 88.99 days
        March equinox to June solstice: 92.76 days <<
        June solstice to September equinox: 93.65 days
        September equinox to December solstice: 89.84 days <<
        """""
 

    def get_datetime_metadata(self, imagename):
        # path to the image or video

        # read the image data using PIL
        image = Image.open(imagename)

        # get exifdata from the image and assign vbl metadata extraction
        exifdata = image.getexif()

        data_array = []
        # loop that extracts basic data from jpg 
        for tag_id in exifdata:
            # acquire readable tag name
            tag = TAGS.get(tag_id, tag_id)
            data = exifdata.get(tag_id)
            # decode bytes 
            if isinstance(data, bytes):
                data = data.decode()
            # print(f"{tag:25}: {data}")
            data_array.append(data)

        return(data_array[9])
        

object = ConversionComponent()


# print(object.angle_to_latitude(object.get_datetime_metadata(imagename), 
# object.rad_to_degrees(object.pixel_coords_to_angle([(123,123), (156,100)])[0]), 
# object.pixel_coords_to_angle([(123,123), (156,100)])[1]))
