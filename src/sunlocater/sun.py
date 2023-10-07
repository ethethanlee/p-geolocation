import cv2
import numpy as np

def sun_locater(image):
    # reading the actual image
    image = cv2.imread(image)

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY)

    # creates contours
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    largest_contour = max(contours, key = cv2.contourArea)

    # Get the coordinates of the bounding box of the largest contour
    (center_x, center_y), radius = cv2.minEnclosingCircle(largest_contour)

    center_x, center_y = int(center_x), int(center_y)

    print("Coordinates of the sun: ({}, {})".format(center_x, center_y))


sun_locater("sunimage1.jpeg")
sun_locater("sunimage2.jpeg")