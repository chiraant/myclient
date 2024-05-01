<script>
    import axios from "axios";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    // TODO: setze hier die URL zu deinem mit Postman erstellten Mock-Server ein
    const api_root = $page.url.origin;

    let persons = [];
    let person = {
        firstName: null,
        lastName: null,
        email: null,
    };

    onMount(() => {
        getPersons();
    });

    function getPersons() {
        var config = {
            method: "get",
            url: api_root + "/api/person",
            headers: {},
        };

        axios(config)
            .then(function (response) {
                persons = response.data;
            })
            .catch(function (error) {
                alert("Could not get persons");
                console.log(error);
            });
    }

    function createPerson() {
        var config = {
            method: "post",
            url: api_root + "/api/person",
            headers: {
                "Content-Type": "application/json",
            },
            data: person,
        };

        axios(config)
            .then(function (response) {
                alert("Person added");
                getPersons();
            })
            .catch(function (error) {
                alert("Could not create Person");
                console.log(error);
            });
    }
</script>

<h1 class="mt-3">Create Person</h1>
<form class="mb-5">
    <div class="row mb-3">
        <div class="col-sm-6">
            <label class="form-label" for="firstName">First Name</label>
            <input
                bind:value={person.firstName}
                class="form-control"
                id="firstName"
                type="text"
            />
        </div>
        <div class="col-sm-6">
            <label class="form-label" for="lastName">Last Name</label>
            <input
                bind:value={person.lastName}
                class="form-control"
                id="lastName"
                type="text"
            />
        </div>
        <div class="col-sm-12">
            <label class="form-label" for="email">Email</label>
            <input
                bind:value={person.email}
                class="form-control"
                id="email"
                type="text"
            />
        </div>
    </div>
    <br />
    <button type="button" class="btn btn-primary" on:click={createPerson}
        >Submit</button
    >
</form>

<h1>All Persons</h1>
<table class="table">
    <thead>
        <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
        </tr>
    </thead>
    <tbody>
        {#each persons as person}
            <tr>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.email}</td>
            </tr>
        {/each}
    </tbody>
</table>
