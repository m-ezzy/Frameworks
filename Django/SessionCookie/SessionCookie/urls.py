from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('cookie.urls')),
    path('', include('session.urls')),
]
