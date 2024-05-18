<script>
  import { page } from "$app/stores";
  import axios from "axios";
  import { onMount } from "svelte";
  import { jwt_token } from "../../store";
  import { isAuthenticated, user } from "../../store";
  import auth from "../../auth.service";

  const api_root = $page.url.origin;
  
  let currentPage;
  let nrOfPages = 0;
  let defaultPageSize = 10;
  let assetState;
  let message = "";
  let isMessageBoxOpen = false; // Zustand für die Sichtbarkeit der Nachrichtenbox

  let selectedEmails = {};
  let assets = [];
  let persons = []; // Liste der Personen
  let asset = {
    assetName: null,
    purchaseDate: null,
    guaranteeEnd: null,
    assetState: null,
    personId: null, // Person-Id für das Asset
  };

  $: {
    if ($jwt_token !== "") {
      let searchParams = $page.url.searchParams;
      if (searchParams.has("page")) {
        currentPage = searchParams.get("page");
      } else {
        currentPage = "1";
      }
      getAssets();
    }
  }

  onMount(() => {
    getPersons();
  });

  function getAssets() {
    let query =
      "?pageSize=" + defaultPageSize + "&pageNumber=" + (currentPage - 1);

    // If a state is selected, add it to the query parameters
    if (assetState) {
      query += "&state=" + assetState;
    }

    axios
      .get(`${api_root}/api/asset` + query, {
        headers: {
          "Content-Type": "application/json" + query,
          Authorization: "Bearer " + $jwt_token,
        },
      })
      .then((response) => {
        assets = response.data.content;
        assets.forEach((asset) => {
          selectedEmails[asset.id] = ""; // Initialisiere alle mit leerem String
          nrOfPages = response.data.totalPages;
        });
      })
      .catch((error) => console.error("Error fetching assets", error));
  }

  function getPersons() {
    axios
      .get(api_root + "/api/person", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + $jwt_token,
        },
      })
      .then((response) => (persons = response.data))
      .catch((error) => {
        alert("Could not get persons");
        console.log(error);
      });
  }

  function createAsset() {
    axios
      .post(api_root + "/api/asset", asset, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + $jwt_token,
        },
      })
      .then((response) => {
        alert("Asset created");
        getAssets();
      })
      .catch((error) => {
        alert("Could not create asset");
        console.log(error);
      });
  }
  function unassignAsset(assetId) {
    axios
      .put(`${api_root}/api/asset/${assetId}/unassign`, assetId, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + $jwt_token,
        },
      })
      .then((response) => {
        alert("Asset unassigned");
        getAssets(); // Aktualisiere die Asset-Liste
      })
      .catch((error) => {
        alert("Failed to unassign asset");
        console.log(error);
      });
  }
  function assignAsset(assetId) {
    if (!selectedEmails[assetId]) {
      alert("Please select an email to assign");
      return;
    }

    const data = {
      assetId: assetId,
      personEmail: selectedEmails[assetId],
    };

    axios
      .put(`${api_root}/api/service/assignasset`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + $jwt_token,
        },
      })
      .then((response) => {
        alert("Asset assigned");
        getAssets(); // Reload assets to reflect changes
      })
      .catch((error) => {
        alert("Failed to assign asset");
        console.error(error);
      });
  }

  function repairAsset(assetId) {
    axios
      .put(`${api_root}/api/asset/${assetId}/repair`, assetId, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + $jwt_token,
        },
      })
      .then((response) => {
        alert("Asset in in repair");
        getAssets(); // Aktualisiere die Asset-Liste
      })
      .catch((error) => {
        alert("Failed to set assetstate to in Repair");
        console.log(error);
      });
  }
  function repairedAsset(assetId) {
    axios
      .put(`${api_root}/api/asset/${assetId}/repaired`, assetId, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + $jwt_token,
        },
      })
      .then((response) => {
        alert("Asset is repaired");
        getAssets(); // Aktualisiere die Asset-Liste
      })
      .catch((error) => {
        alert("Failed to set assetstate to in Assigned");
        console.log(error);
      });
  }

  function disposeAsset(assetId) {
    axios
      .put(`${api_root}/api/asset/${assetId}/dispose`, assetId, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + $jwt_token,
        },
      })
      .then((response) => {
        alert("Asset is disposed");
        getAssets(); // Aktualisiere die Asset-Liste
      })
      .catch((error) => {
        alert("Failed to set assetstate to disposed");
        console.log(error);
      });
  }
  function sendMessage() {
    const emailData = {
      to: "chiraant@students.zhaw.ch",
      subject: "Message from User",
      message: message
    };
    axios.post(`${api_root}/api/send-email`, emailData, {
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + $jwt_token }
    })
    .then(() => {
      alert("Message sent successfully!");
      message = '';  // Nachricht zurücksetzen
      toggleMessageBox();  // Nachrichtenbox schließen
    })
    .catch(error => {
      console.error("Failed to send message:", error);
      alert("Failed to send message.");
    });
  } 
  function toggleMessageBox() {
    isMessageBoxOpen = !isMessageBoxOpen;
  }
</script>

{#if $isAuthenticated && $user.user_roles && $user.user_roles.includes("admin")}
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
{:else if $isAuthenticated}
  <!-- Nachrichtenformular für nicht-Admin-Benutzer -->
  <button class="accordion-button" on:click={toggleMessageBox}>
    {isMessageBoxOpen ? 'Hide Message Form' : 'Send a Message to the Administrator'}
  </button>
  <div class={isMessageBoxOpen ? 'user-message-form active' : 'user-message-form'}>
    <textarea class="message-textarea" bind:value={message} placeholder="Write your message here for the administrator" rows="4"></textarea>
    <button on:click={sendMessage}>Send Message</button>
  </div>
{/if}

<div class="row my-3">
  <div class="col-auto">
    <label for="assetState" class="col-form-label">Asset State: </label>
  </div>
  <div class="col-3">
    <select
      bind:value={assetState}
      class="form-select"
      id="assetState"
      type="text"
    >
      <option value="ALL">All</option>
      <option value="ASSIGNED">Assigned</option>
      <option value="UNASSIGNED">Unassigned</option>
      <option value="IN_REPAIR">In Repair</option>
      <option value="DISPOSED">Disposed</option>
    </select>
  </div>
  <div class="col-3">
    <a
      class="btn btn-primary"
      href={"/assets?page=1&assetState=" + assetState}
      role="button">Apply</a
    >
  </div>
</div>

<h1>All Assets</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">State</th>
      <th scope="col">Purchase Date</th>
      <th scope="col">Guarantee End</th>
      <th scope="col">Person</th>
      {#if $isAuthenticated && $user.user_roles && $user.user_roles.includes("admin")}
        <th scope="col">Actions</th>
      {/if}
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
          {persons.find((person) => person.id === asset.personId)
            ? persons.find((person) => person.id === asset.personId).email
            : "Not Assinged"}
        </td>
        {#if $isAuthenticated && $user.user_roles && $user.user_roles.includes("admin")}
          <td>
            {#if asset.assetState === "Unassigned"}
              <select bind:value={selectedEmails[asset.id]}>
                <option value="">select Email to assign</option>
                {#each persons as person}
                  <option value={person.email}>{person.email}</option>
                {/each}
              </select>
              <button
                type="button"
                class="btn btn-primary"
                disabled={!selectedEmails[asset.id]}
                on:click={() => assignAsset(asset.id)}
              >
                Assign
              </button>
            {:else}
              <span></span>
            {/if}
          </td>
          <td>
            <!-- Unassign Button -->
            {#if asset.assetState === "Assigned" || asset.assetState === "InRepair"}
              <button
                type="button"
                class="btn btn-warning"
                disabled={asset.assetState !== "Assigned" &&
                  asset.assetState !== "InRepair"}
                on:click={() => unassignAsset(asset.id)}
              >
                Unassign
              </button>
            {/if}
          </td>
          <td>
            <!-- Repair Button -->
            {#if asset.assetState === "Assigned"}
              <button
                type="button"
                class="btn btn-info"
                on:click={() => repairAsset(asset.id)}
              >
                To Repair
              </button>
            {/if}
            <!-- Repaired Button -->
            {#if asset.assetState === "InRepair"}
              <button
                type="button"
                class="btn btn-success"
                on:click={() => repairedAsset(asset.id)}
              >
                Repaired
              </button>
            {/if}
          </td>
          <td>
            <!-- Dispose Button -->
            {#if asset.assetState !== "Disposed"}
              <button
                type="button"
                class="btn btn-danger"
                on:click={() => disposeAsset(asset.id)}
              >
                Dispose
              </button>
            {/if}
          </td>
        {/if}
      </tr>
    {/each}
  </tbody>
</table>
<nav>
  <ul class="pagination">
    {#each Array(nrOfPages) as _, i}
      <li class="page-item">
        <a
          class="page-link"
          class:active={currentPage == i + 1}
          href={"/assets?page=" + (i + 1)}
          >{i + 1}
        </a>
      </li>
    {/each}
  </ul>
</nav>
<style>
  .accordion-button {
    cursor: pointer;
    padding: 10px;
    width: 100%;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    text-align: left;
    margin-top: 20px;
  }

  .accordion-button:hover {
    background-color: #e2e2e2;
  }

  .user-message-form {
    padding: 20px;
    display: none;
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: max-height 0.3s ease-out;
    width: 50%; /* Breite der Nachrichtenbox */
    margin: 20px auto; /* Zentriert die Box horizontal */
  }

  .user-message-form.active {
    display: block;
  }

  .message-textarea {
    width: 100%; /* Füllt die Breite des Formulars aus */
    margin-bottom: 10px; /* Abstand zum Senden-Button */
  }
</style>
