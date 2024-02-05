from django.urls import path

from .views import (
    MemberCreateView,
    MemberDeleteView,
    MemberDetailView,
    MemberListView,
    MemberUpdateView,
)

urlpatterns = [
    path("members/", MemberListView.as_view(), name="member_list"),
    path("members/<int:pk>/", MemberDetailView.as_view(), name="member_detail"),
    path("members/create/", MemberCreateView.as_view(), name="member_create"),
    path("members/<int:pk>/edit/", MemberUpdateView.as_view(), name="member_edit"),
    path("members/<int:pk>/delete/", MemberDeleteView.as_view(), name="member_delete"),
]
