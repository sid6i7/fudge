from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from rest_framework import status

class CreateProductView(APIView):
    serializer_class = ProductSerializer

    def post(self, request):
        serializedProducts = self.serializer_class(
            data=request.data, many=True)
        if serializedProducts.is_valid():
            serializedProducts.save()
            return Response(serializedProducts.data, status=status.HTTP_201_CREATED)
        return Response(serializedProducts.errors, status=status.HTTP_400_BAD_REQUEST)

class GetProductView(APIView):
    serializer_class = ProductSerializer

    def get(self, request):
        products = Product.objects.all()
        serializedProducts = self.serializer_class(products, many=True)
        return Response(serializedProducts.data)
