from django.db import models

# Create your models here.

class Student(models.Model):
  name = models.CharField(max_length=50)
  roll_no = models.IntegerField()
  marks = models.IntegerField()
  email = models.EmailField(max_length=254)
  course = models.CharField(max_length=50)

  def __str__(self):
    return self.name

