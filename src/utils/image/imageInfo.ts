import { ImageInfo } from "@/types/imageInfoType";
import exifr from "exifr";

export const getShutterSpeedString = (exposureTime: number): string => {
  if (exposureTime >= 1) {
    return `${Math.round(exposureTime)}s`;
  } else {
    const fraction = 1 / exposureTime;
    return `1/${Math.round(fraction)}s`;
  }
};

export const parseImageList = async (
  fileList: File[]
): Promise<ImageInfo[]> => {
  const imageInfoPromises = fileList.map(async (file) => {
    const object = URL.createObjectURL(file);
    const exif = await exifr.parse(file);
    const parsedExposureTime = exif?.ExposureTime
      ? getShutterSpeedString(exif.ExposureTime)
      : undefined;
    const date = exif?.CreateDate ? new Date(exif.CreateDate) : undefined;

    const imageInfo: ImageInfo = {
      image: file,
      imageBlob: object,
      fileName: file.name.substring(0, file.name.lastIndexOf(".")) || file.name,
      exif: {
        make: exif?.Make,
        model: exif?.Model,
        lensModel: exif?.LensModel,
        xResolution: exif?.XResolution,
        yResolution: exif?.YResolution,
        resolutionUnit: exif?.ResolutionUnit,
        shutterSpeedValue: exif?.ShutterSpeedValue,
        exposureTime: exif?.ExposureTime,
        parsedShutterSpeed: parsedExposureTime,
        focalLength: exif?.FocalLength ? `${exif.FocalLength}mm` : undefined,
        iso: exif?.ISO ? `ISO${exif.ISO}` : undefined,
        fNumber: exif?.FNumber ? `f/${exif.FNumber}` : undefined,
        createDate: date || new Date(),
      },
    };

    return imageInfo;
  });

  return await Promise.all(imageInfoPromises);
};
