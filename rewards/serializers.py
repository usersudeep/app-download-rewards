from rest_framework import serializers
from .models import App, Task, Points

class AppSerializer(serializers.ModelSerializer):
    class Meta:
        model = App
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class PointsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Points
        fields = '__all__'
