document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const profileInfo = document.getElementById('profile-info');
    const tasksList = document.getElementById('tasks-list');

    const apiUrl = 'http://localhost:8000/api';

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        await signup(username, password);
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        await login(username, password);
    });

    async function signup(username, password) {
        try {
            const response = await fetch(`${apiUrl}/signup/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            alert('Signup successful! You can now log in.');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function login(username, password) {
        try {
            const response = await fetch(`${apiUrl}/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            localStorage.setItem('token', data.token);
            await fetchProfile();
            await fetchTasks();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function fetchProfile() {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await fetch(`${apiUrl}/profile/`, {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                });
                const data = await response.json();
                profileInfo.innerHTML = `
                    <p>Name: ${data.username}</p>
                    <p>Points: ${data.points}</p>
                `;
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    async function fetchTasks() {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await fetch(`${apiUrl}/tasks/`, {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                });
                const data = await response.json();
                tasksList.innerHTML = '';
                data.forEach(task => {
                    const taskElement = document.createElement('div');
                    taskElement.innerHTML = `
                        <p>App: ${task.app}</p>
                        <p>Completed: ${task.completed}</p>
                        <form class="screenshot-form" data-task-id="${task.id}">
                            <label for="screenshot">Upload Screenshot:</label>
                            <input type="file" name="screenshot">
                            <button type="submit">Upload</button>
                        </form>
                    `;
                    tasksList.appendChild(taskElement);
                });
                attachScreenshotUploadHandlers();
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    function attachScreenshotUploadHandlers() {
        const forms = document.querySelectorAll('.screenshot-form');
        forms.forEach(form => {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const taskId = form.getAttribute('data-task-id');
                const screenshot = form.querySelector('input[type="file"]').files[0];
                await uploadScreenshot(taskId, screenshot);
            });
        });
    }

    async function uploadScreenshot(taskId, screenshot) {
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('screenshot', screenshot);

        try {
            await fetch(`${apiUrl}/tasks/${taskId}/upload_screenshot/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${token}`
                },
                body: formData
            });
            alert('Screenshot uploaded successfully!');
            await fetchTasks();
        } catch (error) {
            console.error('Error:', error);
        }
    }
});
