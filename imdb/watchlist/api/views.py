from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from watchlist.models import WatchList, StreamPlatform, Reviews
from watchlist.api.serializers import WatchListSerializer, StreamPlatformSerializer, ReviewSerializer


class WatchListAV(generics.ListCreateAPIView):
    queryset = WatchList.objects.all()
    serializer_class = WatchListSerializer


class WatchListDetailAV(generics.RetrieveAPIView):
    queryset = WatchList.objects.all()
    serializer_class = WatchListSerializer


class ReviewList(generics.ListCreateAPIView):
    queryset = Reviews.objects.all()
    serializer_class = ReviewSerializer


class ReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reviews.objects.all()
    serializer_class = ReviewSerializer


class StreamPlatformList(generics.ListCreateAPIView):
    queryset = StreamPlatform.objects.all()
    serializer_class = StreamPlatformSerializer


class StreamPlatformDetail(generics.RetrieveAPIView):
    queryset = StreamPlatform.objects.all()
    serializer_class = StreamPlatformSerializer


# class StreamPlatformListAV(APIView):
#     def get(self, request):
#         item = StreamPlatform.objects.all()
#         serializer = StreamPlatformSerializer(item, many=True)  # For hyperlink, context={'request': request}
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#
#     def post(self, request):
#         serializer = StreamPlatformSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
# class StreamPlatformDetailAV(APIView):
#     def get(self, request, pk):
#         try:
#             item = StreamPlatform.objects.get(pk=pk)
#         except StreamPlatform.DoesNotExist:
#             return Response({'Error': 'Not Found'}, status=status.HTTP_404_NOT_FOUND)
#         serializer = StreamPlatformSerializer(item)
#         return Response(serializer.data)
#
#     def put(self, request, pk):
#         item = StreamPlatform.objects.get(pk=pk)
#         serializer = StreamPlatformSerializer(item, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def delete(self, request, pk):
#         item = StreamPlatform.objects.get(pk=pk)
#         item.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
