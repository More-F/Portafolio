from django.contrib import admin
from .models import FAQ

@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ['pregunta', 'orden']  # Columnas que se ven en la lista
    list_editable = ['orden']  # Puedes editar el orden directamente
    search_fields = ['pregunta', 'respuesta']  # Buscar en estos campos
    list_filter = ['orden']  # Filtros en la barra lateral
    
    # Opcional: Cómo se ven los campos al editar
    fieldsets = (
        (None, {
            'fields': ('pregunta', 'respuesta', 'orden')
        }),
    )