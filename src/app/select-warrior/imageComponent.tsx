import React, { useEffect, useState } from 'react';

const ImageComponent = ({ src }: {src: string}) => {
  return (
    <div className="scale-100 p-10 bg-green-500 flex items-center justify-center rounded-md">
      <img
        src={src}
        alt="Centered Image"
        className="object-cover max-w-64 max-h-64"
        style={{ width: '256px', height: '256px' }}
      />
    </div>
  );
};

const getRandomImageSrc = () => {
  const links = [
    "https://cdn-icons-png.flaticon.com/256/805/805270.png",
    "https://cdn-icons-png.flaticon.com/512/2328/2328597.png",
    "https://png.pngtree.com/png-clipart/20220124/original/pngtree-war-horse-png-image_7197052.png",
  ];
  const randomIndex = Math.floor(Math.random() * links.length);
  return links[randomIndex];
};

const SelectComponent = () => {
  const [imageSrc, setImageSrc] = useState(getRandomImageSrc());
  const [disabled, setDisabled] = useState(false);
  const [seconds, setSeconds] = useState(3);

  const DEFAULT_MESSAGE = 'Get Random Unit';

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(prevSeconds => prevSeconds - 1);
        } else {
          clearInterval(interval);
          setIsActive(false);
          setDisabled(false);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleSelect = () => {
    console.log('imageSrc',imageSrc)
    setDisabled(true);
    setIsActive(true);
    setImageSrc(getRandomImageSrc());
    setSeconds(3);
  };

  return (
    <div className="main-content flex flex-col items-center p-4 bg-green-500 rounded-md shadow-md">
      <ImageComponent src={imageSrc} />
      <button
        disabled={disabled}
        onClick={handleSelect}
        className="mx-auto mt-5 max-w-60 w-full py-2 px-4 bg-green-700 text-white font-semibold rounded-md disabled:bg-gray-400 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        {disabled ? seconds : DEFAULT_MESSAGE}
      </button>
    </div>
  );
};

export default SelectComponent;
