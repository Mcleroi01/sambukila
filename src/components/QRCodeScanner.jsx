import React, { useState } from 'react';
import { firestoreService } from '../services/firestore';
import QrReader from 'react-qr-scanner';


const QRCodeScanner = () => {
    const [scanResult, setScanResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleScan = async (result) => {
        if (!result?.text) return;
        try {
            const url = new URL(result.text);
            const guestId = url.pathname.split('/').pop();

            if (!guestId) throw new Error('Invalid QR code');

            setLoading(true);
            setError('');

            const response = await firestoreService.guestPublicView(guestId);

            if (response.success) {
                setScanResult({
                    guest: response.guest,
                    timestamp: new Date().toISOString(),
                    isValid: true,
                });
            } else {
                throw new Error('Guest not found');
            }
        } catch (err) {
            setError(err.message || 'Error scanning QR code');
            setScanResult({
                isValid: false,
                error: err.message,
            });
        } finally {
            setLoading(false);
        }
    };

    const handleError = (err) => {
        console.error('QR Scanner Error:', err);
        setError('Error accessing the camera. Please check your camera permissions.');
    };

    const resetScanner = () => {
        setScanResult(null);
        setError('');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Guest Check-in Scanner</h1>

                {error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                        <p>{error}</p>
                    </div>
                )}

                {!scanResult ? (
                    <div className="mb-6">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-4">
                            <QrReader
                                delay={300}
                                onError={handleError}
                                onScan={(data) => {
                                    if (data) handleScan({ text: data });
                                }}
                                style={{ width: '100%' }}
                                facingMode="environment"
                            />

                        </div>
                        <p className="text-center text-gray-600">Point the camera at the guest's QR code</p>
                    </div>
                ) : (
                    <div className="text-center">
                        {scanResult.isValid ? (
                            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
                                <h3 className="font-bold text-lg">✅ Check-in Successful!</h3>
                                <p>Guest: {scanResult.guest.name}</p>
                                <p>Event: {scanResult.guest.eventId}</p>
                                <p className="text-sm text-gray-500">
                                    Checked in at: {new Date(scanResult.timestamp).toLocaleString()}
                                </p>
                            </div>
                        ) : (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
                                <h3 className="font-bold text-lg">❌ Invalid QR Code</h3>
                                <p>{scanResult.error || 'The scanned QR code is not valid.'}</p>
                            </div>
                        )}

                        <button
                            onClick={resetScanner}
                            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Scan Another Code
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QRCodeScanner;

