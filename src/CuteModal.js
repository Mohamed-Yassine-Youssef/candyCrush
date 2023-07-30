import React, { useState } from 'react';


const CuteModal = ({score}) => {
 

  const handleModalToggle = () => {
    window.location.reload()
  };

  return (
    <div className="cute-modal-container">
      

    
        <div className="modal-overlay">
          <div className="cute-modal">
            <div className="close-button" onClick={handleModalToggle}>
              &times;
            </div>
            <h2 className='sti'>Your Score is:</h2>
            <p className='sco'>score: {score}pt</p>
          </div>
        </div>
     
    </div>
  );
};

export default CuteModal;
