from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('products/', GetProductView.as_view()),
    path('product/create/', CreateProductView.as_view()),
]
