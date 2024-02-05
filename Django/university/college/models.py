from django.db import models

# Create your models here.
class College(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Course(models.Model):
    name = models.CharField(max_length=100)
    duration_years = models.IntegerField()
    college = models.ForeignKey(College, on_delete=models.CASCADE, related_name='courses')

    def __str__(self):
        return self.name

class Subject(models.Model):
    name = models.CharField(max_length=100)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='subjects')

    def __str__(self):
        return self.name

class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    age = models.IntegerField()
    college = models.ForeignKey(College, on_delete=models.CASCADE, related_name='students')
    courses = models.ManyToManyField(Course, related_name='students')
    subjects = models.ManyToManyField(Subject, related_name='students')

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
