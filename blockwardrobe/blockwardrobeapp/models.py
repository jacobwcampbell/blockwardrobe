from django.db import models
from django.contrib.auth.models import User

class Skin(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(default='/skins/default.png', upload_to='skins')