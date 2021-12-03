from django.contrib.auth.models import AbstractUser
from django.db import models


class UserProfile(AbstractUser):
    first_name = models.CharField(verbose_name='Имя', max_length=128)
    last_name = models.CharField(verbose_name='Фамилия', max_length=128)
    email = models.EmailField(verbose_name='Email')
    patronymic = models.CharField(verbose_name='Отчество', max_length=128, blank=True)

    def __str__(self):
        return f'{self.username} | {self.email}'
