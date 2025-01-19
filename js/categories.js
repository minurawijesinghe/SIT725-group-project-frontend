const BASE_URL_CAT = 'https://p-e-t-app-1c6ad807cc55.herokuapp.com/api/categories';

const getCategories = async (token) => {
    try {
        const response = await fetch(`${BASE_URL_CAT}`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

const addCategory = async (token, categoryData) => {
    try {
        const response = await fetch(`${BASE_URL_CAT}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoryData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error adding category:', error);
        throw error;
    }
};

const getCategoryById = async (id, token) => {
    try {
        const response = await fetch(`${BASE_URL_CAT}/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};

// Update a category
const updateCategory = async (id, token, updatedCategory) => {
    try {
        const response = await fetch(`${BASE_URL_CAT}/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCategory),
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating category:', error);
        throw error;
    }
};

// Delete a category
const deleteCategory = async (id, token) => {
    try {
        const response = await fetch(`${BASE_URL_CAT}/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` },
        });
        return await response.json();
    } catch (error) {
        console.error('Error deleting category:', error);
        throw error;
    }
};