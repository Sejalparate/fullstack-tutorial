from django.contrib import admin
from watchlist.models import WatchList, StreamPlatform, Reviews

admin.site.register(StreamPlatform)
admin.site.register(WatchList)
admin.site.register(Reviews)