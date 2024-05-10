<script>
  import axios from "axios";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  const api_root = $page.url.origin;

  let assets = [];
  let persons = [];  // Liste der Personen
  let asset = {
    assetName: null,
    purchaseDate: null,
    guaranteeEnd: null,
    assetState: null,
    personId: null,  // Person-Id für das Asset
  };

  onMount(() => {
    getAssets();
    getPersons();
  });

  function getAssets() {
    axios.get(api_root + "/api/asset")
      .then(response => assets = response.data)
      .catch(error => {
        alert("Could not get assets");
        console.log(error);
      });
  }

  function getPersons() {
    axios.get(api_root + "/api/person")
      .then(response => persons = response.data)
      .catch(error => {
        alert("Could not get persons");
        console.log(error);
      });
  }

  function createAsset() {
    axios.post(api_root + "/api/asset", asset, {
      headers: {"Content-Type": "application/json"}
    })
    .then(response => {
      alert("Asset created");
      getAssets();
    })
    .catch(error => {
      alert("Could not create asset");
      console.log(error);
    });
  }
  function unassignAsset(assetId) {
    axios.put(`${api_root}/api/asset/${assetId}/unassign`)
      .then(response => {
        alert("Asset unassigned");
        getAssets();  // Aktualisiere die Asset-Liste
      })
      .catch(error => {
        alert("Failed to unassign asset");
        console.log(error);
      });
  }

</script>

<h1 class="mt-3">Create Asset</h1>
<form class="mb-5">
  <div class="row mb-3">
    <div class="col">
      <label class="form-label" for="assetName">Asset</label>
      <input
        bind:value={asset.assetName}
        class="form-control"
        id="assetName"
        type="text"
      />
    </div>
  </div>
  <div class="row mb-3">
    <div class="col">
      <label class="form-label" for="earnings">Purchase Date</label>
      <input
        bind:value={asset.purchaseDate}
        class="form-control"
        id="purchaseDate"
        type="date"
      />
    </div>

    <div class="col">
      <label class="form-label" for="earnings">guaranteeEnd</label>
      <input
        bind:value={asset.guaranteeEnd}
        class="form-control"
        id="guraranteeEnd"
        type="date"
      />
    </div>
  </div>
  <button type="button" class="btn btn-primary" on:click={createAsset}
    >Submit</button
  >

</form>

<h1>All Assets</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">State</th>
      <th scope="col">Purchase Date</th>
      <th scope="col">Guarantee End</th>
      <th scope="col">Person</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each assets as asset}
      <tr>
        <td>{asset.assetName}</td>
        <td>{asset.assetState}</td>
        <td>{asset.purchaseDate}</td>
        <td>{asset.guaranteeEnd}</td>
        <td>{asset.personId}</td>
        <td>
          <button type="button" class="btn btn-primary">Edit</button>
        </td>
        <td>
          <button type="button"
                  class="btn {asset.assetState === 'Assigned' ? 'btn-primary' : 'btn-secondary'}"
                  on:click={asset.assetState === 'Assigned' ? () => unassignAsset(asset.id) : null}
                  disabled={asset.assetState !== 'Assigned'}>
            Unassign
          </button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>