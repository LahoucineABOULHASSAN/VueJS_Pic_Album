<template>
  <div class="flex flex-column doc doc-intro">
    <h2>Introduction to PicAlbum API</h2>
    <p>
      The PicAlbum service is a REST api tha provides a json formated data of
      photos. The api is build with Flask framework.<br />
      To use this api, you don't need authentication, just send an https request
      and you can get the data you asked for.<br />
      the data is formated on this way:<br />
      <DocJSON :jsonStr="str" />
    </p>
    <p>
      If you like to install the api app and test it on your machine, you can
      clone it from
      <a
        href="https://github.com/LahoucineABOULHASSAN/picAlbumAPI"
        target="_blank"
        rel="noopener noreferrer"
        >the app repo</a
      >
      and you can fine the installation steps on the installation section.
    </p>
    <Alert :alert="'In case of Error, a 404 page is returned'" />
  </div>
</template>
<script>
import DocJSON from "./DocJSON";
import Alert from "@/components/alerts/Alert";
export default {
  components: { DocJSON, Alert },
  setup() {
    const str =
      '{\n   "success": true,\n   "photos": [],\n   "totale_photos": 0\n}';
    return { str };
  },
};
</script>
<style>
.doc-intro h2 {
  color: var(--red);
}
</style>
