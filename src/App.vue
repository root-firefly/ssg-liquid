<template>
  <div class="imc">
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.imc {
  --primary-color: #6D2C3C;
  line-height: 1.09;

  .section-wapper {
    background-color: var(--bg-c);
    padding-block: 20px 25px;

    @include wrd('md') {
      padding-block: 40px 75px;
    }
  }

  .section-container {
    position: relative;
    margin: 0 auto;
    max-width: 1440px;
    width: 90vw;

    @include wrd('md') {
      // width: 60vw;
    }
  }

  h2 {
    font-weight: bold;
    color: #fff;
  }

  h2+p {
    color: #fff;
  }
}
</style>

<schema lang="json">
{
  "name": "Lute Imc Landing Page",
  "presets": [
    {
      "name": "Lute Imc Landing Page",
      "blocks": []
    }
  ]
}
</schema>
