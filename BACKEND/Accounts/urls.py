from django.urls import path
<<<<<<< HEAD
=======
from .views import SignupView
>>>>>>> ccf4d8e9fdf4c6acd5819aa912e498ae951118f7
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
<<<<<<< HEAD
]
=======
    path('signup/', SignupView.as_view(), name="signup")
]
>>>>>>> ccf4d8e9fdf4c6acd5819aa912e498ae951118f7
