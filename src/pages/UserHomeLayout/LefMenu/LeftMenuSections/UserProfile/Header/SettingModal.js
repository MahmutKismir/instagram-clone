import React from "react";

const SettingModal = ({ modal, onClose }) => {
  if (!modal) {
    return false;
  }
  return (
    <>
      <div
        onClick={onClose}
        className="bg-[rgba(0,0,0,0.4)] z-50 fixed top-0 bottom-0 left-0 right-0 justify-center flex items-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className=" w-[400px] h-[336px] bg-white rounded-xl  "
        >
          <button className="w-[400px] h-[48px] px-2 py-1 text-sm border-b ">
            Uygulamalar ve İnternet Siteleri
          </button>
          <button className="w-[400px] h-[48px] px-2 py-1 text-sm border-b">
            QR Kodu
          </button>
          <button className="w-[400px] h-[48px] px-2 py-1 text-sm border-b">
            Bildirimler
          </button>
          <button className="w-[400px] h-[48px] px-2 py-1 text-sm border-b">
            Ayarlar ve gizlilik
          </button>
          <button className="w-[400px] h-[48px] px-2 py-1 text-sm border-b">
            Gözetim
          </button>
          <button className="w-[400px] h-[48px] px-2 py-1 text-sm border-b">
            Çıkış Yap
          </button>
          <button
            onClick={onClose}
            className="w-[400px] h-[48px] px-2 py-1 text-sm "
          >
            İptal
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingModal;
