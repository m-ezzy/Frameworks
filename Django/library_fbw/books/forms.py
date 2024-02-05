from django import forms
from .models import Author, Book, Publisher, Magazine

class AuthorForm(forms.ModelForm):
  class Meta:
    model = Author
    fields = '__all__'
    # fields = ["author_name", "author_birth_date", "author_is_alive"]

class BookForm(forms.ModelForm):
  class Meta:
    model = Book
    fields = '__all__'

class PublisherForm(forms.ModelForm):
  class Meta:
    model = Publisher
    fields = '__all__'

class MagazineForm(forms.ModelForm):
  class Meta:
    model = Magazine
    fields = '__all__'
