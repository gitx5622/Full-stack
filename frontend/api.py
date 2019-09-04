from .serializers import FrontendSerializer
from frontend.models import Frontend
from rest_framework import viewsets, permissions


class FrontendViewSet(viewsets.ModelViewSet):
    serializer_class = FrontendSerializer
    
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.frontend.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)