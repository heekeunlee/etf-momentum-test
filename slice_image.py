
from PIL import Image
import sys

def split_image(image_path, chunk_height=4000):
    img = Image.open(image_path)
    width, height = img.size
    print(f"Original size: {width}x{height}")
    
    for i in range(0, height, chunk_height):
        # Crop form (left, upper, right, lower)
        box = (0, i, width, min(i + chunk_height, height))
        print(f"Cropping box: {box}")
        chunk = img.crop(box)
        chunk.save(f"slice_{i}.jpg")
        print(f"Saved slice_{i}.jpg")

if __name__ == "__main__":
    split_image("KakaoTalk_Photo_2026-01-27-09-19-00.jpeg")
