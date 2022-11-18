function Contactenos(props) {
    return (
        <div>
            <section class="form-register">
                <h4>Formulario de contacto</h4>
                <form method="post">
                    <input
                        class="controls"
                        type="text"
                        name="nombres"
                        id="nombres"
                        placeholder="Ingresa tu nombre"
                    />
                    <input
                        class="controls"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Ingresa un username"
                    />
                    <input
                        class="controls"
                        type="email"
                        name="correo"
                        id="correo"
                        placeholder="Ingresa un correo"
                    />
                    <input
                        class="controls"
                        type="text"
                        name="contraseña"
                        id="contraseña"
                        placeholder="Ingresa sugerencia o reclamo"
                    />
                    <div id="errorBox"></div>
                    <input
                        class="botons"
                        type="button"
                        onclick="register()"
                        value="Enviar"
                    />
                </form>
            </section>
            <div className="w-75 mx-auto">
                <div class="text-center">
                    <main class="form-signin w-100 m-auto">
                        <form>
                            <h1 class="h3 mb-3 fw-normal">
                                Formulario de Contacto
                            </h1>

                            <div class="form-floating my-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="Nombre"
                                />
                                <label for="floatingInput">Nombre</label>
                            </div>
                            <div class="form-floating my-3">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                />
                                <label for="floatingInput">Email address</label>
                            </div>

                            <div class=" mb-3 mt-3">
                                <label for="comment">Comments:</label>
                                <textarea
                                    class="form-control"
                                    rows="5"
                                    id="comment"
                                    name="text"
                                ></textarea>
                            </div>

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

export default Contactenos;
