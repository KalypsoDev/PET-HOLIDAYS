import React from 'react';

function MapComponent() {
  return (
    <div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.046445699343!2d-3.70691452409611!3d40.40782185618154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227d49e4773bb%3A0x79065914bfc148c4!2sC.%20de%20Embajadores%2C%2054%2C%20Centro%2C%2028012%20Madrid!5e0!3m2!1ses!2ses!4v1708603425823!5m2!1ses!2ses" 
        width="600" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapComponent;
