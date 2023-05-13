from django.contrib import admin
from .models import Polygon, SesizareFunctionar1, SesizareFunctionar2, Point

admin.site.register(SesizareFunctionar1)
admin.site.register(SesizareFunctionar2)
admin.site.register(Point)
admin.site.register(Polygon)