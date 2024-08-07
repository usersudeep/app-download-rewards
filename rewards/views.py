from rest_framework import viewsets, permissions
from .models import App, Task, Points
from .serializers import AppSerializer, TaskSerializer, PointsSerializer

class AppViewSet(viewsets.ModelViewSet):
    queryset = App.objects.all()
    serializer_class = AppSerializer
    permission_classes = [permissions.IsAuthenticated]

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

class PointsViewSet(viewsets.ModelViewSet):
    queryset = Points.objects.all()
    serializer_class = PointsSerializer
    permission_classes = [permissions.IsAuthenticated]
