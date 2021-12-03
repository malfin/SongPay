import basketapp.views as basketapp
from django.urls import path

app_name = 'basketapp'

urlpatterns = [
    path('', basketapp.cart, name='cart'),
    path('add/<int:pk>/', basketapp.add_cart, name='add_cart'),
    path('remove/<int:pk>/', basketapp.remove_cart, name='remove_cart'),
]
