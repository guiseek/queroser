// type AudioMimeType =
//   | 'audio/aac'
//   | 'audio/mpeg'
//   | 'audio/ogg'
//   | 'audio/wav'
//   | 'audio/webm'
// type VideoMimeType = 'video/mp4' | 'video/webm' | 'video/ogg'

export enum AudioMimeType {
  Aac = 'audio/aac',
  Mpeg = 'audio/mpeg',
  Ogg = 'audio/ogg',
  Wav = 'audio/wav',
  Webm = 'audio/webm',
}

export enum VideoMimeType {
  WebM = 'video/webm',
  Mp4 = 'video/mp4',
  Ogg = 'video/ogg',
}
