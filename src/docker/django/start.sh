#!/bin/bash 

# db does not exist error string
error="\"django_migrations\" does not exist"

# create DB migrations
python manage.py makemigrations

# check if migrations table exists in db
output=$(python manage.py inspectdb django_migrations)

# check if error string is in inspectdb output
if [[ $output == *"$error"* ]]; then
    # database does not exist

    # apply DB migrations
    python manage.py migrate

    # create VM users
    python manage.py system data/students.csv

    # create VM mystery objects
    python manage.py mystery data/content

    # assign users to mysteries
    python manage.py assign data/mysteries.csv

    # collect static files
    python manage.py collectstatic

else
    # database already exists

    # fake DB migrations
    python manage.py migrate --fake
fi

# copy and load mod_wsgi into apache
mod_wsgi-express install-module > /etc/apache2/mods-enabled/wsgi.load

# start apache
apache2ctl -D FOREGROUND
