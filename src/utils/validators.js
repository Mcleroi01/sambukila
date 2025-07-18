export const validators = {
  email: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  phone: (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },

  required: (value) => {
    return value && value.trim().length > 0;
  },

  minLength: (value, min) => {
    return value && value.length >= min;
  },

  url: (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
};