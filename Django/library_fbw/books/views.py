from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import get_object_or_404, redirect, render

from .forms import AuthorForm, BookForm, MagazineForm, PublisherForm
from .models import Author, Book, Magazine, Publisher


@login_required
def author_list(request):
    authors = Author.objects.all()
    return render(request, "books/author_list.html", {"authors": authors})

@login_required
def author_detail(request, pk):
    author = get_object_or_404(Author, pk=pk)
    return render(request, "books/author_detail.html", {"author": author})

@login_required
def author_create(request):
    if request.method == "POST":
        form = AuthorForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("author_list")
    else:
        form = AuthorForm()
        return render(request, "books/author_form.html", {"form": form})

@login_required
def author_edit(request, pk):
    author = get_object_or_404(Author, pk=pk)
    if request.method == "POST":
        form = AuthorForm(request.POST, instance=author)
        if form.is_valid():
            form.save()
            return redirect("author_list")
    else:
        form = AuthorForm(instance=author)
        return render(request, "books/author_form.html", {"form": form})

@login_required
def author_delete(request, pk):
    author = get_object_or_404(Author, pk=pk)
    if request.method == "POST":
        author.delete()
        return redirect("author_list")
    return render(request, "books/author_confirm_delete.html", {"author": author})

@login_required
def book_list(request):
    books = Book.objects.all()
    return render(request, "books/book_list.html", {"books": books})


@login_required
def book_detail(request, pk):
    book = get_object_or_404(Book, pk=pk)
    return render(request, "books/book_detail.html", {"book": book})


@login_required
def book_create(request):
    if request.method == "POST":
        form = BookForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("book_list")
    else:
        form = BookForm()
    return render(request, "books/book_form.html", {"form": form})


@login_required
def book_edit(request, pk):
    book = get_object_or_404(Book, pk=pk)
    if request.method == "POST":
        form = BookForm(request.POST, instance=book)
        if form.is_valid():
            form.save()
            return redirect("book_list")
    else:
        form = BookForm(instance=book)
    return render(request, "books/book_form.html", {"form": form})


@login_required
def book_delete(request, pk):
    book = get_object_or_404(Book, pk=pk)
    book.delete()
    return redirect("book_list")


@login_required
def publisher_list(request):
    publishers = Publisher.objects.all()
    return render(request, "books/publisher_list.html", {"publishers": publishers})


@login_required
def publisher_detail(request, pk):
    publisher = get_object_or_404(Publisher, pk=pk)
    return render(request, "books/publisher_detail.html", {"publisher": publisher})


@login_required
def publisher_create(request):
    if request.method == "POST":
        form = PublisherForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("publisher_list")
    else:
        form = PublisherForm()
    return render(request, "books/publisher_form.html", {"form": form})


@login_required
def publisher_edit(request, pk):
    publisher = get_object_or_404(Publisher, pk=pk)
    if request.method == "POST":
        form = PublisherForm(request.POST, instance=publisher)
        if form.is_valid():
            form.save()
            return redirect("publisher_list")
    else:
        form = PublisherForm(instance=publisher)
    return render(request, "books/publisher_form.html", {"form": form})


@login_required
def publisher_delete(request, pk):
    publisher = get_object_or_404(Publisher, pk=pk)
    publisher.delete()
    return redirect("publisher_list")


@login_required
def magazine_list(request):
    magazines = Magazine.objects.all()
    return render(request, "books/magazine_list.html", {"magazines": magazines})


@login_required
def magazine_detail(request, pk):
    magazine = get_object_or_404(Magazine, pk=pk)
    return render(request, "books/magazine_detail.html", {"magazine": magazine})


@login_required
def magazine_create(request):
    if request.method == "POST":
        form = MagazineForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("magazine_list")
    else:
        form = MagazineForm()
    return render(request, "books/magazine_form.html", {"form": form})


@login_required
def magazine_edit(request, pk):
    magazine = get_object_or_404(Magazine, pk=pk)
    if request.method == "POST":
        form = MagazineForm(request.POST, instance=magazine)
        if form.is_valid():
            form.save()
            return redirect("magazine_list")
    else:
        form = MagazineForm(instance=magazine)
    return render(request, "books/magazine_form.html", {"form": form})


@login_required
def magazine_delete(request, pk):
    magazine = get_object_or_404(Magazine, pk=pk)
    magazine.delete()
    return redirect("magazine_list")


# View for set cookie
@login_required
def set_cookie(request):
    response = HttpResponse("Cookie set!")
    response.set_cookie("example_cookie", "Hello, this is a cookie!")
    return response


# View for get cookie
@login_required
def get_cookie(request):
    value = request.COOKIES.get("example_cookie", "Default Value")
    return HttpResponse(f"The value of the cookie is: {value}")


# View for set session
@login_required
def set_session(request):
    request.session["example_key"] = "Hello, this is a session value!"
    return HttpResponse("Session value set!")


# View for get session
@login_required
def get_session(request):
    value = request.session.get("example_key", "Default Session Value")
    return HttpResponse(f"The value of the session is: {value}")
