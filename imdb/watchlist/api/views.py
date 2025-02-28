from django.core.serializers import serialize
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from watchlist.models import WatchList, StreamPlatform
from watchlist.api.serializers import WatchListSerializer, StreamPlatformSerializer

class StreamPlatformListAV(APIView):
    def get(self, request):
        item = StreamPlatform.objects.all()
        serializer = StreamPlatformSerializer(item, many=True)  # For hyperlink, context={'request': request}
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def post(self, request):
        serializer = StreamPlatformSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StreamPlatformDetailAV(APIView):
    def get(self, request, pk):
        try:
            item = StreamPlatform.objects.get(pk=pk)
        except StreamPlatform.DoesNotExist:
            return Response({'Error': 'Not Found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = StreamPlatformSerializer(item)
        return Response(serializer.data)

    def put(self, request, pk):
        item = StreamPlatform.objects.get(pk=pk)
        serializer = StreamPlatformSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        item = StreamPlatform.objects.get(pk=pk)
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class WatchListAV(APIView):
    def get(self, request):
        item = WatchList.objects.all()
        serializer = WatchListSerializer(item, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def post(self, request):
        serializer = WatchListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class WatchListDetailAV(APIView):
    def get(self, request, pk):
        try:
            item = WatchList.objects.get(pk=pk)
        except WatchList.DoesNotExist:
            return Response({'Error': 'Not Found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = WatchListSerializer(item)
        return Response(serializer.data)

    def put(self, request, pk):
        item = WatchList.objects.get(pk=pk)
        serializer = WatchListSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        item = WatchList.objects.get(pk=pk)
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
