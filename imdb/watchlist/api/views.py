from django.core.serializers import serialize
from rest_framework import viewsets, generics, status
from rest_framework.exceptions import ValidationError
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.views import APIView
from rest_framework.response import Response
from watchlist.api.permissions import AdminOrReadOnly, ReviewUserOrReadOnly
from watchlist.models import WatchList, StreamPlatform, Reviews
from watchlist.api.serializers import WatchListSerializer, StreamPlatformSerializer, ReviewSerializer


class WatchListAV(generics.ListCreateAPIView):
    queryset = WatchList.objects.all()
    serializer_class = WatchListSerializer


class WatchListDetailAV(generics.RetrieveAPIView):
    queryset = WatchList.objects.all()
    serializer_class = WatchListSerializer


class ReviewCreate(generics.CreateAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        return Reviews.objects.all()

    def perform_create(self, serializer):
        pk = self.kwargs.get('pk')
        item = WatchList.objects.get(pk=pk)

        author_user = self.request.user
        review_queryset = Reviews.objects.filter(watchlist=item, author=author_user)
        if review_queryset.exists():
            raise ValidationError("You have already reviewed this")
        serializer.save(watchlist=item, author=author_user)


class ReviewList(generics.ListAPIView):
    # queryset = Reviews.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        pk = self.kwargs['pk']
        return Reviews.objects.filter(watchlist=pk)

class ReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reviews.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [ReviewUserOrReadOnly]


class StreamPlatformVS(viewsets.ModelViewSet):      # ReadOnlyModelViewSet - For removing POST request
    queryset = StreamPlatform.objects.all()
    serializer_class = StreamPlatformSerializer


# class StreamPlatformVS(viewsets.ViewSet):
#     def list(self, request):
#         queryset = StreamPlatform.objects.all()
#         serializer = StreamPlatformSerializer(queryset, many=True)
#         return Response(serializer.data)
#
#     def retrieve(self, request, pk=None):
#         queryset = StreamPlatform.objects.all()
#         item = get_object_or_404(queryset, pk=pk)
#         serializer = StreamPlatformSerializer(item)
#         return Response(serializer.data)
#
#     def create(self, request):
#         serializer = StreamPlatformSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
