exports.onRouteUpdate = () => {
  window.scrollTo(0, 0)
}

exports.shouldUpdateScroll = () => {
  window.scrollTo(0, 0)
  return false
}
