from django.urls import path
from .views import create_task, list_tasks

urlpatterns = [
    path('tasks/create/', create_task, name='create-task'),
     path('tasks/', list_tasks, name='list-tasks'),
]
