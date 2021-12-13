from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse

from basketapp.models import CartBasket
from mainapp.models import Arrangement


@login_required(login_url='/lk/accounts/login/')
def cart(request):
    items = CartBasket.objects.filter(user=request.user)
    context = {
        'title': 'корзина',
        'items': items,
    }
    return render(request, 'basketapp/index.html', context)


def add_cart(request, pk):
    if not request.user.is_authenticated:
        return JsonResponse({
            'status': False,
            'message': 'Авторизуйтесь, чтобы добавить товар в корзину'
        })
    arange = Arrangement.objects.get(id=pk)
    cart_object, created = CartBasket.objects.get_or_create(
        user=request.user,
        arrangement=arange,
    )
    if created:
        return JsonResponse({
            'status': True,
            'id': arange.id,
            'message': 'Вы успешно добавили товар в корзину!'
        })
    return JsonResponse({
        'status': False,
        'message': 'Товар уже в корзине!'
    })


def remove_cart(request, pk):
    arange = CartBasket.objects.get(id=pk)
    arange.delete()
    return HttpResponseRedirect(reverse('basketapp:cart'))
