FROM python:3.9

WORKDIR /app
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update -y
RUN apt install libgl1-mesa-glx -y
RUN apt-get install 'ffmpeg'\
    'libsm6'\
    'libxext6'  -y

COPY requirements.txt requirements.txt
# Set a longer timeout for pip during the installation of requirements
RUN pip install --default-timeout=100 -r requirements.txt


COPY . .

EXPOSE 5000
CMD ["python", "app.py"]
