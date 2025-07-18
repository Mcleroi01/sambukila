export const qrCodeService = {
  // Generate invitation URL
  generateInviteUrl: (guestId) => {
    return `${window.location.origin}/invite/${guestId}`;
  },

  // Generate WhatsApp share URL
  generateWhatsAppUrl: (guestName, inviteUrl, eventName) => {
    const message = `Hi ${guestName}! You're invited to ${eventName}. View your invitation: ${inviteUrl}`;
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  },

  // Download QR code as image
  downloadQRCode: (canvas, guestName) => {
    if (canvas) {
      const url = canvas.toDataURL();
      const link = document.createElement('a');
      link.download = `${guestName}-invitation-qr.png`;
      link.href = url;
      link.click();
    }
  }
};