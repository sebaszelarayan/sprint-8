from django.urls import path , include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from .views import ClienteSerializersView


router = routers.DefaultRouter()
router.register(r'Cliente',ClienteSerializersView,'Cliente')

urlpatterns = [
    path('api/Cliente',include(router.urls)),
    path('docs/',include_docs_urls(title='Clientes Api'))
]
