import lkapp.views as lkapp
from django.urls import path

app_name = 'lkapp'

urlpatterns = [
    path('accounts/register/', lkapp.register, name='register'),
    path('accounts/login/', lkapp.login, name='login'),
    path('accounts/logout/', lkapp.logout, name='logout'),

    path('', lkapp.index, name='index'),
    path('buy/<int:pk>', lkapp.buy_sound, name='buy_sound'),
]
