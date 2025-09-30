from django.db import models

class Videojuego(models.Model):
    titulo = models.CharField("Título", max_length=200)
    resumen = models.CharField("Resumen", max_length=300)
    descripcion = models.TextField("Descripción")
    palabras_clave = models.CharField("Palabras clave", max_length=200)
    imagen_url = models.URLField("Link de la Imagen", max_length=500)  # 👈 en vez de ImageField
    creado = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo
