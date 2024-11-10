from django.shortcuts import render, get_object_or_404
from .models import Blog

def index(request):
    blogs = Blog.objects.all()
    return render(request, 'index.html', {'blogs': blogs})

def details(request, pk):
    blog = get_object_or_404(Blog, id=pk)
    return render(request, 'details.html', {'blog': blog})
