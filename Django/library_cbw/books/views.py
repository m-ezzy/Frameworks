from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy

from .models import Author, Book, Magazine, Publisher
from django.views.generic import CreateView, ListView, DetailView, UpdateView, DeleteView

# Class based views
class AuthorListView(LoginRequiredMixin, ListView):
    model = Author
    template_name = "books/author_list.html"
    context_object_name = "authors"

class AuthorDetailView(LoginRequiredMixin, DetailView):
    model = Author
    template_name = "books/author_detail.html"
    context_object_name = "author"

class AuthorCreateView(LoginRequiredMixin, CreateView):
    model = Author
    fields = "__all__"
    template_name = "books/author_form.html"
    success_url = reverse_lazy("author_list")

class AuthorUpdateView(LoginRequiredMixin, UpdateView):
    model = Author
    fields = "__all__"
    template_name = "books/author_form.html"
    success_url = reverse_lazy("author_list")

class AuthorDeleteView(LoginRequiredMixin, DeleteView):
    model = Author
    template_name = "books/author_confirm_delete.html"
    context_object_name = "author"
    success_url = reverse_lazy("author_list")

class BookListView(LoginRequiredMixin, ListView):
    model = Book
    template_name = "books/book_list.html"
    context_object_name = "books"
    queryset = Book.objects.order_by("-published_date")


class BookDetailView(LoginRequiredMixin, DetailView):
    model = Book
    template_name = "books/book_detail.html"
    context_object_name = "book"


class BookCreateView(LoginRequiredMixin, CreateView):
    model = Book
    template_name = "books/book_form.html"
    fields = "__all__"
    success_url = reverse_lazy("book_list")


class BookUpdateView(LoginRequiredMixin, UpdateView):
    model = Book
    template_name = "books/book_form.html"
    fields = ["title", "authors", "published_date", "genre", "is_available"]
    success_url = reverse_lazy("book_list")


class BookDeleteView(LoginRequiredMixin, DeleteView):
    model = Book
    template_name = "books/book_confirm_delete.html"
    success_url = reverse_lazy("book_list")


class PublisherListView(LoginRequiredMixin, ListView):
    model = Publisher
    template_name = "books/publisher_list.html"
    context_object_name = "publishers"


class PublisherDetailView(LoginRequiredMixin, DetailView):
    model = Publisher
    template_name = "books/publisher_detail.html"
    context_object_name = "book"


class PublisherCreateView(LoginRequiredMixin, CreateView):
    model = Publisher
    template_name = "books/publisher_form.html"
    fields = "__all__"
    success_url = reverse_lazy("publisher_list")


class PublisherUpdateView(LoginRequiredMixin, UpdateView):
    model = Publisher
    template_name = "books/publisher_form.html"
    fields = "__all__"
    success_url = reverse_lazy("publisher_list")


class PublisherDeleteView(LoginRequiredMixin, DeleteView):
    model = Publisher
    template_name = "books/publisher_confirm_delete.html"
    success_url = reverse_lazy("publisher_list")


class MagazineListView(LoginRequiredMixin, ListView):
    model = Magazine
    template_name = "books/magazine_list.html"
    context_object_name = "magazines"


class MagazineDetailView(LoginRequiredMixin, DetailView):
    model = Magazine
    template_name = "books/magazine_detail.html"
    context_object_name = "magazine"


class MagazineCreateView(LoginRequiredMixin, CreateView):
    model = Magazine
    template_name = "books/magazine_form.html"
    fields = "__all__"
    success_url = reverse_lazy("magazine_list")


class MagazineUpdateView(LoginRequiredMixin, UpdateView):
    model = Magazine
    template_name = "books/magazine_form.html"
    fields = "__all__"
    success_url = reverse_lazy("magazine_list")


class MagazineDeleteView(LoginRequiredMixin, DeleteView):
    model = Magazine
    template_name = "books/magazine_confirm_delete.html"
    success_url = reverse_lazy("magazine_list")
