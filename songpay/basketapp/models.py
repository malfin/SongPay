from django.db import models

from lkapp.models import UserProfile
from mainapp.models import Arrangement


class CartBasket(models.Model):
    user = models.ForeignKey(UserProfile, verbose_name='пользователь', on_delete=models.CASCADE)
    arrangement = models.ForeignKey(Arrangement, verbose_name='аранжировка', on_delete=models.CASCADE)
    added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.arrangement.name}'

    class Meta:
        verbose_name = 'корзина'
        verbose_name_plural = 'корзина'
