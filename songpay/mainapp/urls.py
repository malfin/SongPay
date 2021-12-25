from rest_framework.routers import DefaultRouter

import mainapp.views as mainapp
from django.urls import path, include

router = DefaultRouter()
router.register('category', mainapp.CategoryViewSet)
router.register('arrangement', mainapp.ArrangementViewSet)
router.register('key', mainapp.KeyViewSet)
router.register('support', mainapp.SupportViewSet)
router.register('order', mainapp.OrderViewSet)
router.register('register', mainapp.CreateUserView)

app_name = 'mainapp'

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('', mainapp.index, name='index'),
    path('support/', mainapp.support, name='support'),
    path('category/', mainapp.category, name='category'),
    path('terms/', mainapp.terms, name='terms'),
    path('category/page/<int:pk>/', mainapp.page_category, name='page_category'),
    path('page/sound/<int:pk>/', mainapp.page_sound, name='page_sound'),
]
