from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Point, Polygon, SesizareFunctionar1, SesizareFunctionar2

class SesizareFunctionar1Serializer(serializers.ModelSerializer):
    class Meta:
        model = SesizareFunctionar1
        fields = ['id', 'title', 'content']

class SesizareFunctionar2Serializer(serializers.ModelSerializer):
    class Meta:
        model = SesizareFunctionar2
        fields = ['id', 'title', 'content']

class PolygonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Polygon
        fields = ['id', 'user', 'label', 'points']

class PointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Point
        fields = ['id', 'user', 'longitude', 'latitude', 'isInterestPoint']

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']