from django.urls import path
from . import views

app_name = 'blockwardrobeapp'
urlpatterns = [
    path('', views.index, name='index'),
    path('skin/<int:pk>/', views.SkinView.as_view(), name='skin'),
]