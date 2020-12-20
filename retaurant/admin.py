from django.contrib import admin

from .models import plato , galeria



admin.site.register(plato)
admin.site.register(galeria)

admin.site.site_header = 'las delicias de mi na'

