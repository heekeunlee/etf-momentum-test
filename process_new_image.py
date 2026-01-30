
from PIL import Image
import os
import glob

# Remove existing slices
for f in glob.glob("slice_*.jpg"):
    try:
        os.remove(f)
    except:
        pass

image_path = "KakaoTalk_Photo_2026-01-30-09-04-04.jpeg" # Using the large file in root
chunk_height = 4000

print(f"Opening {image_path}...")
try:
    img = Image.open(image_path)
    width, height = img.size
    print(f"Original size: {width}x{height}")

    for i in range(0, height, chunk_height):
        box = (0, i, width, min(i + chunk_height, height))
        print(f"Cropping box: {box}")
        chunk = img.crop(box)
        output_filename = f"slice_{i}.jpg"
        chunk.save(output_filename)
        print(f"Saved {output_filename}")

except Exception as e:
    print(f"Error: {e}")
