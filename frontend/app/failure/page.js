import React from 'react';
import failureVid from '../public/failed.mp4';

const VideoPage = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">Test Failed</h1>
      <p className="text-lg mb-4">Please watch the video below:</p>
      <video
        controls
        className="rounded-lg shadow-lg border-2 border-gray-300 max-w-full"
      >
        <source src={failureVid} type="video/mp4" />
        <source src="your-video-file.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;