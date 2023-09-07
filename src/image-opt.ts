import sharp from 'sharp';


// Define the input and output file paths
const inputFilePath = 'input.jpg'; // Change this to your input file path
const outputFilePath = 'output.jpg'; // Change this to your output file path

// Maximum dimensions for the image
const maxWidth = 1024;
const maxHeight = 1024;

// Function to optimize and resize the image
async function optimizeImage(inputPath: string, outputPath: string) {
  try {
    // Read the input image using sharp
    const image = sharp(inputPath);

    // Get the image metadata (width and height)
    const metadata = await image.metadata();

    // Check if the image needs resizing
    if (metadata.width && metadata.height) {
      let newWidth = metadata.width;
      let newHeight = metadata.height;

      // Calculate new dimensions if the image exceeds the maximum size
      if (metadata.width > maxWidth || metadata.height > maxHeight) {
        const aspectRatio = metadata.width / metadata.height;

        if (metadata.width > metadata.height) {
          newWidth = maxWidth;
          newHeight = Math.round(newWidth / aspectRatio);
        } else {
          newHeight = maxHeight;
          newWidth = Math.round(newHeight * aspectRatio);
        }
      }

      // Resize the image
      image.resize(newWidth, newHeight);
    }

    // Convert the image to JPG format with quality options
    image.jpeg({ quality: 80 });

    // Save the optimized image to the output path
    await image.toFile(outputPath);

    console.log('Image optimization complete.');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

// Call the optimizeImage function
optimizeImage(inputFilePath, outputFilePath);
