from django.db import models
from django.utils import timezone

# Create your models here.
class Person(models.Model):
    f_name = models.CharField(max_length=25)
    l_name = models.CharField(max_length=50)
    dob = models.DateTimeField('date published', default=timezone.now())

    def __str__(self):
        return f"{self.f_name} {self.l_name}"