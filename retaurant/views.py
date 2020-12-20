from django.shortcuts import render
from .models import plato , galeria
# Create your views here.



def resto(request):
    platos = plato.objects.all()
    galerias = galeria.objects.all()
    
    context = {'object_list_1' : platos,
                'object_list_2': galerias,
                      
    }
    return render (request, 'index.html' , context)