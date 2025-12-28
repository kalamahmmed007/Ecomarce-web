export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const validatePassword = (password) => {
    // Min 8 chars, at least one letter & one number
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
};

export const validatePhone = (phone) => {
    const re = /^\+?\d{7,15}$/;
    return re.test(phone);
};
