from django.urls import path
from .views import member_list, member_detail, member_create, member_edit, member_delete

urlpatterns = [
    path('members/', member_list, name='member_list'),
    path('members/<int:pk>/', member_detail, name='member_detail'),
    path('members/create/', member_create, name='member_create'),
    path('members/<int:pk>/edit/', member_edit, name='member_edit'),
    path('members/<int:pk>/delete/', member_delete, name='member_delete'),
]
