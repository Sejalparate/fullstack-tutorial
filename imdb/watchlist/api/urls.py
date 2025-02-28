from django.urls import path
from watchlist.api.views import WatchListAV, WatchListDetailAV, StreamPlatformListAV, StreamPlatformDetailAV

urlpatterns = [
    path('stream/', StreamPlatformListAV.as_view(), name='streaming-platforms-list'),
    path('stream/<int:pk>/', StreamPlatformDetailAV.as_view(), name='streaming-platform-details'),
    path('list/', WatchListAV.as_view(), name='movie-list'),
    path('list/<int:pk>', WatchListDetailAV.as_view(), name='movie-details')
]
