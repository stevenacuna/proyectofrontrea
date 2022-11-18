function Login(props) {
    return (
        <div>
            {/* <div class="col-lg-5 d-flex flex-column align-items-end min-vh-100">
                <div class="px-lg-5 pt-lg-4 pb-lg-3 p-4 w-75"></div>
                <div class="px-lg-5 py-lg-2 p-4 w-100">
                    <h1 class=" font-weight-bold nb-4">Bienvenido</h1>
                    <form method="post">
                        <div class="mb-3">
                            <label
                                for="exampleInputEmail1"
                                class="form-label font-weight-bold"
                            >
                                Usuario
                            </label>
                        </div>
                        <div class="mb-3">
                            <label
                                for="exampleInputPassword1"
                                class="form-label font-weight-bold"
                            >
                                Contraseña
                            </label>
                        </div>
                        <div id="errorBox"></div>
                        <a class="w-100 text-decoration-none" href="/registro">
                            ¿Eres Nuevo? Registrate aquí
                        </a>
                        <button
                            type="button"
                            onclick="login()"
                            class="btn btn-primary w-100"
                        >
                            Iniciar Sesión
                        </button>
                    </form>
                </div>
            </div> */}

            <div className="w-75 mx-auto">
                <div class="text-center">
                    <main class="form-signin w-100 m-auto">
                        <form>
                            <img
                                class="mb-4"
                                src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
                                alt=""
                                width="72"
                                height="57"
                            />
                            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                            <div class="form-floating my-3">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating my-3">
                                <input
                                    type="password"
                                    class="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <a
                                class="w-100 text-decoration-none"
                                href="/registro"
                            >
                                ¿Eres Nuevo? Registrate aquí
                            </a>

                            <button
                                class="w-100 btn btn-lg btn-primary my-3"
                                type="button"
                            >
                                Sign in
                            </button>
                            <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Login;
