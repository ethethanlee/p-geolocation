import cv2
import numpy as np

def sun_locater(image):
    """
    returns the coordinates of the sun

    :param image: (jpeg) an image where the sun is to be located
    :returns: (int) a tuple, representing the x and y coordinates of the sun
    """
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY)

    # creates contours
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    largest_contour = max(contours, key=cv2.contourArea)

    # Get the coordinates of the bounding box of the largest contour
    (center_x, center_y), radius = cv2.minEnclosingCircle(largest_contour)

    center_x, center_y = int(center_x), int(center_y)

    # print("Coordinates of the sun: ({}, {})".format(center_x, center_y))
    return center_x, center_y


def find_horizon_line(image):
    # Convert the image to grayscale
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Apply Gaussian blur and edge detection (Canny)
    blurred_image = cv2.GaussianBlur(gray_image, (5, 5), 0)
    edges = cv2.Canny(blurred_image, 50, 150)

    # Sum the edges along each row
    row_sums = np.sum(edges, axis=1)

    # Find the row with the maximum edge intensity
    horizon_row = np.argmax(row_sums)

    # Create a line representing the horizon
    horizon_line = [0, horizon_row, image.shape[1], horizon_row]
    # print("Horizon Line:", horizon_line)

    return horizon_line


def draw_horizon_line(image, horizon_line):
    x1, y1, x2, y2 = horizon_line
    cv2.line(image, (x1, y1), (x2, y2), (0, 255, 0), 2)

    # Display the image with the horizon line
    cv2.imshow('Horizon Approximation', image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()



def process_data(image_path):
    # Read the image
    image = cv2.imread(image_path)

    sun_coordinates = sun_locater(image)
    horizon_line = find_horizon_line(image)

    data = {'longitude': sun_coordinates[0],
            'latitude': sun_coordinates[1]}

    return data


# Replace with the actual image path
"""
image_path = "src/sunlocater/sunimage1.jpeg"
result = process_data(image_path)
print(result)


print(process_data("src/sunlocater/sunimage1.jpeg"))
"""
