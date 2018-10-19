export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};



//for the Dashboard
export const saveUserId = userId => {
    try {
        localStorage.setItem('userId', userId);
    } catch (e) {}
};

export const saveFirstName = firstName => {
    try {
        localStorage.setItem('firstName', firstName);
    } catch (e) {}
};


//For POST to Purchase History
export const saveClasses = classes => {
    try {
        localStorage.setItem('classes', classes);
    } catch (e) {}
};

export const saveAmountPaid = amountPaid => {
    try {
        localStorage.setItem('amountPaid', amountPaid);
    } catch (e) {}
};

export const savePurchaseDate = purchaseDate => {
    try {
        localStorage.setItem('purchaseDate', purchaseDate);
    } catch (e) {}
};

export const removeClasses = () => {
    try {
        localStorage.removeItem('classes');
    } catch (e) {}
};

export const removeAmountPaid = () => {
    try {
        localStorage.removeItem('amountPaid');
    } catch (e) {}
};

export const removePurchaseDate = () => {
    try {
        localStorage.removeItem('purchaseDate');
    } catch (e) {}
};