from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('scookie', views.setcookie, name='setcookie'),
    path('gcookie', views.getcookie, name='getcookie'),
    path('dcookie', views.delcookie, name='delcookie'),
]