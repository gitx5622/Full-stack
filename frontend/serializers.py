from rest_framework import serializers
from frontend.models import Frontend


class FrontendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Frontend
        fields = ('title' , 'email','message')
        # fields = '__all__'
