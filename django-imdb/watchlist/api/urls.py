from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    WatchListAV,
    WatchListDetailAV,
    StreamPlatformVS,
    ReviewList,
    ReviewCreate,
    ReviewDetail
)

router = DefaultRouter()
router.register('stream', StreamPlatformVS, basename='streamplatform')

urlpatterns = [
    path('list/', WatchListAV.as_view(), name='movie-list'),
    path('list/<int:pk>/', WatchListDetailAV.as_view(), name='movie-detail'),
    path('', include(router.urls)),
    path('<int:pk>/review-create/', ReviewCreate.as_view(), name='review-create'),
    path('<int:pk>/reviews/', ReviewList.as_view(), name='review-list'),
    path('review/<int:pk>/', ReviewDetail.as_view(), name='review-detail')
]
