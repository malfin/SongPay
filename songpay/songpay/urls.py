from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from songpay import settings

urlpatterns = [
    path('', include('mainapp.urls', namespace='mainapp')),

    path('cart/', include('basketapp.urls', namespace='basketapp')),

    path('lk/', include('lkapp.urls', namespace='lkapp')),

    path('admin/', admin.site.urls),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
