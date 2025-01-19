const BASE_URL = 'https://p-e-t-app-1c6ad807cc55.herokuapp.com/api';

const getExpenses = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/expenses`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching expenses:', error);
        throw error;
    }
};

const addExpense = async (token, data) => {
    try {
        const response = await fetch(`${BASE_URL}/expenses`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error('Error adding expense:', error);
        throw error;
    }
};

const updateExpense = async (token, id, data) => {
    console.log(data)
    try {
        const response = await fetch(`${BASE_URL}/expenses/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating expense:', error);
        throw error;
    }
};

const deleteExpense = async (token, id) => {
    try {
        const response = await fetch(`${BASE_URL}/expenses/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` },
        });
        return await response.json();
    } catch (error) {
        console.error('Error deleting expense:', error);
        throw error;
    }
};

const setThreshold = async (token, data) => {
    console.log(data)
    try {
        const response = await fetch(`${BASE_URL}/expenses/limit`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error('Error setting threshold:', error);
        throw error;
    }
};

const getThreshold = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/expenses/remaining`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching threshold:', error);
        throw error;
    }
};

