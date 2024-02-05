from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render

from .forms import MemberForm
from .models import Member

@login_required
def member_list(request):
    members = Member.objects.all()
    return render(request, "members/member_list.html", {"members": members})

@login_required
def member_detail(request, pk):
    member = get_object_or_404(Member, pk=pk)
    return render(request, "members/member_detail.html", {"member": member})

@login_required
def member_create(request):
    if request.method == "POST":
        form = MemberForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("member_list")
    else:
        form = MemberForm()
    return render(request, "members/member_form.html", {"form": form})

@login_required
def member_edit(request, pk):
    member = get_object_or_404(Member, pk=pk)
    if request.method == "POST":
        form = MemberForm(request.POST, instance=member)
        if form.is_valid():
            form.save()
            return redirect("member_list")
    else:
        form = MemberForm(instance=member)
    return render(request, "members/member_form.html", {"form": form})


@login_required
def member_delete(request, pk):
    member = get_object_or_404(Member, pk=pk)
    member.delete()
    return redirect("member_list")


@login_required
def set_cookie(request):
    response = HttpResponse("Cookie set!")
    response.set_cookie("example_cookie", "Hello, this is a cookie!")
    return response


@login_required
def get_cookie(request):
    value = request.COOKIES.get("example_cookie", "Default Value")
    return HttpResponse(f"The value of the cookie is: {value}")


@login_required
def set_session(request):
    request.session["example_key"] = "Hello, this is a session value!"
    return HttpResponse("Session value set!")


@login_required
def get_session(request):
    value = request.session.get("example_key", "Default Session Value")
    return HttpResponse(f"The value of the session is: {value}")
