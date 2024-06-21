import React from 'react';

const WhatsAppLink = ({ phoneNumber, message }) => {
  // Format nomor telepon dengan menghapus karakter non-digit
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');

  // Buat URL untuk link WhatsApp
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex w-[279px] h-[60px] items-center justify-center gap-2.5 px-4 py-2.5 absolute top-[275px] left-[130px] bg-primary-2 rounded-[10px]">
         {/* <WhatsApp className="!relative !w-10 !h-10 !ml-[-2.00px]" /> */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <div 
        
        className="relative w-fit mr-[-2.00px] font-heading-8-semibold font-[number:var(--heading-8-semibold-font-weight)] text-primary-1 text-[length:var(--heading-8-semibold-font-size)] text-center tracking-[var(--heading-8-semibold-letter-spacing)] leading-[var(--heading-8-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-8-semibold-font-style)]">
              Chat Melalui WhatsApp
        </div>
      </a>
    </div>
  );
};

export default WhatsAppLink;
