from django.contrib import admin
from django.urls import path
from faq.views import fyq_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('fyq/', fyq_view, name="fyq"),   # 👈 ruta para la página de FAQ
]
