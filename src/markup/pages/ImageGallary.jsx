import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import img1 from '../../images/img1.jpeg';
import img2 from '../../images/img2.jpeg';
import img3 from '../../images/img3.jpeg';
import img4 from '../../images/img4.jpeg';
import img5 from '../../images/img5.jpeg';
import img6 from '../../images/img6.jpeg';
import img7 from '../../images/img7.jpeg';
import img8 from '../../images/img8.jpeg';
import img9 from '../../images/img9.jpeg';
import img10 from '../../images/img10.jpeg';
import img11 from '../../images/img11.jpeg';
import img12 from '../../images/img12.jpeg';
import img13 from '../../images/img13.jpeg';
import img14 from '../../images/img14.jpeg';
import img15 from '../../images/img15.jpeg';
import img16 from '../../images/img16.jpeg';

function ImageGallery() {
  const data = [
    { id: 1, imgSrc: img1 },
    { id: 2, imgSrc: img2 },
    { id: 3, imgSrc: img3 },
    { id: 4, imgSrc: img4 },
    { id: 5, imgSrc: img5 },
    { id: 6, imgSrc: img6 },
    { id: 7, imgSrc: img7 },
    { id: 8, imgSrc: img8 },
    { id: 9, imgSrc: img9 },
    { id: 10, imgSrc: img10 },
    { id: 11, imgSrc: img11 },
    { id: 12, imgSrc: img12 },
    { id: 13, imgSrc: img13 },
    { id: 14, imgSrc: img14 },
    { id: 15, imgSrc: img15 },
    { id: 16, imgSrc: img16 },

  ];

  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const openModal = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {/* Modal */}
      {modal && (
        <div 
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-[1000]"
          onClick={closeModal} // Close modal on overlay click
          role="dialog" 
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl p-4">
            <img
              src={tempImgSrc}
              alt="Enlarged view"
              className="mx-auto w-[500px] h-[100vh] rounded-lg shadow-lg"
            />
            <CloseIcon
              onClick={closeModal}
              className="absolute top-4 right-4 text-white cursor-pointer"
              fontSize="large"
            />
          </div>
        </div>
      )}

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => openModal(item.imgSrc)}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            role="button"
            aria-label={`View image ${item.id}`}
          >
            <img
              src={item.imgSrc}
              alt={`Thumbnail ${item.id}`}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">View Image</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ImageGallery;