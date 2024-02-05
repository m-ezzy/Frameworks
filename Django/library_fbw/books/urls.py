from django.urls import path

from .views import (
    author_list, author_detail, author_create, author_edit, author_delete,
    book_create, book_delete, book_detail, book_edit, book_list,
    magazine_create, magazine_delete, magazine_detail, magazine_edit, magazine_list,
    publisher_create, publisher_delete, publisher_detail, publisher_edit, publisher_list,
)

urlpatterns = [
    path("authors/", author_list, name="author_list"),
    path("authors/<int:pk>/", author_detail, name="author_detail"),
    path("authors/create/", author_create, name="AuthorCreate"),
    path("authors/<int:pk>/edit/", author_edit, name="author_edit"),
    path("authors/<int:pk>/delete/", author_delete, name="author_delete"),

    path("books/", book_list, name="book_list"),
    path("books/<int:pk>/", book_detail, name="book_detail"),
    path("books/create/", book_create, name="book_create"),
    path("books/<int:pk>/edit/", book_edit, name="book_edit"),
    path("books/<int:pk>/delete/", book_delete, name="book_delete"),

    path("publishers/", publisher_list, name="publisher_list"),
    path("publishers/<int:pk>/", publisher_detail, name="publisher_detail"),
    path("publishers/create/", publisher_create, name="publisher_create"),
    path("publishers/<int:pk>/edit/", publisher_edit, name="publisher_edit"),
    path("publishers/<int:pk>/delete/", publisher_delete, name="publisher_delete"),

    path("magazines/", magazine_list, name="magazine_list"),
    path("magazines/<int:pk>/", magazine_detail, name="magazine_detail"),
    path("magazines/create/", magazine_create, name="magazine_create"),
    path("magazines/<int:pk>/edit/", magazine_edit, name="magazine_edit"),
    path("magazines/<int:pk>/delete/", magazine_delete, name="magazine_delete"),
]
