from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.views.generic import (
    CreateView,
    DeleteView,
    DetailView,
    ListView,
    UpdateView,
)

from .models import Member


class MemberListView(LoginRequiredMixin, ListView):
    model = Member
    template_name = "members/member_list.html"
    context_object_name = "members"
    queryset = Member.objects.filter(is_active=True)


class MemberDetailView(LoginRequiredMixin, DetailView):
    model = Member
    template_name = "members/member_detail.html"
    context_object_name = "member"


class MemberCreateView(LoginRequiredMixin, CreateView):
    model = Member
    template_name = "members/member_form.html"
    fields = "__all__"
    success_url = reverse_lazy("member_list")


class MemberUpdateView(LoginRequiredMixin, UpdateView):
    model = Member
    template_name = "members/member_form.html"
    fields = "__all__"
    success_url = reverse_lazy("member_list")


class MemberDeleteView(LoginRequiredMixin, DeleteView):
    model = Member
    template_name = "members/member_confirm_delete.html"
    success_url = reverse_lazy("member_list")
