export const editCartItemsLocalStorage = (data, operation) => {
    console.log(data, operation);
    window.localStorage.setItem('cart', ((cv, iData) => {
        const initialStructureLCCart = {
            name: iData.name,
            price: iData.price,
            count: 1
        }
        return cv == null ? JSON.stringify(
            {
                [iData._id]: initialStructureLCCart
            }
        ) : JSON.stringify(((c) => {
            return c[iData._id] ?
                c[iData._id].count + operation > 0 ? { ...c, ...{ [iData._id]: { ...c[iData._id], ...{ count: (c[iData._id].count + operation) } } } } :
                    delete c[iData._id] ? c : c
                :
                { ...c, ...{ [iData._id]: initialStructureLCCart } }
        }
        )(JSON.parse(cv)))
    }
    )(window.localStorage.getItem('cart'), data))
}