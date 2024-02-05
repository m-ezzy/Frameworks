from django.urls import path

from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('ssession',views.setsession),  
    path('gsession',views.getsession),
    path('dsession',views.delsession),
]