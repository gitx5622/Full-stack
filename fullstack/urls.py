from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('frontend/', include('frontend.urls')),
    path('front', include('front.urls')),
    path('', include('accounts.urls')),
]
