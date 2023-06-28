function animatePumpHandle(){
    document.getElementById('pump-handle').classList.add('pump-handle-updown')
    setTimeout(() => {
        document
          .getElementById("pump-handle")
          .classList.remove("pump-handle-updown");
      }, 1000);

      document.getElementById("i1").animate([
        // key frames
        { transform: 'translate(0, 0)' },
        { transform: 'translate(-500px, -200px)' },
      ], {
        // sync options
        duration: 10000
      });
}