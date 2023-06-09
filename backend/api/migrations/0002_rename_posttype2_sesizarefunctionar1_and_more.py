# Generated by Django 4.1.7 on 2023-05-12 22:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='PostType2',
            new_name='SesizareFunctionar1',
        ),
        migrations.RenameModel(
            old_name='PostType1',
            new_name='SesizareFunctionar2',
        ),
        migrations.AlterModelOptions(
            name='sesizarefunctionar1',
            options={'ordering': ['id'], 'verbose_name_plural': 'Sesizari Functionar 1'},
        ),
        migrations.AlterModelOptions(
            name='sesizarefunctionar2',
            options={'ordering': ['id'], 'verbose_name_plural': 'Sesizari Functionar 2'},
        ),
        migrations.CreateModel(
            name='Point',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('longitude', models.FloatField()),
                ('latitude', models.FloatField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='points', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Points',
                'ordering': ['id'],
            },
        ),
    ]
