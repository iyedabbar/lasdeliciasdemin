from django.db import models
from cloudinary.models import CloudinaryField

class plato(models.Model):
    title = models.CharField(max_length = 150)
    foto  = CloudinaryField('image')

    def __str__(self):
        return self.title

class galeria(models.Model):
    foto  = CloudinaryField('image')


    