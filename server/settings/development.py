from settings.common import *

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': '[ENTER DB NAME]',
        'USER': '[ENTER DB USER]',
        'PASSWORD': '[ENTER PASSWORD]',
        'HOST': '',
        'PORT': '',
    }
}
