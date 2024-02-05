from django.shortcuts import render
from django.http import HttpResponse
from django.template import Context, Template

# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def citizen_kane(request):
    content = """
    {{movie}} was released in {{year}}<br/>
    {{movie}} was released.
    {{movie}} was released in {{year}}
    """
    template = Template(content)
    context = Context({"movie": "Citizen Kane", "year": 1941})

    result = template.render(context)
    return HttpResponse(result)

def casablanca(request):
    return render(
        request, "simple.txt", {"movie": "Casablanca", "year": 1942}
    )

def maltese_falcon(request):
    return render(
        request,
        "falcon.html",
        {"movie": "Maltese Falcon", "year": 1941},
    )


def psycho(request):
	# conditional tags example
    data = {
        "movie": "Psycho",
        "year": 1960,
        "is_scary": True,
        "color": False,
        "tomato_meter": 96,
        "tomato_audience": 95,
    }
    return render(request, "psycho.html", data)

def listing(request):
	# looping example
    data = {
        "movies": [
            (
                "Citizen Kane",   # Movie
                1941,             # Year
            ),
            (
                "Casablanca",
                1942,
            ),
            (
                "Psycho",
                1960,
            ),
        ]
    }
    return render(request, "listing.html", data)






    