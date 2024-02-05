"""library URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import include, path

from books.views import get_cookie as books_get_cookie
from books.views import get_session as books_get_session
from books.views import set_cookie as books_set_cookie
from books.views import set_session as books_set_session

from members.views import get_cookie as members_get_cookie
from members.views import get_session as members_get_session
from members.views import set_cookie as members_set_cookie
from members.views import set_session as members_set_session

from .views import home
from .views import user_login as library_user_login
from .views import user_logout as library_user_logout

urlpatterns = [
    path("admin/", admin.site.urls),
    path("books/", include("books.urls")),
    path("members/", include("members.urls")),
    path("", home, name="home"),  # Add the home view URL
    path("login/", library_user_login, name="user_login"),
    path("logout/", library_user_logout, name="user_logout"),
    path("books/set-cookie/", books_set_cookie, name="books_set_cookie"),
    path("books/get-cookie/", books_get_cookie, name="books_get_cookie"),
    path("members/set-cookie/", members_set_cookie, name="members_set_cookie"),
    path("members/get-cookie/", members_get_cookie, name="members_get_cookie"),
    path("books/set-session/", books_set_session, name="books_set_session"),
    path("books/get-session/", books_get_session, name="books_get_session"),
    path("members/set-session/", members_set_session, name="members_set_session"),
    path("members/get-session/", members_get_session, name="members_get_session"),
]
