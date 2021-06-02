<template>
  <div class="flex flex-column doc doc-api">
    <h2>API Docs</h2>
    <div class="doc-info">
      <h4>Endpoints</h4>
      <br />
      <p>
        <span class="flex flex-row"
          ><strong>[METHOD]:</strong> <em>(endpoint)</em></span
        >
        <span class="flex flex-row"
          ><strong>[GET,POST]:</strong> <em>('/photos')</em></span
        >
        <span class="flex flex-row"
          ><strong>[GET,PATCH,DELETE]:</strong> <em>('/photos/:id')</em></span
        >
        <span class="flex flex-row"
          ><strong>[POST]:</strong> <em>('/photos/search')</em></span
        >
      </p>
    </div>
    <div class="doc-info">
      <h4>
        <a
          href="https://picalbum-api.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          >picalbum-api.herokuapp.com/</a
        >
      </h4>
      <br />
      <h5># Welcome message</h5>
      <p>
        <strong>Function:</strong> returns a json object containing two values,
        success and message.<br />
        <strong>Request Example: </strong>
        <span class="command"
          >curl -H "Accept: application/json" -H "Content-Type:
          application/json" http://127.0.0.1:5000/</span
        >
      </p>
      <DocJSON :jsonStr="welcome" />
      <h4>
        <a
          href="https://picalbum-api.herokuapp.com/photos"
          target="_blank"
          rel="noopener noreferrer"
          >/photos</a
        >
      </h4>
      <br />
      <h5># Get Photos or Post a single photo</h5>
      <p>
        <strong>Function:</strong> returns a dictionary of list of objects
        (photos), success value, and total number of photos. <br />
        <strong>Request Example: </strong>
        <span class="command"
          >curl -H "Accept: application/json" -H "Content-Type:
          application/json" http://127.0.0.1:5000/photos</span
        >
      </p>
      <DocJSON :jsonStr="photos" />
    </div>
    <div class="doc-info">
      <h4>/photos/:id</h4>
      <br />
      <h5># Get single Photo, update it or delete it</h5>
      <p>
        <strong>Function:</strong> <br />
        <strong><small>GET: </small></strong>
        <small
          >returns a dictionary of photo object, success value, and ok message.
          for the get single photo request.</small
        >
        <br />
        <strong><small>Request Example: </small></strong>
        <span class="command"
          >curl -H "Accept: application/json" -H "Content-Type:
          application/json" http://127.0.0.1:5000/photos/ID-123-456-789</span
        >
      </p>
      <DocJSON :jsonStr="photo" />
      <p>
        <strong><small>POST: </small></strong>
        <small>returns an object, with success value, and the create id.</small>
        <br /><strong><small>Request Example: </small></strong>
        <span class="command"
          >curl -X POST -H "Accept: application/json" -H "Content-Type:
          application/json" -d '{ "categories": "['Montains','Beauty']",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum sequi sunt obcaecati, voluptates beatae nemo
          consequuntur dolorum.", "url":
          "https://images.unsplash.com/photo-1576675466684-456bcdeccfbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
          "owner": "unsplash_Tomáš_Malík", "title": "Mount Fuji", "rating":4.5
          }' http://127.0.0.1:5000/photos
        </span>
      </p>
      <DocJSON :jsonStr="created" />
      <p>
        <strong><small>PATCH: </small></strong>
        <small
          >returns an object, with success value, and the updated id.</small
        >
        <br /><strong><small>Request Example: </small></strong>
        <span class="command"
          >curl -X PATCH -H "Accept: application/json" -H "Content-Type:
          application/json" -d '{"title":"new title"}'
          http://127.0.0.1:5000/photos/ID-123-123-123</span
        >
      </p>
      <DocJSON :jsonStr="updated" />
      <p>
        <strong><small>DELETE: </small></strong>
        <small
          >returns an object, with success value, and the deleted id.</small
        >
        <br /><strong><small>Request Example: </small></strong>
        <span class="command"
          >curl -X DELETE -H "Accept: application/json" -H "Content-Type:
          application/json" http://127.0.0.1:5000/photos/ID-123-123-123</span
        >
      </p>
      <DocJSON :jsonStr="deleted" />
    </div>
    <div class="doc-info">
      <h4>/photos/search</h4>
      <br />
      <h5># Filter Photos (Post request)</h5>
      <p>
        <strong>Function:</strong> <br />
        Filters the photos that includes the title value, Returns list of match
        photos, succes value, and total of found results.
        <br /><strong>Request Example: </strong>
        <span class="command"
          >curl -X POST -H "Accept: application/json" -H "Content-Type:
          application/json" -d '{"title":"title"}'
          http://127.0.0.1:5000/photos/search</span
        >
      </p>
      <DocJSON :jsonStr="photos" />
    </div>
    <h2>Errors</h2>
    <div class="doc-info">
      <h4>Handle Errors</h4>
      <br />
      <p>
        Errors are returned as JSON objects in the following format: <br />
        <DocJSON :jsonStr="error" />
        The backEnd return three error types when requests fail: <br />
        - 400: Bad Request <br />
        - 404: Resource Not Found <br />
        - 405: method not allowed <br />
        - 422: Not Processable <br />
      </p>
    </div>
    <h2>Testing</h2>
    <div class="doc-info">
      <h4>Run Tests</h4>
      <br />
      <p>
        To run the tests make sure you re using your virtual envirement
        workspace, change the <strong>`DATABASE_TEST_URL`</strong> to your
        database testing url, and <strong>`PHOTO_TEST_ID`</strong> some elemnt
        id that you inserted on your photos collection, so that the tests works
        properly. Then run the following commands: <br /><br />
        <span class="command">source setup.sh</span>
        <span class="command">dropdb db-test</span>
        <span class="command">createdb db-test</span>
        <span class="command">psql -U postgres db-test &lt; mydb.pgsql</span>
        <span class="command">python test.py</span>
      </p>
    </div>
  </div>
</template>
<script>
import DocJSON from "./DocJSON";
export default {
  components: { DocJSON },
  setup() {
    const welcome =
      '{\n\t"message": "welcome to our photos api app, Please go the - /photos - url to get the data",\n\t"success": true\n}';
    const photos =
      '{\n "photos":\n  [\n\t{\n\t "categories": [ "ALL","THE CATEGORIES","THE PIC BELONGS TO" ],\n\t "description": "pic description1.",\n\t "id": "uuid-v4-generated-id1",\n\t "owner": "username1",\n\t "posted_time": "Tue, 25 May 2021 23:35:34 GMT",\n\t "rating": 4.2,\n\t "title": "title of the photo1",\n\t "url": "https://url_of_photo"\n\t},{\n\t "categories": [ "Nature", "Beauty", "Flowers" ],\n\t "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sequi sunt obcaecati, voluptates beatae nemo consequuntur dolorum.",\n\t "id": "uuid-v4-generated-id2",\n\t "owner": "username2",\n\t "posted_time": "Tue, 25 May 2021 23:35:34 GMT",\n\t "rating": 3.7,\n\t "title": "title of the photo2",\n\t "url": "https://url_of_photo"\n\t},{\n\t "categories": [ "Nature", "Beauty", "Flowers" ],\n\t "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sequi sunt obcaecati, voluptates beatae nemo consequuntur dolorum.",\n\t "id": "uuid-v4-generated-id3",\n\t "owner": "username3",\n\t "posted_time": "Tue, 25 May 2021 23:35:34 GMT",\n\t "rating": 2.9,\n\t "title": "title of the photo3",\n\t "url": "https://url_of_photo"\n\t},{\n\t "categories": [ "Nature", "Beauty", "Flowers" ],\n\t "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sequi sunt obcaecati, voluptates beatae nemo consequuntur dolorum.",\n\t "id": "uuid-v4-generated-id4",\n\t "owner": "username4",\n\t "posted_time": "Tue, 25 May 2021 23:35:34 GMT",\n\t "rating": 5,\n\t "title": "title of the photo4",\n\t "url": "https://url_of_photo"\n\t}\n  ],\n "success": true,\n "totale_photos": 4\n}';
    const photo =
      '{\n "photo":\n\t{\n\t "categories": [ "Nature","Montains" ],\n\t "description": "Fuji Monatin, beautiful and so high.",\n\t "id": "ID-123-456-789",\n\t "owner": "unsplash_Tomáš_Malík",\n\t "posted_time": "Tue, 25 May 2021 23:35:34 GMT",\n\t "rating": 4.2,\n\t "title": "Mount Fuji",\n\t "url": "https://images.unsplash.com/photo-1576675466684-456bcdeccfbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"\n\t},\n "success": true,\n "ok":"ok"\n}';
    const created = '{\n  "success":true,\n  "created":"ID-123-123-123"\n}';
    const updated = '{\n  "success":true,\n  "updated":"ID-123-123-123"\n}';
    const deleted = '{\n  "success":true,\n  "deleted":"ID-123-123-123"\n}';
    const error =
      '{\n\t"success": false,\n\t"error": 400,\n\t"message": "bad request"\n}';
    return { welcome, photos, photo, created, updated, deleted, error };
  },
};
</script>
<style>
.doc-api h2 {
  color: var(--yellow);
}
</style>
