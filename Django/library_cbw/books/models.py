from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(
        max_length=50,
        choices=[("Ind", "India"), ("US", "United States")],
        default="Ind",
    )
    birth_date = models.DateField()
    is_alive = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Publisher(models.Model):
    name = models.CharField(max_length=100)
    established_date = models.DateField()
    location = models.CharField(max_length=100)

    class Meta:
        ordering = ["-name"]

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=200)
    published_date = models.DateField()
    is_available = models.BooleanField(default=True)
    genre = models.CharField(max_length=50)
    authors = models.ManyToManyField("books.Author", related_name="book_authors")
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE, default=None)
    readers = models.ManyToManyField("members.Member", related_name="books_readers")

    def __str__(self):
        return self.title


class Magazine(models.Model):
    title = models.CharField(max_length=200)
    publication_date = models.DateField()
    is_available = models.BooleanField(default=True)
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
