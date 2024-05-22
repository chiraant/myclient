<script>
    import auth from "../auth.service";
    import { isAuthenticated, user } from "../store";

    let username = "";
    let password = "";
    let loginForm;

    function loginWithUsernameAndPassword() {
        // form validation with bootstrap: see https://getbootstrap.com/docs/5.3/forms/validation/
        if (loginForm.checkValidity()) {
            console.log("login");
            auth.login(username, password);
        }
        loginForm.classList.add("was-validated");
    }
  
</script>


{#if $isAuthenticated}
    <h1>This is MyClient</h1>
    <h3>Welcome, {$user.given_name}!</h3> <br>
    <p>We love to see you back here! Just as a tipp, MyClient is only useful, if you give him love and attention.</p>
{:else}
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form
                            on:submit|preventDefault={loginWithUsernameAndPassword}
                            bind:this={loginForm}
                            class="needs-validation"
                            novalidate
                        >
                            <div class="mb-3">
                                <label for="username" class="form-label"
                                    >Email</label
                                >
                                <input
                                    bind:value={username}
                                    type="text"
                                    class="form-control"
                                    id="username"
                                    name="username"
                                    required
                                />
                                <div class="invalid-feedback">
                                    Please provide your username.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label"
                                    >Password</label
                                >
                                <input
                                    bind:value={password}
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    name="password"
                                    required
                                />
                                <div class="invalid-feedback">
                                    Please provide your password.
                                </div>
                            </div>
                            <div class="row align-items-end">
                                <div class="col">
                                    <button
                                        type="submit"
                                        class="btn btn-primary">Log in</button
                                    >
                                </div>
                                <div class="col-auto">
                                    <a href="/signup">Sign up</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}
