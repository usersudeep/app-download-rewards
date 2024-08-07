from django.db import models
from django.contrib.auth.models import User

class App(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    download_url = models.URLField()

class Task(models.Model):
    app = models.ForeignKey(App, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    screenshot = models.ImageField(upload_to='screenshots/')
    completed = models.BooleanField(default=False)

class Points(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    points = models.IntegerField(default=0)
