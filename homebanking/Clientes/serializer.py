from rest_framework import serializers
from .models import *
class ClientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

class SucursalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sucursal
        fields = '__all__'

class TipoClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoCliente
        fields = '__all__'

class DireccionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direcciones
        fields = '__all__'