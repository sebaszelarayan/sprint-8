from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = CustomUser
        fields = (
        "username",
        "first_name",
        "last_name",
        "customer_DNI_id",
        )

class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = (
        "username",
        "first_name",
        "last_name",
        "customer_DNI_id",
        )