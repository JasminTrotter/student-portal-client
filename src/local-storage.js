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



//for POST to Reservations 
export const saveClassTitle = classTitle => {
    try {
        localStorage.setItem('classTitle', classTitle);
    } catch (e) {}
};

export const saveTime = time => {
    try {
        localStorage.setItem('time', time);
    } catch (e) {}
};

export const saveDay = day => {
    try {
        localStorage.setItem('day', day);
    } catch (e) {}
};

export const saveDate = date => {
    try {
        localStorage.setItem('date', date);
    } catch (e) {}
};

export const removeClassTitle = () => {
    try {
        localStorage.removeItem('classTitle');
    } catch (e) {}
};

export const removeTime = () => {
    try {
        localStorage.removeItem('time');
    } catch (e) {}
};

export const removeDay = () => {
    try {
        localStorage.removeItem('day');
    } catch (e) {}
};

export const removeDate = () => {
    try {
        localStorage.removeItem('date');
    } catch (e) {}
};