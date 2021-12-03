from django.contrib import auth, messages
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse

from basketapp.models import CartBasket
from lkapp.forms import LoginForm, RegisterForm
from mainapp.models import UserArrangement, Order


def login(request):
    if not request.user.is_authenticated:
        if request.method == 'POST' and request.is_ajax():
            form = LoginForm(data=request.POST)
            if form.is_valid():
                auth.login(request, form.get_user())
                return JsonResponse({
                    'status': True,
                    'messages': 'Вы успешно авторизировались!',
                })
            else:
                return JsonResponse({
                    'status': False,
                    'messages': 'Проверьте имя пользователя и пароль!',
                })
        else:
            form = LoginForm()
        content = {
            'title': 'Авторизация',
            'form': form,
        }
        return render(request, 'lkapp/auth/login.html', content)
    else:
        return HttpResponseRedirect(reverse('mainapp:index'))


def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Вы успешно зарегистрировались!')
            return HttpResponseRedirect(reverse('lkapp:login'))
    else:
        form = RegisterForm()
    content = {
        'title': 'Регистрация',
        'form': form,
    }
    return render(request, 'lkapp/auth/register.html', content)


@login_required
def logout(request):
    auth.logout(request)
    return HttpResponseRedirect(reverse('mainapp:index'))


@login_required
def index(request):
    arrange = Order.objects.filter(user=request.user)
    context = {
        'title': 'мои песни',
        'arrange': arrange,
    }
    return render(request, 'lkapp/index.html', context)


@login_required
def buy_sound(request, pk):
    basket = CartBasket.objects.get(id=pk)
    basket.objects.update(
        is_buy=True
    )
    return HttpResponseRedirect(reverse('basketapp:cart'))
