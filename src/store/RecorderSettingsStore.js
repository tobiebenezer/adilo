import router from '@/router'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { defineStore } from 'pinia'

export const useRecordSettings = defineStore('recordSettings', {
  state: () => {
    return {
      screen: true,
      camera: true,
      mic: false,
      previewEle: '',
      chunks: [],
      videoUrl: '',
      mediaRecorder: [],
      isRecording: false
    }
  },

  getters: {
    toggleButton(state) {
      return (btnName) => (state[btnName] ? 'toggler-button' : 'toggler-button-off')
    }
  },

  actions: {
    toggleRadio(btnName) {
      this[btnName] = !this[btnName]
    },

    async startRecord() {
      router.push({ name: 'preview' })
    },

    async previewRecord(elementId) {
      try {
        this.preview = elementId

        const preview = document.getElementById(elementId)
        let stream;

        if (this.screen) {
         let screeNstream = await navigator.mediaDevices.getDisplayMedia({
            video: {
              displaySurface: 'window',
              cursor: 'always'
            },
            audio: this.mic
          })
        }
        if(this.camera){
          stream = await navigator.mediaDevices.getUserMedia({
            video: this.camera,
            audio: this.mic
          })
        }

        preview.srcObject = stream
        preview.autoplay = true


      } catch (err) {
        console.error(`you got an error: ${err}`)
      }
    },
    startVRecord(previewEle) {
      if (!this.isRecording) {
        const videoElem = document.getElementById(previewEle)
        this.mediaRecorder = new MediaRecorder(videoElem.srcObject)
        this.mediaRecorder.start()

        var t = this
        this.mediaRecorder.ondataavailable = function (e) {
          t.chunks.push(e.data)
        }

        this.mediaRecorder.onstop = function () {
          var blob = new Blob(t.chunks, { type: 'video/mp4; codecs=mpeg4,vorbis' })
          t.chunks = []
          t.videoUrl = window.URL.createObjectURL(blob)
        }
        this.isRecording = true
      } else {
        this.mediaRecorder.stop()
        this.isRecording = false
      }
    }
  }
})
