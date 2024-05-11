<script>
  import axios from "axios";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  const api_root = $page.url.origin;
  let selectedEmails = {};
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


  async function changeAssetState(assetId, newState) {
    try {
      const response = await axios.put(`${api_root}/api/asset/${assetId}/${newState}`);
      alert('Asset state updated to ' + newState);
      loadAssets(); // Reload assets to reflect changes
    } catch (error) {
      console.error('Failed to update asset state', error);
      alert('Failed to update asset state');
    }
  }

  async function loadAssets() {
    try {
      const response = await axios.get(`${api_root}/api/asset`);
      assets = response.data;
    } catch (error) {
      console.error('Error fetching assets', error);
    }
  }

  loadAssets();

  function getAssets() {
    axios.get(`${api_root}/api/asset`).then(response => {
      assets = response.data;
      assets.forEach(asset => {
        selectedEmails[asset.id] = ''; // Initialisiere alle mit leerem String
      });
    }).catch(error => console.error('Error fetching assets', error));
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
  function assignAsset(assetId) {
    if (!selectedEmails[assetId]) {
      alert('Please select an email to assign');
      return;
    }

    const data = {
      assetId: assetId,
      personEmail: selectedEmails[assetId]
    };

    axios.put(`${api_root}/api/service/assignasset`, data, {
      headers: {"Content-Type": "application/json"}
    })
    .then(response => {
      alert('Asset assigned');
      getAssets();  // Reload assets to reflect changes
    })
    .catch(error => {
      alert('Failed to assign asset');
      console.error(error);
    });
  }
</script>

<h1 class="mt-3">Create Asset</h1>
<form class="mb-5">
  <div class="row mb-3">
    <div class="col">
      <label class="form-label" for="assetName">Asset name</label>
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
      <label class="form-label" for="earnings">Guarantee End</label>
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
        <td>
          {persons.find(person => person.id === asset.personId) ? persons.find(person => person.id === asset.personId).email : 'Not Assinged'}
        </td>
        <td>
          {#if asset.assetState === 'Unassigned'}
            <select bind:value={selectedEmails[asset.id]}>
              <option value="">select Email to assign</option>
              {#each persons as person}
                <option value={person.email}>{person.email}</option>
              {/each}
            </select>
            <button type="button" class="btn btn-primary"
              disabled={!selectedEmails[asset.id]}
              on:click={() => assignAsset(asset.id)}>
              Assign
            </button>
          {:else}
            <span></span>
          {/if}
        </td>
        <td>
          <button type="button"
                  class="btn {asset.assetState === 'Assigned' || asset.assetState === 'InRepair' ? 'btn-primary' : 'btn-secondary'}"
                  on:click={asset.assetState === 'Assigned' || asset.assetState === 'InRepair' ? () => changeAssetState(asset.id, 'unassign') : null}
                  disabled={asset.assetState !== 'Assigned' && asset.assetState !== 'InRepair'}>
            Unassign
          </button>
        </td>
        <td>
          {#if asset.assetState === 'Assigned'}
            <button on:click={() => changeAssetState(asset.id, 'repair')}>To Repair</button>
          {/if}
          {#if asset.assetState === 'InRepair'}
          <button class="btn btn-success" on:click={() => changeAssetState(asset.id, 'assign')}>
            Repaired
          </button>
        {/if}
          {#if asset.assetState !== 'Disposed'}
            <button on:click={() => changeAssetState(asset.id, 'dispose')}>Dispose</button>
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>