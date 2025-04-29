import os
import tarfile
from datetime import datetime

# Configuración
origen = '/ruta/a/tu/carpeta'       # Carpeta a respaldar
destino = '/ruta/a/respaldo'        # Carpeta donde guardar el .tar.gz
fecha = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
nombre = f'respaldo_{fecha}.tar.gz'
ruta_final = os.path.join(destino, nombre)

# Crear el archivo comprimido
with tarfile.open(ruta_final, 'w:gz') as tar:
    tar.add(origen, arcname=os.path.basename(origen))

print(f'Respaldo creado: {ruta_final}')
