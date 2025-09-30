#!/usr/bin/env bash
echo "=== Building Django Project ==="

# Instalar dependencias
pip install -r requirements.txt

# Colectar archivos estáticos
python manage.py collectstatic --noinput

# Aplicar migraciones
python manage.py migrate

echo "=== Build completed ==="