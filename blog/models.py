from django.db import models
from django.utils import timezone  # Use Django's timezone utility

class Blog(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    created_time = models.DateTimeField(default=timezone.now, blank=True)  # Use timezone.now instead of datetime.now

    def __str__(self):
        return self.title
