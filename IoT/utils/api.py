import serial
import requests

ser = serial.Serial("/dev/ttyACM0", 9600, timeout=1)

# API endpoint URL
api_url = "http://localhost:8000/patients"

try:
   while True:
      data = ser.readline().decode().strip()
      values = data.split(",")
      print(values)
      if len(values) == 2:
         heart_rate, temperature = map(float, values)
         if 60 <= heart_rate <= 120:
            print(f"Received temperature from Arduino: {temperature} C")
            print(f"Received heart rate from Arduino: {heart_rate} BPM")
            payload = {
               "name": "Derroo",
               "NID": 1234554321,
               "heart_rate": heart_rate,
               "temperature": temperature,
            }
            headers = {"Content-Type": "application/json"}
            response = requests.post(api_url, json=payload, headers=headers)
            if response.status_code == 200:
               print("Data uploaded successfully!")
            else:
               print("Failed to upload data")
except KeyboardInterrupt:
   print("Serial communication interrupted.")
except requests.exceptions.RequestException as e:
   print(f"Error: {e}")
finally:
   ser.close()
