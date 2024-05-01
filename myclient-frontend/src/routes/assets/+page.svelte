<script>
  import axios from "axios";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  

  // TODO: setze hier die URL zu deinem mit Postman erstellten Mock-Server ein
  const api_root = $page.url.origin;

  let assets = [];
  let asset = {
    assetName: null,
    purchaseDate: null,
    guaranteeEnd: null,
    assetState: null,
  };

  onMount(() => {
    getAssets();
  });

  function getAssets() {
    var config = {
      method: "get",
      url: api_root + "/api/asset",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        assets = response.data;
      })
      .catch(function (error) {
        alert("Could not get assets");
        console.log(error);
      });
  }

  function createAsset() {
    var config = {
      method: "post",
      url: api_root + "/api/asset",
      headers: {
        "Content-Type": "application/json",
      },
      data: asset,
    };

    axios(config)
      .then(function (response) {
        alert("Job created");
        getAssets();
      })
      .catch(function (error) {
        alert("Could not create Asset");
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

<h1>All Asset</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">State</th>
      <th scope="col">Purchase Date</th>
      <th scope="col">Gurantee End</th>
      <th scope="col">PersonId</th>
    </tr>
  </thead>
  <tbody>
    {#each assets as asset}
      <tr>
        <td>{asset.assetName}</td>
        <td>{asset.assetState}</td>
        <td>{asset.purchaseDate}</td>
        <td>{asset.guaranteeEnd}</td>
        <td>{asset.PersonId}</td>
      </tr>
    {/each}
  </tbody>
</table>
