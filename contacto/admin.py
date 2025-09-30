from django.contrib import admin
from .models import ContactMessage

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'email', 'fecha_envio')
    search_fields = ('nombre', 'email')