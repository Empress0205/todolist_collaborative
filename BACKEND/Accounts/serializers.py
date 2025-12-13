from rest_framework import serializers
from django.contrib.auth.models import User
from django.core import exceptions
from django.contrib.auth import authenticate


class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'},
    )
    password2 = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'},
        label="Confirm Password"
    )

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password2')
        extra_kwargs = {
            'email': {'required': True},  # Make email mandatory
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({
                "password": "Password fields didn't match.",
                "password2": "Password fields didn't match."
            })
        # Run Django's password validators at validation time to avoid
        # importing them at module import time (which can trigger app
        # registry issues while Django is initializing).
        try:
            from django.contrib.auth.password_validation import validate_password
            validate_password(attrs['password'])
        except exceptions.ValidationError as e:
            raise serializers.ValidationError({'password': list(e.messages)})
        return attrs

    def create(self, validated_data):
        # Remove password2 from validated_data since User model doesn't have it
        validated_data.pop('password2')

        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']  # create_user hashes the password
        )
        return user


class LoginSerializer(serializers.Serializer):
    """Validate username/password and return the authenticated user.

    The view can use the validated `user` from serializer.validated_data to
    issue tokens or perform login actions.
    """
    username = serializers.CharField(required=True)
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')
        user = authenticate(username=username, password=password)
        if not user:
            raise serializers.ValidationError("Unable to log in with provided credentials.")
        if not user.is_active:
            raise serializers.ValidationError("User account is disabled.")

        attrs['user'] = user
        return attrs