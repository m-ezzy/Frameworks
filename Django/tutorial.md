# For windows and linux
mkdir murtaza
cd murtaza
python -m venv <project-name>
cd <project-name>
source bin/activate
pip install django==3.2
django-admin startproject <project-name>
cd <project-name>
python manage.py startapp <app-name>

python manage.py runserver
python manage.py shell

python manage.py makemigrations
python manage.py migrate
python manage.py makemigrations <app-name>
python manage.py migrate <app-name>

python manage.py createsuperuser

# For macOS
cd desktop
pip3 install virtualenv
python3 -m virtualenv venv -p python3
source venv/bin/activate
pip install django
cd venv
django-admin startproject hello_project
cd hello_project
django-admin startapp hello_app
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py runserver

# pip install -r requirements.txt
