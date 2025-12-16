import React from 'react';

const Whatsapp = () => {
  return (
    <div className="fixed bottom-4 md:bottom-8 right-3 z-[1000]">
      <a
        href="https://api.whatsapp.com/send?phone=918920068776"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-12 md:h-20"
          src="/assets/whastapp-icon.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default Whatsapp;
