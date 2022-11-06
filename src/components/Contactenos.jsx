function Contactenos(props){
return (

    <section class="form-register">
        <h4>Formulario de contacto</h4>
        <form method="post">
            <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingresa tu nombre"/>
            <input class="controls" type="text" name="username" id="username" placeholder="Ingresa un username"/>
            <input class="controls" type="email" name="correo" id="correo" placeholder="Ingresa un correo"/>
            <input class="controls" type="text" name="contraseña" id="contraseña" placeholder="Ingresa sugerencia o reclamo"/>
            <div id="errorBox">
            </div>
            <input class="botons" type="button" onclick="register()" value="Enviar"/>
        </form>
    </section>

);

}

export default Contactenos; 