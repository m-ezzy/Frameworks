from django.contrib import admin

# Register your models here.
from .models import College, Course, Subject, Student

admin.site.register(College)
admin.site.register(Course)
admin.site.register(Subject)
admin.site.register(Student)
