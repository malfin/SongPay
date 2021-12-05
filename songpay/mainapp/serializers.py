from rest_framework.serializers import ModelSerializer

from mainapp.models import Category, Arrangement, Key, Support


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