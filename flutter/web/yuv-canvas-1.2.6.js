// Modified in May 2026 for the Remote Web build.
// The bridge falls back to yuv.js/yuv.wasm when WebGL YUV rendering is not
// available. This small compatibility shim forces that worker path when the
// upstream bundled yuv-canvas asset is not shipped with the source snapshot.
window.YUVCanvas = window.YUVCanvas || {
  WebGLFrameSink: {
    isAvailable: function () {
      return false;
    },
  },
};
