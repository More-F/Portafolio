from django.contrib import admin
from .models import Videojuego

@admin.register(Videojuego)
class VideojuegoAdmin(admin.ModelAdmin):
    list_display = ("titulo", "resumen", "palabras_clave", "creado")
    search_fields = ("titulo", "palabras_clave")
