import unittest
from current import ConversionComponent

conversion_component = ConversionComponent()

class TestMyFunction(unittest.TestCase):
    # testng rad_to_degrees
    def test_positive_radians(self):
        result = conversion_component.rad_to_degrees(1)
        self.assertAlmostEqual(result, 57.2958, places=4)

    def test_negative_radians(self):
        result = conversion_component.rad_to_degrees(-1)
        self.assertAlmostEqual(result, -57.2958, places=4)

    def test_zero_radians(self):
        result = conversion_component.rad_to_degrees(0)
        self.assertEqual(result, 0)

    
if __name__ == '__main__':
    unittest.main()