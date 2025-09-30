from django.http import JsonResponse
from .forms import ContactForm

def contact_view(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({"status": "ok", "message": "¡Mensaje enviado satisfactoriamente!"})
        else:
            return JsonResponse({"status": "error", "errors": form.errors}, status=400)

    return JsonResponse({"status": "error", "message": "Método no permitido"}, status=405)
