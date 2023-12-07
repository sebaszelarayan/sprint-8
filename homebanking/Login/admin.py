from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser
# Register your models here.

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = [
        'id',
        "username",
        "first_name",
        "last_name",
        "customer_DNI_id",
        "email",
        "is_staff",
    ]
    fieldsets = UserAdmin.fieldsets + ((None, {"fields": ("customer_DNI_id",)}),)
    add_fieldsets = UserAdmin.add_fieldsets + ((None, {"fields": ("customer_DNI_id",)}),)


admin.site.register(CustomUser, CustomUserAdmin)