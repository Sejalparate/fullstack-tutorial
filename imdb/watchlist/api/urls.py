from django.urls import path
from watchlist.api.views import (WatchListAV, WatchListDetailAV, StreamPlatformList,
                                 StreamPlatformDetail, ReviewList, ReviewDetail)

urlpatterns = [
    path('stream/', StreamPlatformList.as_view(), name='streaming-platforms-list'),
    path('list/', WatchListAV.as_view(), name='movie-list'),
    path('list/<int:pk>', WatchListDetailAV.as_view(), name='movie-details'),
    path('review', ReviewList.as_view(), name='review-list'),
    path('stream/<int:pk>/review', StreamPlatformDetail.as_view(), name='review-detail'),
    path('stream/review/<int:pk>', ReviewDetail.as_view(), name='stream-detail')
]
