// Modified in May 2026 for the Remote Web build.
// The upstream source snapshot used for this hosted build does not include its
// browser Opus worker. Keep the worker contract present so desktop sessions can
// start; audio frames are ignored until a compatible decoder worker is restored.
self.onmessage = function (event) {
  if (event.data && event.data.channels) return;
  self.postMessage(new Float32Array(0));
};
