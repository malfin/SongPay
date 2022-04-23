from django.contrib import admin

from lkapp.models import UserProfile


class UserAdmin(admin.ModelAdmin):
    search_fields = ('first_name', 'last_name', 'username')


admin.site.register(UserProfile, UserAdmin)
