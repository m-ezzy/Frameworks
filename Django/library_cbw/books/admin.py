from django.contrib import admin
from .models import Author, Book, Publisher, Magazine

admin.site.register(Author)
admin.site.register(Book)
admin.site.register(Publisher)
admin.site.register(Magazine)

# class PublisherAdmin(admin.ModelAdmin):
#     form = PublisherForm

# class MagazineAdmin(admin.ModelAdmin):
#     form = MagazineForm

# admin.site.register(Publisher, PublisherAdmin)
# admin.site.register(Magazine, MagazineAdmin)