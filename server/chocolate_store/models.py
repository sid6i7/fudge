from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=300)
    type = models.CharField(max_length=100)
    numberOfReviews = models.IntegerField()
    price = models.FloatField()
    image = models.CharField(max_length=500)
    rating = models.IntegerField()
    weight = models.CharField(max_length=50)
    stock = models.IntegerField()