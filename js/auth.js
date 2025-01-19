
async function registerUser(requestData) {
    try {
        const response = await fetch('https://p-e-t-app-1c6ad807cc55.herokuapp.com/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData),
        });

        const result = await response.json();
        if (response.ok) {
            return { success: true, message: 'Registration successful! Redirecting to OTP verification...', redirect: true };
        } else {
            return { success: false, message: result.message || 'An error occurred.' };
        }
    } catch (error) {
        return { success: false, message: 'Network error. Please try again.' };
    }
}

async function loginUser(requestBody) {
    try {
        const response = await fetch("https://p-e-t-app-1c6ad807cc55.herokuapp.com/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody),
        });

        if (response.ok) {
            const data = await response.json();
            return {
                success: true,
                user: data.user,
                token: data.token,
            };
        } else {
            const errorData = await response.json();
            return {
                success: false,
                message: errorData.message || "Unknown error",
            };
        }
    } catch (error) {
        return {
            success: false,
            message: "Network error. Please try again.",
        };
    }
}
