from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

from lkapp.models import UserProfile


class LoginForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for name, item in self.fields.items():
            item.widget.attrs['class'] = f'form-control {name}'


class RegisterForm(UserCreationForm):
    class Meta:
        model = UserProfile
        fields = (
            'username',
            'first_name',
            'last_name',
            'patronymic',
            'password1',
            'password2',
            'email',
        )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for name, item in self.fields.items():
            item.widget.attrs['class'] = f'form-control {name}'
            item.help_text = ''
