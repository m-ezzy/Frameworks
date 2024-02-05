from django.urls import path

from .views import AuthorCreateView as BooksAuthorCreateView
from .views import AuthorDeleteView as BooksAuthorDeleteView
from .views import AuthorDetailView as BooksAuthorDetailView
from .views import AuthorListView as BooksAuthorListView
from .views import AuthorUpdateView as BooksAuthorEditView

# from .views import book_list, book_detail, book_create, book_edit, book_delete
from .views import (
    BookCreateView,
    BookDeleteView,
    BookDetailView,
    BookListView,
    BookUpdateView,
    MagazineCreateView,
    MagazineDeleteView,
    MagazineDetailView,
    MagazineListView,
    MagazineUpdateView,
    PublisherCreateView,
    PublisherDeleteView,
    PublisherDetailView,
    PublisherListView,
    PublisherUpdateView,
)

urlpatterns = [
    path("authors/", BooksAuthorListView.as_view(), name="author_list"),
    path("authors/<int:pk>/", BooksAuthorDetailView.as_view(), name="author_detail"),
    path("authors/create/", BooksAuthorCreateView.as_view(), name="author_create"),
    path("authors/<int:pk>/edit/", BooksAuthorEditView.as_view(), name="author_edit"),
    path("authors/<int:pk>/delete/", BooksAuthorDeleteView.as_view(), name="author_delete"),

    path("books/", BookListView.as_view(), name="book_list"),
    path("books/<int:pk>/", BookDetailView.as_view(), name="book_detail"),
    path("books/create/", BookCreateView.as_view(), name="book_create"),
    path("books/<int:pk>/update/", BookUpdateView.as_view(), name="book_edit"),
    path("books/<int:pk>/delete/", BookDeleteView.as_view(), name="book_delete"),
    path("publishers/", PublisherListView.as_view(), name="publisher_list"),
    path(
        "publishers/<int:pk>/", PublisherDetailView.as_view(), name="publisher_detail"
    ),
    path("publishers/create/", PublisherCreateView.as_view(), name="publisher_create"),
    path(
        "publishers/<int:pk>/edit/",
        PublisherUpdateView.as_view(),
        name="publisher_edit",
    ),
    path(
        "publishers/<int:pk>/delete/",
        PublisherDeleteView.as_view(),
        name="publisher_delete",
    ),
    path("magazines/", MagazineListView.as_view(), name="magazine_list"),
    path("magazines/<int:pk>/", MagazineDetailView.as_view(), name="magazine_detail"),
    path("magazines/create/", MagazineCreateView.as_view(), name="magazine_create"),
    path(
        "magazines/<int:pk>/edit/", MagazineUpdateView.as_view(), name="magazine_edit"
    ),
    path(
        "magazines/<int:pk>/delete/",
        MagazineDeleteView.as_view(),
        name="magazine_delete",
    ),
]
