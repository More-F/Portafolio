from django.db import models

class FAQ(models.Model):
    pregunta = models.CharField("Pregunta", max_length=255)
    respuesta = models.TextField("Respuesta")
    orden = models.PositiveIntegerField("Orden", default=0)

    class Meta:
        ordering = ['orden', 'id']
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"

    def __str__(self):
        return self.pregunta
