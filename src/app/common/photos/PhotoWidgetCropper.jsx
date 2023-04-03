import 'cropperjs/dist/cropper.css';
import React, { useRef } from 'react';
import Cropper from 'react-cropper';

export default function PhotoWidgetCropper({ setCropper, imagePreview }) {
  const cropperRef = useRef(null);

  return (
    <Cropper
      ref={cropperRef}
      src={imagePreview}
      style={{ height: 200, width: '100%' }}
      // Cropper.js options
      aspectRatio={1}
      preview='.img-preview'
      guides={false}
      viewMode={1}
      dragMode='move'
      scalable={true}
      cropBoxMovable={true}
      cropBoxResizable={true}
      crop={() => setCropper(cropperRef.current.cropper)}
    />
  );
}
