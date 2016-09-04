import os

env = os.environ.get('PROJECT_ENV', None)

if env:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE',
        'settings.{}'.format(os.environ['PROJECT_ENV']))
else:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE',
        'settings.development')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()

