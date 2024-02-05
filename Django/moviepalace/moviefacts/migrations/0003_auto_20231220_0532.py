# Generated by Django 3.2 on 2023-12-20 05:32

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('moviefacts', '0002_alter_person_dob'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='dob',
            field=models.DateTimeField(default=datetime.datetime(2023, 12, 20, 5, 32, 35, 273186, tzinfo=utc), verbose_name='date published'),
        ),
        migrations.AlterField(
            model_name='person',
            name='f_name',
            field=models.CharField(max_length=25),
        ),
    ]
