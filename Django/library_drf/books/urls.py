from django.urls import path

from .views import BookDetailAPIView, BookListAPIView

urlpatterns = [
    path("api/books/", BookListAPIView.as_view(), name="book_list"),
    path("api/books/<int:pk>/", BookDetailAPIView.as_view(), name="book_detail"),
]
