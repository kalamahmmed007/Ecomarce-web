export const formatPrice = (amount, currency = "USD") => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
    }).format(amount);
};

export const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
};

export const formatPhoneNumber = (phone) => {
    if (!phone) return "";
    return phone.replace(/(\d{1,3})(\d{3})(\d{3,4})/, "+$1 $2 $3");
};
