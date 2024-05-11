<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  const api_root = $page.url.origin;
  let docs = [];
  let docTypes = ["Guarantee", "Offer", "Invoice", "Order", "Other"];
  let doc = {
    docTitle: "",
    uploadDate: "",
    docType: "Other",
  };

  onMount(() => {
    getDocs();
  });

  function getDocs() {
    axios.get(api_root + "/api/doc")
      .then(response => {
        docs = response.data;
      })
      .catch(error => {
        alert("Could not get documents");
        console.log(error);
      });
  }

  function createDoc() {
    axios.post(api_root + "/api/doc", doc, {
      headers: { "Content-Type": "application/json" }
    })
    .then(response => {
      alert("Document created");
      getDocs();  // Refresh the list of documents
    })
    .catch(error => {
      alert("Could not create document");
      console.log(error);
    });
  }
 
  async function updateDocType(docId, newType) {
    try {
      await axios.put(`${api_root}/api/doc/${docId}/type/${newType.toLowerCase()}`);
      alert(`Document type updated to ${newType}`);
      getDocs(); // Refresh the document list
    } catch (error) {
      alert(`Failed to update document type: ${error.message}`);
      console.error('Error updating document type', error);
    }
  }
</script>

<h1 class="mt-3">Create Document</h1>
<form class="mb-5">
  <div class="row mb-3">
    <div class="col">
      <label for="docTitle">Document Title</label>
      <input bind:value={doc.docTitle} class="form-control" id="docTitle" type="text">
    </div>
    <div class="col">
      <label for="docType">Document Type</label>
      <select bind:value={doc.docType} class="form-control" id="docType">
        <option value="">Select Type</option>
        {#each docTypes as type}
          <option value={type}>{type}</option>
        {/each}
      </select>
    </div>
    <div class="col">
      <label for="uploadDate">Upload Date</label>
      <input bind:value={doc.uploadDate} class="form-control" id="uploadDate" type="date">
    </div>
  </div>
  <button type="button" on:click={createDoc} class="btn btn-primary">Submit</button>
</form>


<h1>All Documents</h1>
<table class="table">
  <thead>
    <tr>
      <th>Title</th>
      <th>Type</th>
      <th>Upload Date</th>
    </tr>
  </thead>
  <tbody>
    {#each docs as doc}
      <tr>
        <td>{doc.docTitle}</td>
        <td>{doc.docType || 'Not Specified'}</td>
        <td>{doc.uploadDate}</td>
      </tr>
    {/each}
  </tbody>
</table>