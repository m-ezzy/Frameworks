from django.shortcuts import render

from django.http import HttpResponse  
  
def setsession(request):  
    request.session['name'] = 'Lalan Desai'  
    request.session['email'] = 'lalandesai@outlook.com'  
    return HttpResponse("Session is set.")  

def getsession(request):  
    try:
        studentname = request.session['name']  
        studentemail = request.session['email']  
        return HttpResponse(studentname+" <br/> "+studentemail);  
    except KeyError:
        return HttpResponse("Session not set yet!")

def delsession(request):
    try:
        del request.session['name']
        del request.session['email']
        return HttpResponse("Session Data cleared.")
    except KeyError:
        return HttpResponse("No session data to clear!")

# Create your views here.
def index(request):
    return render(request, 'index.html')