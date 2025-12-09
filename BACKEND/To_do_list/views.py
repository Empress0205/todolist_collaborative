from rest_framework.status import HTTP_204_NO_CONTENT
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from .models import Task
from .serializers import TaskSerializer

# Create your views here.
@api_view(['DELETE'])
def delete_task(request,id):
    task = get_object_or_404(Task,id=id)
    task.delete()
    return Response(
            {"message":"Task deleted successfully"},
             status=status.HTTP_204_NO_CONTENT   
    )            

@api_view(['PUT'])
def update_task(request,id):
    task = get_object_or_404(Task,id=id)
    serializer = TaskSerializer(task,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    