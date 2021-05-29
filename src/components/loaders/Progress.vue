<template>
  <div className="progress">
    <p v-if="progress >= 0" @click="move">
      {{ `uploading new picture ${progress}%` }}
    </p>
    <p v-if="progress >= 100">successfly uploaded</p>
    <div id="progress-container">
      <div id="progress-bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const move = () => {
      let i = 0;
      if (i === 0) {
        i = 1;
        const elem = document.getElementById("progress-bar");
        let width = 0;
        const id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
    };
    return {
      move,
    };
  },
};
</script>
