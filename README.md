# Frontend Application for the MyBand Project

React components for Artists and Instruments pages.

## Instruments

Here you can create a new musical instrument and list all the existing ones. When you don't need an instrument, the bin
icon will help you delete it.

## Artists

After creating some instruments, switch back to this page and create the band of your dream. Enter the name and select
one of the created instruments from the drop-down. Add as many artists as you like and view the whole band in the table.

## API

This application send requests to the API Gateway.

## Docker

You can run this app in a Docker container

Create a file named `.env` in the root directory of the project with valid values for the following variables
```
REACT_APP_HOSTNAME=<The API hostname>
REACT_APP_STAGE=<The API Gateway stage>
```

Build the image:
```
docker build -t my-band . 
```

Run the container:
```
docker run -p 80:80 --name my-band-container my-band
```

Open http://localhost/ in your browser to view the page.
