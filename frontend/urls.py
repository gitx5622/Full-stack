from rest_framework import routers
from .api import FrontendViewSet

router = routers.DefaultRouter()
router.register('', FrontendViewSet, 'frontend')


urlpatterns = router.urls
