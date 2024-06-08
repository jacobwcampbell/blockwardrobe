from django.shortcuts import render
from django.http import HttpResponse
from django.views import generic

from .models import Skin

class SkinView(generic.DetailView):
    model = Skin
    template_name = 'blockwardrobeapp/skin.html'

def index(request):
    return render(request, 'blockwardrobeapp/index.html', {'all_skins': Skin.objects.all()})

