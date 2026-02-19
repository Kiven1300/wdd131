#!/bin/bash

# Script to download all images for the Flavors of Mexico project
# Usage: ./download-images.sh

echo "🌮 Downloading images for Flavors of Mexico..."
echo ""

# Create images folder if it doesn't exist
mkdir -p images

# Change to images folder
cd images

# Counter
total=13
current=0

# Download function
download_image() {
    current=$((current + 1))
    echo "[$current/$total] Downloading: $2"
    curl -L "$1" -o "$2" --silent --show-error
    if [ $? -eq 0 ]; then
        echo "✅ $2 downloaded successfully"
    else
        echo "❌ Error downloading $2"
    fi
    echo ""
}

# Download all images
download_image "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop&q=80" "tacos_al_pastor.jpg"
download_image "https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=800&h=600&fit=crop&q=80" "mole-poblano.jpg"
download_image "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&h=600&fit=crop&q=80" "Pozole.jpg"
download_image "https://images.unsplash.com/photo-1564767655658-4e6b365884ff?w=800&h=600&fit=crop&q=80" "torta_de_tamal.jpg"
download_image "https://images.unsplash.com/photo-1599974555092-82a98b144c99?w=800&h=600&fit=crop&q=80" "chiles-nogada.jpg"
download_image "https://images.unsplash.com/photo-1619895092538-128341789043?w=800&h=600&fit=crop&q=80" "enchiladas.jpg"
download_image "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&h=600&fit=crop&q=80" "ceviche.jpg"
download_image "https://images.unsplash.com/photo-1590948036047-571a6b1223a0?w=800&h=600&fit=crop&q=80" "churros.jpg"
download_image "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=800&h=600&fit=crop&q=80" "quesadillas.jpg"
download_image "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=600&fit=crop&q=80" "sopa-tortilla.jpg"
download_image "https://images.unsplash.com/photo-1611057005896-82ffdcdfd570?w=800&h=600&fit=crop&q=80" "flan.jpg"
download_image "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=800&h=600&fit=crop&q=80" "cochinita_pibil.jpg"
download_image "https://images.unsplash.com/photo-1599974667090-cf3682c0928f?w=1920&h=800&fit=crop&q=80" "hero-mexican-food.jpg"

echo "🎉 Download completed!"
echo ""
echo "Images saved in: $(pwd)"
echo ""
echo "Archivos descargados:"
ls -lh *.jpg 2>/dev/null || echo "No se encontraron archivos .jpg"
