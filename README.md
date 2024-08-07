# App Download Rewards

## Problem Statement

Create a web application that consists of two components:

1. **Admin Facing**: An interface where an admin user can add an Android app and specify the number of points earned by users for downloading the app. The admin interface should not use the default Django Admin interface.
2. **User Facing**: An interface where users can:
   - Sign up and log in.
   - View their profile, including name, profile information, points earned, and tasks completed.
   - Upload a screenshot (with drag-and-drop functionality) to confirm task completion, such as downloading a particular app.

## Approach

### Backend

- **Django Framework**: Used to build the backend API with authentication, permissions, and endpoints for managing apps and tasks.
- **Django REST Framework**: For creating RESTful APIs with token-based authentication.
- **Database**: SQLite for local development (can be replaced with PostgreSQL or another DBMS in production).

### Frontend

- **HTML/CSS**: Basic HTML and CSS for the user interface.
- **JavaScript**: For handling user interactions, making API calls, and managing the DOM.

## File Structure

### Backend

app_download_rewards/
├── app_download_rewards/
│ ├── init.py
│ ├── settings.py
│ ├── urls.py
│ └── wsgi.py
├── rewards/
│ ├── init.py
│ ├── models.py
│ ├── serializers.py
│ ├── urls.py
│ └── views.py
└── manage.py


### Frontend

app_download_rewards_frontend/
├── index.html
├── css/
│ └── styles.css
└── js/
└── scripts.js


## Dependencies

### Backend

- **Django**: `django` - For the web framework.
- **Django REST Framework**: `djangorestframework` - For creating RESTful APIs.
- **coreapi**: `coreapi` - For schema support.

Install these dependencies with:

```bash
pip install django djangorestframework coreapi

##Frontend

No additional dependencies for plain HTML/CSS/JavaScript.
