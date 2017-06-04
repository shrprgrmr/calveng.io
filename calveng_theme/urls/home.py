"""Urls for the CalvEng.io Homepage"""
from django.conf.urls import url

from calveng_theme.views.home import Home
from calveng_theme import views

urlpatterns = [
    url(r'^$', Home.as_view(),
        name='home'),
]
