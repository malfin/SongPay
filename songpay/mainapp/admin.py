from django.contrib import admin

from mainapp.models import Category, Key, Arrangement, Order, Support


class ArrangementAdmin(admin.ModelAdmin):
    search_fields = ('category', 'key')
    list_filter = ('category', 'key')


admin.site.register(Category)
admin.site.register(Key)
admin.site.register(Arrangement, ArrangementAdmin)
admin.site.register(Order)
admin.site.register(Support)
