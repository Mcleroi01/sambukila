import React, { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Download, X } from 'lucide-react';
import { qrCodeService } from '../services/qrCode';

const QRCodeCard = ({ guest, onClose }) => {
  const qrRef = useRef();

  const handleDownload = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (canvas) {
      qrCodeService.downloadQRCode(canvas, guest.name);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-sm w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">QR Code</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="text-center space-y-4">
            <div className="bg-white p-4 rounded-lg border-2 border-gray-200 inline-block" ref={qrRef}>
              <QRCodeCanvas 
                value={guest.inviteUrl} 
                size={200}
                level="M"
                includeMargin={true}
              />
            </div>
            
            <div>
              <p className="font-medium text-gray-900">{guest.name}</p>
              <p className="text-sm text-gray-600 mt-1">
                Scan to view invitation
              </p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleDownload}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeCard;