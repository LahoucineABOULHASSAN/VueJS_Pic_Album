<template>
  <div class="work">
    <h2>About PicAlbum</h2>
    <p>
      <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
        <img
          class="right"
          src="https://api.thumbnail.ws/api/ab02008b512dad36b2b0338562dee5413dfd9e19a737/thumbnail/get?url=https://vuejs.org/&width=600"
          alt="coding"
        />
      </a>
      PicAlbum is a frontend website created with the framework
      <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"
        >Vue 3</a
      >. It contains 4 routes:<br />/photos : as the home routes where there are
      all the pics listed on a grid view, and each photo is a link to its own
      details.<br />/documentation: the API documentation.<br />/about : as the
      about page, contains the information about this page and about me too.<br />/contact
      : as a form page for contacting me if there's any comment or feedback,
      it's the way how to reach me.<br />The data that the website use is coming
      from my backend API, build with Python and Flask framework, and for the
      database, it uses the Postgres SQL service. and it's hosted on Heroku.
      <br />This website is a photo album of nature and anything that I was able
      to take with my phone's camera. I am practicing photography in my free
      time. So I decided to build this web app to show the pictures on it as
      well as a good practice of web development.
    </p>
    <p>
      <a
        href="https://aboulhassan.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        ><img
          class="left"
          src="https://api.thumbnail.ws/api/ab02008b512dad36b2b0338562dee5413dfd9e19a737/thumbnail/get?url=https://vueportfolioapp.netlify.app/&width=600"
          alt="my portfolio"
      /></a>
      Take a look on
      <a
        href="https://aboulhassan.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        >my portfolio page</a
      >, if you have time, you can find more informations about me and what i
      can do, and all the projects that i build.<br />
      Please, if you have any questions or comments, don't hesitate to contact
      me. you can sent an email on the contact page.. Your feedback is very
      important to me.<br />Thank you.
    </p>
  </div>
</template>
<style>
.work img {
  width: 50%;
  display: block;
}
img.left {
  float: left;
  margin: 1rem;
  margin-left: 0;
}
img.right {
  float: right;
  margin: 1rem;
  margin-right: 0;
}
</style>
