export const getImageUrl = (path) => path ? `${process.env.REACT_APP_API_URL}/${path}` : "/placeholder.png";

export const calculateDiscount = (price, discount) => {
    if (!discount) return price;
    return +(price - (price * discount) / 100).toFixed(2);
};

export const sortProducts = (products, type = "asc") => {
    return products.sort((a, b) => type === "asc" ? a.price - b.price : b.price - a.price);
};
