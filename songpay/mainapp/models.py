from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone

from lkapp.models import UserProfile


class Category(models.Model):
    name = models.CharField(verbose_name='категория', max_length=128)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'категория'
        verbose_name_plural = 'категории'


class Key(models.Model):
    key = models.CharField(verbose_name='Тональность', max_length=128)

    def __str__(self):
        return self.key

    class Meta:
        verbose_name = 'тональность'
        verbose_name_plural = 'тональность'


class Arrangement(models.Model):
    category = models.ForeignKey(Category, verbose_name='категория', on_delete=models.CASCADE)
    key = models.ForeignKey(Key, verbose_name='тональность', on_delete=models.CASCADE)
    name = models.CharField(verbose_name='название аранжировки', max_length=128)
    tempo = models.IntegerField(verbose_name='темп', default='100')
    original_name = models.CharField(verbose_name='оригинальное название', max_length=128, blank=True)
    cover = models.ImageField(verbose_name='изображение', upload_to='cover')
    audioFile = models.FileField(verbose_name='аудиозапись', upload_to='audio')
    price = models.DecimalField(verbose_name='цена', max_digits=6, decimal_places=2)
    text = models.TextField(verbose_name='текст песни', blank=True)
    date = models.DateField(auto_now=True)
    archive = models.FileField(verbose_name='Архив с проектом', upload_to='archive_project')

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-date']
        verbose_name = 'аранжировку'
        verbose_name_plural = 'аранжировки'


class UserArrangement(models.Model):
    arrangement = models.ForeignKey(Arrangement, verbose_name='аранжировка', on_delete=models.CASCADE)
    user = models.ForeignKey(UserProfile, verbose_name='покупатель', on_delete=models.CASCADE)
    date = models.DateField(verbose_name='Дата получения товара', default=timezone.now)

    def __str__(self):
        return self.arrangement.name

    class Meta:
        ordering = ['-date']
        verbose_name = 'куплено'
        verbose_name_plural = 'куплены'


class Order(models.Model):
    STATUS_NEW = 'new'
    STATUS_IN_PROGRESS = 'in_progress'
    STATUS_READY = 'is_ready'
    STATUS_COMPLETED = 'completed'

    STATUS_CHOICES = (
        (STATUS_NEW, 'Новый заказ'),
        (STATUS_IN_PROGRESS, 'Заказ в обработке'),
        (STATUS_READY, 'Заказ готов'),
        (STATUS_COMPLETED, 'Заказ выполнен')
    )

    arrangement = models.ForeignKey(Arrangement, verbose_name='аранжировка', on_delete=models.CASCADE)
    user = models.ForeignKey(UserProfile, verbose_name='покупатель', on_delete=models.CASCADE)
    status = models.CharField(
        max_length=100,
        verbose_name='Статус заказ',
        choices=STATUS_CHOICES,
        default=STATUS_NEW
    )
    form_order = models.CharField(verbose_name='форма оплаты', max_length=128)
    created_at = models.DateTimeField(auto_now=True, verbose_name='Дата создания заказа')
    order_date = models.DateField(verbose_name='Дата получения заказа', default=timezone.now)

    def __str__(self):
        return f'{self.arrangement.name}'

    class Meta:
        verbose_name = 'заказ'
        verbose_name_plural = 'заказы'


class Support(models.Model):
    email = models.EmailField(verbose_name='Email')
    messages = models.TextField(verbose_name='Сообщение')

    def __str__(self):
        return f'{self.email}'

    class Meta:
        verbose_name = 'поддержка'
        verbose_name_plural = 'поддержка'

