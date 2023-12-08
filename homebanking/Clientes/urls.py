from django.urls import path , include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from .views import *


router = routers.DefaultRouter()
router.register(r'Cliente',ClienteSerializersView,'Cliente')
router.register(r'Direcciones',DireccionesSerializersView,'Direcciones')
router.register(r'Sucursal',SucursalSerializersView,'Sucursal')
router.register(r'TipoCliente',TipoClienteSerializersView,'TipoCliente')

urlpatterns = [
    path('api/Cliente',include(router.urls)),
    path('docs/',include_docs_urls(title='Clientes Api'))
]
