"""Views for calveng_theme Home"""
#from django.views.generic import TemplateView
from django.shortcuts import render
#from zinnia.models.entry import Entry
#from zinnia.models.author import Author
#from zinnia.models.category import Category


def home(request):
    return render(request,'calveng_theme/home.html')