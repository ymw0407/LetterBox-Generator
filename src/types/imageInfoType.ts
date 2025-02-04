export interface ImageInfo {
  fileName: string;
  image: Blob;
  imageBlob: string;
  exif: ExifInfo;
}

export interface ExifInfo {
  make?: string; // brand
  model?: string; // body
  lensModel?: string; // lens

  /* DPI */
  xResolution?: number;
  yResolution?: number;
  resolutionUnit?: string;

  shutterSpeedValue?: number; // 셔터 스피드 값
  exposureTime?: number; // 노출 시간
  parsedShutterSpeed?: string; // 파싱한 셔터 스피드 값
  focalLength?: string; // 초점 거리
  iso?: string; // iso
  fNumber?: string; // 조리개 값

  createDate?: Date;
}

export interface ProcessedImageInfo {
  fileName: string;
  base64: string;
}
