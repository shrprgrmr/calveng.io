"""Urls for the Zinnia sitemap"""
from django.conf.urls import url

from calveng_theme.views.about import About


urlpatterns = [
    url(r'^$', About.as_view(),
        name='about'),
]
