<script>
    import axios from "axios";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    
  
    // TODO: setze hier die URL zu deinem mit Postman erstellten Mock-Server ein
    const api_root = $page.url.origin;
  
    let docs = [];
    let doc = {
      docTitle: null,
      uploadDate: null,
      docType: null,
    };
  
    onMount(() => {
      getDocs();
    });
  
    function getDocs() {
      var config = {
        method: "get",
        url: api_root + "/api/doc",
        headers: {},
      };
  
      axios(config)
        .then(function (response) {
          docs = response.data;
        })
        .catch(function (error) {
          alert("Could not get documents");
          console.log(error);
        });
    }
  
    function createDoc() {
      var config = {
        method: "post",
        url: api_root + "/api/doc",
        headers: {
          "Content-Type": "application/json",
        },
        data: doc,
      };
  
      axios(config)
        .then(function (response) {
          alert("Document created");
          getDocs();
        })
        .catch(function (error) {
          alert("Could not create Document");
          console.log(error);
        });
    }
  </script>
  
  <h1 class="mt-3">Create Document</h1>
  <form class="mb-5">
    <div class="row mb-3">
      <div class="col">
        <label class="form-label" for="docTitle">Document</label>
        <input
          bind:value={doc.docTitle}
          class="form-control"
          id="docTitle"
          type="text"
        />
      </div>
    </div>
    <div class="col-sm-6">
      <div class="col">
        <label class="form-label" for="upload">Upload Date</label>
        <input
          bind:value={doc.uploadDate}
          class="form-control"
          id="purchaseDate"
          type="date"
        />
      </div>
      <br>
  
      
    </div>
    <button type="button" class="btn btn-primary" on:click={createDoc}
      >Submit</button
    >
  </form>
  
  <h1>All Documents</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Type</th>
        <th scope="col">Upload Date</th>
      </tr>
    </thead>
    <tbody>
      {#each docs as doc}
        <tr>
          <td>{doc.docTitle}</td>
          <td>{doc.docType}</td>
          <td>{doc.uploadDate}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  