// components/ImageGallery.js
import { useState, useEffect } from "react";
import Image from "next/image";
const ImageGallery = () => {
  // List of image URLs (replace with your actual image URLs)
  const images = [
    "/kitty7.jpg", // Image 1
    "/kitty2.jpg", // Image 2
    "/kitty3.jpg", // Image 3
    "/kitty4.jpg", // Image 4
    "/kitty5.jpg", // Image 5
    "/kitty6.jpg", // Image 6
  ];

  // State to hold the current shuffled order of images
  const [shuffledImages, setShuffledImages] = useState(images);

  // Shuffle function
  const shuffleImages = () => {
    const shuffled = [...images];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
    }
    setShuffledImages(shuffled);
  };

  // Automatically shuffle images every 1 second
  useEffect(() => {
    // Shuffle images when the component mounts
    const intervalId = setInterval(() => {
      shuffleImages();
    }, 5000); // Shuffle every 1000ms (1 second)

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {shuffledImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <Image
              width="266"
              height="150"
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover"
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
