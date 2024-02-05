from django.db import models

class Author(models.Model):
  name = models.CharField(max_length=100)
  birth_date = models.DateField()
  is_alive = models.BooleanField(default=True)

class Book(models.Model):
  title = models.CharField(max_length=200)
  published_date = models.DateField()
  is_available = models.BooleanField(default=True)
  genre = models.CharField(max_length=50)
  author = models.ForeignKey(Author, on_delete=models.CASCADE)
  readers = models.ManyToManyField('members.Member', related_name='books_readers')

class Publisher(models.Model):
  name = models.CharField(max_length=100)
  established_date = models.DateField()
  location = models.CharField(max_length=100)

class Magazine(models.Model):
  title = models.CharField(max_length=200)
  publication_date = models.DateField()
  is_available = models.BooleanField(default=True)
  publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)
