const { styled } = require("@material-ui/core")

var CACHE_NAME = 'covid19-pwa'
var urlToCache = [ '/']

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache){
        console.log('Opened cache')
        return cache.addAll(urlToCache)
      })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response){
        if(response){
          return response
        }
        return fetch(event.request)
      })
  )
})

self.addEventListener('activate', event => {
  var cacheWhiteList = ['pwa-task-manager']
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if(cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})