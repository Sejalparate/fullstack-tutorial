from django.contrib import admin
from watchlist.models import WatchList, StreamPlatform

admin.site.register(StreamPlatform)
admin.site.register(WatchList)