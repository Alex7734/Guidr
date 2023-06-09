from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from api import views
import rest_auth

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'points', views.PointViewSet)
router.register(r'polygons', views.PolygonViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('rest-auth', include('rest_auth.urls')),
]
