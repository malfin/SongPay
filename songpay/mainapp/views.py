from django.shortcuts import render, get_object_or_404
from rest_framework.mixins import CreateModelMixin
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from lkapp.models import UserProfile
from mainapp.models import Arrangement, Category, Order, Key, Support

from mainapp.serializers import CategorySerializer, ArrangementSerializer, \
    KeySerializer, SupportSerializer, OrderSerializer, UserSerializer


class CreateUserView(CreateModelMixin, GenericViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class OrderViewSet(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = self.queryset
        query_set = queryset.filter(user=self.request.user)
        return query_set


class SupportViewSet(ModelViewSet):
    queryset = Support.objects.all()
    serializer_class = SupportSerializer
    permission_classes = [AllowAny]


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]


# class ArrangementSetPagination(PageNumberPagination):
#     page_size = 1
#     page_size_query_param = 'page_size'
#     max_page_size = 1000


class ArrangementViewSet(ModelViewSet):
    queryset = Arrangement.objects.all()
    serializer_class = ArrangementSerializer
    permission_classes = [AllowAny]
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
    select = get_object_or_404(Arrangement, pk=pk)
    context = {
        'title': select.name,
        'select': select,
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


def terms(request):
    context = {
        'title': 'условия использования',
    }
    return render(request, 'mainapp/terms.html', context)
