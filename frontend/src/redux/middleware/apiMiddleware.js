const apiMiddleware = (store) => (next) => async (action) => {
    if (action.type !== "api/call") return next(action);

    const { url, method, data, onSuccess, onError } = action.payload;

    try {
        const res = await fetch(url, {
            method: method || "GET",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${store.getState().auth.token}` },
            body: data ? JSON.stringify(data) : null,
        });
        const result = await res.json();
        store.dispatch(onSuccess(result));
    } catch (err) {
        store.dispatch(onError(err.message));
    }
};

export default apiMiddleware;
