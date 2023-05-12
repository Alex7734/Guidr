from django.db import models
from django.contrib.auth.models import Group
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType

group = Group.objects.create(name='PostAdmins')

class PostType1(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.title

class PostType2(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.title

content_type1 = ContentType.objects.get_for_model(PostType1)
content_type2 = ContentType.objects.get_for_model(PostType2)

permission1 = Permission.objects.create(
    codename='create_posttype1',
    name='Can create PostType1',
    content_type=content_type1,
)
permission2 = Permission.objects.create(
    codename='view_posttype1',
    name='Can view PostType1',
    content_type=content_type1,
)
permission3 = Permission.objects.create(
    codename='create_posttype2',
    name='Can create PostType2',
    content_type=content_type2,
)
permission4 = Permission.objects.create(
    codename='view_posttype2',
    name='Can view PostType2',
    content_type=content_type2,
)

group.permissions.add(permission1, permission2, permission3, permission4)