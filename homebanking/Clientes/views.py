from django.shortcuts import render 
from django.contrib.auth.decorators import login_required
from .models import *
from rest_framework import viewsets
from .serializer import *
# Create your views here.
@login_required
def ClientesView(request):
    direcciones = Direcciones.objects.all()
    suscursal = Sucursal.objects.all()
    tipo_cliente = TipoCliente.objects.all()
    cliente = Cliente
    return render(request,'cliente.html',{'direcciones':direcciones,'cliente':cliente,'sucursal':suscursal,'tipo_cliente':tipo_cliente})

class ClienteSerializersView(viewsets.ModelViewSet):
    serializer_class = ClientesSerializer
    queryset = Cliente.objects.all()

class SucursalSerializersView(viewsets.ModelViewSet):
    serializer_class = SucursalSerializer
    queryset = Sucursal.objects.all()
    

class TipoClienteSerializersView(viewsets.ModelViewSet):
    serializer_class = TipoClienteSerializer
    queryset = TipoCliente.objects.all()

class DireccionesSerializersView(viewsets.ModelViewSet):
    serializer_class = DireccionesSerializer
    queryset = Direcciones.objects.all()