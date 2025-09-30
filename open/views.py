from django.shortcuts import render, get_object_or_404
from .models import Videojuego

def open_list(request):
    videojuegos = Videojuego.objects.all()
    return render(request, "portafolio/open.html", {"videojuegos": videojuegos})

def open_detail(request, pk):
    videojuego = get_object_or_404(Videojuego, pk=pk)
    return render(request, "portafolio/open_detail.html", {"videojuego": videojuego})
