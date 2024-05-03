# Google Image Scraper

Un scraper simple para descargar las primeras 100 imágenes de una búsqueda de Google Images.

## Uso

Antes de ejecutar el scraper, asegúrate de configurar la variable de entorno GOOGLE_SEARCH_IMAGES_URL con la URL de la página de Google Images desde donde deseas descargar las imágenes.

Crea un archivo **.env** en la raíz de tu proyecto y añade la siguiente línea:

```
GOOGLE_SEARCH_IMAGES_URL=https://www.google.com/search?q=perros&sca_esv=b51f433a1d832308&sca_upv=1&udm=2&biw=1920&bih=993&sxsrf=ACQVn08LITrh3brjtZ-9QzTiSvwWHvifiQ%3A1714741364936&ei=dOA0ZuHWOKG-i-gPs6uSuAk&ved=0ahUKEwjh4MCvxfGFAxUh3wIHHbOVBJcQ4dUDCBA&uact=5&oq=perros&gs_lp=Egxnd3Mtd2l6LXNlcnAiBnBlcnJvczINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTINEAAYgAQYsQMYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBUiFEVDxCliJEHADeACQAQCYAbIBoAGIBqoBAzAuNbgBA8gBAPgBAZgCCKACqAbCAgYQABgIGB7CAgQQIxgnwgIIEAAYgAQYsQPCAgUQABiABJgDAIgGAZIHAzMuNaAHzhw&sclient=gws-wiz-serp
```

Ejecutar el scraper

```
pnpm run start
```

## Imágenes

Una vez el scraper termine generará una carpeta con el nombre **images** donde encontrarás todas las imánges.

## Advertencia

Este scraper está destinado únicamente para fines de prueba y aprendizaje. No se recomienda ni se debe utilizar para descargar imágenes para proyectos reales sin permiso explícito de los propietarios de los derechos de autor de las imágenes. Respetar los derechos de autor es fundamental para mantener un internet saludable y accesible para todos.

# Contribuciones

Las contribuciones son bienvenidas. Si encuentras un error o tienes una mejora, por favor abre un issue o haz un pull request.
