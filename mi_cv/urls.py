"""
URL configuration for mi_cv project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from faq.views import fyq_view 
from open.views import open_list, open_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('portafolio.urls')),   # landing page en la raíz
    path('contacto/', include('contacto.urls')),
    path('fyq/', fyq_view, name="fyq"), 
    path("open/", open_list, name="open"),         
    path("open/<int:pk>/", open_detail, name="open_detail"),
]
