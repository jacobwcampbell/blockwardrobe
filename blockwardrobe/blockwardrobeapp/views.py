from django.shortcuts import render
from django.http import HttpResponse

from .models import Skin

def index(request):
    return render(request, 'blockwardrobeapp/index.html', {'all_skins': Skin.objects.all()})
