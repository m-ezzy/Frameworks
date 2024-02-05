from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

from .models import Student
from django.urls import reverse_lazy

class StudentListView(ListView):
  model = Student
  template_name = 'student_list.html'
  context_object_name = 'students'

class StudentDetailView(DetailView):
  model = Student
  template_name = 'student_detail.html'
  context_object_name = 'student'
  
class StudentCreateView(CreateView):
  model = Student
  template_name = 'student_form.html'
  fields = '__all__'


class StudentUpdateView(UpdateView):
  model = Student
  template_name = 'student_update.html'
  fields = '__all__'
  success_url = reverse_lazy('student_list')

class StudentDeleteView(DeleteView):
  model = Student
  template_name = 'student_confirm_delete.html'
  # success_url = reverse_lazy('student_list')



