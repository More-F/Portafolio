from django.contrib import admin
from django.urls import path
from portafolio.views import index
from faq.views import fyq_view
from open.views import open_list, open_detail   # 👈 importar

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", index, name="index"),
    path("fyq/", fyq_view, name="fyq"),
    path("open/", open_list, name="open"),          # 👈 lista
    path("open/<int:pk>/", open_detail, name="open_detail"),  # 👈 detalle
]
