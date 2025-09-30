from django.shortcuts import render
from .models import FAQ

def fyq_view(request):
    faqs = FAQ.objects.all()
    return render(request, "portafolio/FYQ.html", {"faqs": faqs})
