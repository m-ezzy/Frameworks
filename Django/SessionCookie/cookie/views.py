from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    return render(request, 'index.html')

def setcookie(request):  
    response = HttpResponse("Cookie is set.")
    response.set_cookie('University', 'GLS')  
    return response

def getcookie(request):
    try:
        university  = request.COOKIES['University']  
        return HttpResponse(f"Cookie value is '{university}'.")
    except KeyError:
        return HttpResponse("Cookie is not set!")

def delcookie(request):
    try:
        response = HttpResponse("Cookie is deleted.")
        response.delete_cookie('University')
        return response
    except KeyError:
        return HttpResponse("Cookie is not set!")
