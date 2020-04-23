
//FUNCTION TO PREVENT A CALLBACK FUNCTION FROM BEING CALLED UNTIL THERE IS A CERTAIN
//TIME GAP AFTER IT (TO PREVENT REPETITIVE CALLS IN A SHORT PERIOD OF TIME)

const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout (() => {
            func.apply(null, args);
        }, delay);
    };
};