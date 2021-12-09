from django.shortcuts import render, get_object_or_404
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from mainapp.models import Arrangement, Category, Order, Key, Support

from mainapp.serializers import CategorySerializer, ArrangementSerializer, \
    KeySerializer, SupportSerializer, OrderSerializer


class OrderViewSet(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class SupportViewSet(ModelViewSet):
    queryset = Support.objects.all()
    serializer_class = SupportSerializer


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


# class ArrangementSetPagination(PageNumberPagination):
#     page_size = 1
#     page_size_query_param = 'page_size'
#     max_page_size = 1000


class ArrangementViewSet(ModelViewSet):
    queryset = Arrangement.objects.all()
    serializer_class = ArrangementSerializer
    # pagination_class = ArrangementSetPagination


class KeyViewSet(ModelViewSet):
    queryset = Key.objects.all()
    serializer_class = KeySerializer


def index(request):
    arrangement = Arrangement.objects.all()
    context = {
        'title': 'главная',
        'arrangement': arrangement,
    }
    return render(request, 'mainapp/index.html', context)


def page_sound(request, pk):
    order = Order.objects.get(user=request.user)
    select = get_object_or_404(Arrangement, pk=pk)
    context = {
        'title': select.name,
        'select': select,
        'order': order,
    }
    return render(request, 'mainapp/page_sound.html', context)


def category(request):
    catalog = Category.objects.all()
    context = {
        'title': 'категории',
        'category': catalog,
    }
    return render(request, 'mainapp/category.html', context)


def page_category(request, pk):
    select = Arrangement.objects.filter(category=pk)
    context = {
        'title': 'Категории',
        'select': select,
    }
    return render(request, 'mainapp/page.html', context)


def support(request):
    context = {
        'title': 'поддержка',
    }
    return render(request, 'mainapp/support.html', context)
