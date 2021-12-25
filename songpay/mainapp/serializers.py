from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from lkapp.models import UserProfile
from mainapp.models import Category, Arrangement, Key, Support, Order


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class KeySerializer(ModelSerializer):
    class Meta:
        model = Key
        fields = '__all__'


class ArrangementSerializer(ModelSerializer):
    category = CategorySerializer()
    key = KeySerializer()

    class Meta:
        model = Arrangement
        fields = '__all__'


class SupportSerializer(ModelSerializer):
    class Meta:
        model = Support
        fields = '__all__'


class OrderSerializer(ModelSerializer):
    arrangement = ArrangementSerializer()

    class Meta:
        model = Order
        fields = '__all__'


class UserSerializer(ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = UserProfile
        fields = (
            'username',
            'email',
            'password',
            'first_name',
            'last_name',
        )

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
