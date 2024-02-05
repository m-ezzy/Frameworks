from django.urls import path 
from .views import StudentListView,StudentDetailView,StudentCreateView,StudentUpdateView,StudentDeleteView

urlpatterns = [
  path('student_list',StudentListView.as_view(),name='student_list'),
  path('student_detail/<int:pk>',StudentDetailView.as_view(),name='student_detail'),
  path('student_create',StudentCreateView.as_view(),name='student_create'),
  path('student_update/<int:pk>',StudentUpdateView.as_view(),name='student_update'),
  path('student_delete/<int:pk>',StudentDeleteView.as_view(),name='student_delete'),

]
