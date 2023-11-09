from PIL import Image

# # Open the images
# image1 = Image.open('EMSR382_AOI01_01_ESA_LC.png')
# image2 = Image.open('EMSR382_AOI01_01_GRA.png')
# image3 = Image.open('EMSR382_AOI01_01_S2L2A.png')
# # image4 = Image.open('EMSR382_AOI01_01_CM.png')

# # Ensure all images have the same dimensions
# width, height = image1.size
# # assert all(image.size == (width, height) for image in [image2, image3, image4])

# # Create a new image with the same height and four times the width
# new_image = Image.new('RGB', (width, height))

# # Define the width of each band
# band_width = width // 3

# # Paste each quarter of the original images into the new image
# new_image.paste(image1.crop((0, 0, band_width, height)), (0, 0))
# new_image.paste(image2.crop((band_width, 0, band_width * 2, height)), (band_width, 0))
# new_image.paste(image3.crop((band_width * 2, 0, band_width * 3, height)), (band_width * 2, 0))
# # new_image.paste(image4.crop((band_width * 3, 0, width, height)), (band_width * 3, 0))

# # Save or display the new image
# new_image.save('new_image.jpg')
# new_image.show()

# ----------------------------------------------------------------------------------------
from PIL import Image, ImageDraw

# Open the images
image1 = Image.open('EMSR382_AOI01_01_ESA_LC.png')
image2 = Image.open('EMSR382_AOI01_01_GRA.png')
image3 = Image.open('EMSR382_AOI01_01_S2L2A.png')
image4 = Image.open('EMSR382_AOI01_01_CM.png')

# Ensure all images have the same dimensions
width, height = image1.size
# assert all(image.size == (width, height) for image in [image2, image3, image4])

# Create a new image with the same dimensions
new_image = Image.new('RGB', (width, height))

# Function to create a mask for a 45-degree slice
def create_mask(start, end, width, height):
    mask = Image.new('L', (width, height), 0)
    draw = ImageDraw.Draw(mask)
    points = [start, (width, 0), (width, height), (0, height), end]
    print(f"Points: {points}")
    draw.polygon(points, fill=255)
    return mask

# Create masks for each 45-degree section
mask1 = create_mask((0, 0), (width // 2, height // 2), width, height)
mask2 = create_mask((width // 2, height // 2), (width, 0), width, height)
mask3 = create_mask((width, height), (width // 2, height // 2), width, height)
mask4 = create_mask((width // 2, height // 2), (width, height), width, height)

# Paste each image into the new image using the masks
new_image.paste(image1, (0, 0), mask1)
new_image.paste(image2, (0, 0), mask2)
new_image.paste(image3, (0, 0), mask3)
new_image.paste(image4, (0, 0), mask4)

# Save or display the new image
new_image.save('new_image_45_degrees.jpg')
new_image.show()

# ----------------------------------------------------------------------------------------
from PIL import Image, ImageDraw

# Open the images
image1 = Image.open('EMSR382_AOI01_01_CM.png')
image2 = Image.open('EMSR382_AOI01_01_S2L2A.png')
image3 = Image.open('EMSR382_AOI01_01_GRA.png')
image4 = Image.open('EMSR382_AOI01_01_ESA_LC.png')

# Ensure all images have the same dimensions
width, height = image1.size
assert all(image.size == (width, height) for image in [image2, image3, image4])

# Create a new image with the same dimensions
new_image = Image.new('RGB', (width, height))

# Function to create a mask for a 45-degree band
def create_mask(offset, width, height):
    mask = Image.new('L', (width, height), 0)
    draw = ImageDraw.Draw(mask)
    points = [(0, offset), (width, offset - width), (width, offset), (0, offset + width)]
    draw.polygon(points, fill=255)
    return mask

# Calculate the width of each band (diagonal width)
band_width = int((width + height) / 4)

# Create and paste each band
masks = [create_mask(band_width * i, width, height) for i in range(4)]
images = [image1, image2, image3, image4]

for i, mask in enumerate(masks):
    new_image.paste(images[i], (0, 0), mask)

# Save or display the new image
new_image.save('new_image_45_degrees_bands.jpg')
new_image.show()

