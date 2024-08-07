from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AppViewSet, TaskViewSet, PointsViewSet

router = DefaultRouter()
router.register(r'apps', AppViewSet)
router.register(r'tasks', TaskViewSet)
router.register(r'points', PointsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
