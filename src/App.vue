<template>
  hello
</template>

<script setup>

</script>

<style lang="scss">
.imc {
  --primary-color: #6D2C3C;
  line-height: 1.09;
  font-family: Montserrat;

  .section-wapper {
    background-color: var(--bg-c);
    padding-block: 20px 25px;

    @include wrd('md') {
      padding-block: 40px 75px;
    }
  }

  .section-container {
    --max-w: 90vw;
    position: relative;
    margin: 0 auto;
    max-width: 1440px;
    width: var(--max-w);
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
  "name": "",
  "settings": [],
  "presets": [
    {
      "name": "",
      "blocks": []
    }
  ]
}
</schema>
