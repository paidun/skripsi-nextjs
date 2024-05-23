export const getSettingMediaResolution = (slug) => {
  let resolution;
  let widthMedia;
  let heightMedia;


  if (slug === 'img-480p' || slug === 'vid-480p') {
    resolution = '480p'
    widthMedia = '640'
    heightMedia = '480'
  } else if (slug === 'img-720p' || slug === 'vid-720p') {
    resolution = '720p'
    widthMedia = '1280'
    heightMedia = '720'
  }
  else if (slug === 'img-1080p' || slug === 'vid-1080p') {
    resolution = '1080p'
    widthMedia = '1920'
    heightMedia = '1080'
  }
  else if (slug === 'img-2k' || slug === 'vid-2k') {
    resolution = '2k'
    widthMedia = '2048'
    heightMedia = '1080'
  }
  else if (slug === 'img-4k' || slug === 'vid-4k') {
    resolution = '4k'
    widthMedia = '3840'
    heightMedia = '2160'
  }
  return {
    resolution, widthMedia, heightMedia
  }
}