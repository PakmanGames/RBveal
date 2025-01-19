import React from 'react';
import failureVid from './public/failed.mp4';

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Player</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
            background-color: #f4f4f4;
        }
        video {
            max-width: 100%;
            height: auto;
            margin: 20px 0;
            border: 2px solid #ccc;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <h1>Welcome to the Video Player</h1>
    <p>Enjoy the video below:</p>
    <video controls>
        <source src={failureVid} type="video/mp4">
        <source src="your-video-file.webm" type="video/webm">
        Your browser does not support the video tag.
    </video>
</body>
</html>
