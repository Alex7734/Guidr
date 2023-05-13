from django.db import models
from django.contrib.auth.models import User


class SesizareFunctionar1(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name_plural = "Sesizari Functionar 1"
        ordering = ['id']

class SesizareFunctionar2(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name_plural = "Sesizari Functionar 2"
        ordering = ['id']

class Point(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='points')
    longitude = models.FloatField()
    latitude = models.FloatField()
    label = models.CharField(max_length=100)
    isInterestPoint = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.longitude}, {self.latitude} by {self.user.username}'
    
    class Meta:
        verbose_name_plural = "Points"
        ordering = ['id']