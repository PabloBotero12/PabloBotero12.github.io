function generateCode() {
    var Name = document.getElementById('Name').value;
    var developer = document.getElementById('developer').value;
    var description = document.getElementById('description').value;
    var linkedin = document.getElementById('linkedin').value;
    var Github = document.getElementById('Github').value;
    var Youtube = document.getElementById('Youtube').value;

    // CSS generado
    var generatedCSS = `@import url("https://fonts.googleapis.com/css?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Rubik", sans-serif;
    } 
    
    :root {
        --text-color: #fff;
        --color: #2742BB; 
        --bg-color: #1c1c1d;
        --first: #fff;
        --second: #000;
        --mob-color: #363636;
    } 
    
    body.dark-mode {
        --text-color: #222;
        --bg-color: #f2f2f2;
        --first: #222;
        --second: #fff;
        --mob-color: #eae6e6;    
    }
    
    .container {
        max-width: 1250px;
        width: 100%;
        margin: 0 auto;
    } 
    
    header {
        background: var(--bg-color);
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    
        nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
    
            .logo {
                z-index: 1;
    
                a {
                    text-decoration: none;
                    font-size: 32px;
                    font-weight: 600;
                    color: var(--first);
    
                    span {
                        color: var(--color);
                    }
                }
            }
    
            .list-darkmode-menu {
                display: flex;
                align-items: center;
                gap: 2.5rem;
    
                ul {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 35px;
                    font-size: 18px;
                    list-style: none;
                    z-index: 1;
    
                    li {
                        a {
                            position: relative;
                            text-decoration: none;
                            color: var(--first);
                            font-size: 18px;
                            font-weight: 500;
                            transition: 0.3s ease; 
    
                            &:hover {
                                color: var(--color);
    
                                &::before {
                                    width: 100%;
                                }
                            }
    
                            &::before {
                                content: '';
                                position: absolute;
                                bottom: -7px;
                                left: 0;
                                width: 0;
                                height: 2.5px;
                                background: var(--color);
                                transition: 0.3s ease; 
                            }
                        }
                    }
                } 
    
                .mode {
                    color: var(--text-color);
                    font-size: 24px;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    user-select: none;
    
                    .fa-moon,
                    .fa-sun {
                        position: absolute;
                        animation: animate 0.5s;
                    }
    
                    .fa-sun {
                        display: none;
                    }
    
                    input:checked ~ .fa-moon {
                        display: none;
                    }
    
                    input:checked ~ .fa-sun {
                        display: block;
                    }
    
                    input {
                        position: absolute;
                        opacity: 0;
                        cursor: pointer;
                        height: 0;
                        width: 0;
                    }
                }
    
                @keyframes animate {
                    0% {
                        transform: rotate(-260deg) scale(0);
                        opacity: 0;
                    }
                    75% {
                        transform: rotate(25deg);
                    }
                }
    
                .hamburger {
                    position: relative;
                    width: 30px;
                    cursor: pointer;
                    appearance: none;
                    border: none;
                    outline: none;
                    background: none;
                    scale: 0.9;
                    display: none;
    
                    .bar,
                    &::after,
                    &::before {
                        content: '';
                        display: block;
                        width: 30px;
                        height: 3px;
                        background: var(--first);
                        margin: 6px 0;
                        transition: 0.4s;
                    }
    
                    &.active::before {
                        transform: rotate(-45deg) translate(-8px, 5px);
                    }
    
                    &.active::after {
                        transform: rotate(45deg) translate(-8px, -5px);
                    }
    
                    &.active .bar {
                        opacity: 0;
                    }
                }
            }
        }
    } 
    
    .home {
        background: var(--bg-color);
        position: absolute;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: -1;
        padding: 120px 0 50px;
    
        .home-info {
            display: flex;
            align-items: center;
            justify-content: center;
    
            .left {
                flex: 1;
    
                h3 {
                    font-size: 2.5em;
                    font-weight: bold;
                    letter-spacing: 0.5px;
                    color: var(--first);
                    margin: 10px 0;
                }
        
                h1 {
                    font-size: 2.5em;
                    color: var(--first);
                    margin: 10px 0;
                }
    
                h4 {
                    color: var(--first);
                    font-size: 2.2em;
                    font-weight: bold;
                    min-width: 280px;
                    margin-bottom: 20px;
    
                    span {
                        color: var(--color);
                    }
                }
    
                p {
                    width: 90%;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 25px;
                    color: var(--first);
                    mask-border: 50px;
                    margin-bottom: 15px;
                    text-align: justify;
                } 
    
                .social {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin: 25px 0;
    
                    a {
                        text-decoration: none;
                        background: transparent;
                        color: var(--color);
                        width: 45px;
                        height: 45px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: 0.4s ease;
                        border: 2px solid var(--color);
    
                        i {
                            font-size: 20px;
                        }
    
                        &:hover {
                            color: #fff;
                            background: var(--color);
                            transform: translate(-7px);
                        }
                    }
                }
    
                .btn {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin: 25px 0;
    
                    button {
                        font-size: 15px;
                        font-weight: 600;
                        padding: 12px 24px;
                        border-radius: 25px;
                        color: var(--color);
                        background: transparent;
                        border: 2px solid var(--color);
                        outline: none;
                        cursor: pointer;
                        transition: 0.3s ease-in;
    
                        &:hover {
                            color: #fff;
                            background: var(--color);
                            transform: translateY(-7px);
                        }
                    }
                }
            }
    
            .right {
                flex: 1;
    
                .profile {
                    text-align: right;
    
                    img {
                        width: 450px;
                        height: 450px;
                        object-fit: cover;
                        object-position: top;
                        border-radius: 50%;
                        border: 3px solid var(--color);
                        box-shadow: 0 0 40px var(--color);
                        cursor: pointer;
                        transition: 0.3s ease;
    
                        &:hover {
                            transform: scale(1.05);
                            box-shadow: 0 0 80px var(--color);
                        }
                    }
                }
            }
        }
    } 
    /* css proyectos */
    .lenguages {
        color: #2742BB;
        margin-bottom: 10px;
    } 
    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    
    .card {
        flex: 1 1 calc(33.33% - 40px);
        max-width: calc(33.33% - 40px);
        width: 100%; /* Añade esta propiedad para asegurar responsividad */
        box-sizing: border-box; 
        border: 1px solid #ccc;
        border-radius: 8px;
        overflow: hidden;
        margin: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    .card-body {
        padding: 20px;
        max-height: 250px;
        overflow-y: auto;
    }
    
    .card-body::-webkit-scrollbar {
        width: 0.5em;
    }
    
    .card-body::-webkit-scrollbar-thumb {
        background-color: transparent;
    }
    
    .card-title {
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: #2742BB;
    }
    
    .card-body p {
        width: 100%;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        color: var(--first);
        margin-bottom: 15px;
        text-align: justify;
    }
    
    .card-body .social {
        display: flex;
        gap: 15px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    
    .card-body .social a {
        text-decoration: none;
        background: transparent;
        color: #2742BB;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.4s ease;
        border: 2px solid #2742BB;
        margin-bottom: 20px;
    
        i {
            font-size: 20px;
        }
    
        &:hover {
            color: #fff;
            background: #2742BB;
            transform: translate(7px);
        }
    }
    
    
    
    @media screen and (max-width: 1280px) {
        header {
            nav {
                padding: 0 50px;
            }
        }
    
        .home {
            padding: 100px 50px;
            .home-info {
                .left {
                    h1 {
                        font-size: 4em;
                    }
                }
                
                .right {
                    .profile {
                        img {
                            width: 400px;
                            height: 400px;
                        }
                    }
                }
            }
        }
    } 
    
    @media screen and (max-width: 992px) {
        header {
            background: var(--mob-color);
            position: sticky;
            top: 0;
            z-index: 9;
    
            nav {
                .list-darkmode-menu {
                    ul {
                        position: fixed;
                        top: 89px;
                        left: -100%;
                        max-width: 60%;
                        width: 100%;
                        height: 100vh;
                        background: var(--mob-color);
                        align-items: flex-start;
                        justify-content: flex-start;
                        flex-direction: column;
                        padding: 30px 50px;
                        gap: 30px;
                        transition: 0.3s ease;
    
                        li {
                            a {
                                font-size: 22px;
                            }
    
                            &.active {
                                left: 0%;
                            }
                        }
                    }
    
                    .hamburger {
                        display: block;
                    }
                }
            }
        } 
    
        .card {
            flex: 1 1 calc(50% - 20px);
            max-width: calc(50% - 20px);
        }
    
        .home {
            position: relative;
            padding: 30px 50px;
            height: 100%;
    
            .home-info {
                flex-direction: column-reverse;
    
                .left {
                    padding-top: 50px;
    
                    p {
                        width: 100%;
                    } 
    
                    .social {
                        display: none;
                    }
                }
    
                .right {
                    .profile {
                        margin-top: 25px;
    
                        img {
                            width: 375px;
                            height: 375px;
                            box-shadow: 0 0 30px var(--color);
    
                            &:hover {
                                box-shadow: 0 0 60px var(--color);
                            }
                        }
                    }
                }
            }
        }
    }
    
    @media screen and (max-width: 767px) {
        header {
            nav {
                padding: 0 30px;
    
                .list-darkmode-menu {
                    ul {
                        padding: 30px 0 0 30px;
    
                        li {
                            a {
                                font-size: 20px;
                            }
                        }
                    }
                }
            }
        }
    
        .card {
            flex: 1 1 calc(100% - 20px);
            max-width: calc(100% - 20px);
        }
    
        .home {
            padding: 30px;
    
            .home-info {
                .left {
                    h1 {
                        font-size: 3.6em;
                    }
    
                    h4 {
                        font-size: 1.8em;
                    }
    
                    p {
                        font-size: 14px;
                    }
                }
    
                .right {
                    .profile {
                        img {
                            width: 350px;
                            height: 350px;
                        }
                    }
                }
            }
        }
    } 
    
    @media screen and (max-width: 567px) {
        header {
            nav {
                .logo {
                    a {
                        font-size: 28px;
                    }
                }
            }
        }
    
        .card {
            flex: 1 1 calc(100% - 20px);
            max-width: calc(100% - 20px);
        }
    
        .home {
            .home-info {
                .left {
                    h3 {
                        font-size: 2em;
                    }
    
                    h1 {
                        font-size: 2.8em;
                    }
    
                    h4 { 
                        font-size: 1.6em;
                    } 
    
                    p {
                        font-size: 14px;
                    }
                }
    
                .right {
                    .profile {
                        img {
                            width: 280px;
                            height: 280px;
                        }
                    }
                }
            }
        }
    }
    `;
    
    // HTML generado
    var generatedHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <link rel="stylesheet" href="style.css">
        <title>Portafolio</title>
    </head>
    <body>
        
        <header>
            <div class="container">
                <nav>
                    <div class="logo">
                        <a href="">Mi <span>Portafolio</span></a>
                    </div>
                    <div class="list-darkmode-menu">
                        <ul>
                            <li><a href="index.html">Inicio</a></li>
                            <li><a href="#">Sobre mi</a></li>
                            <li><a href="#>Proyectos</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                        <label class="mode">
                            <input type="checkbox" checked="checked" id="darkModeButton">
                            <i class="fa-solid fa-sun"></i>
                            <i class="fa-solid fa-moon"></i>
                        </label>
                        <button class="hamburger">
                            <div class="bar"></div>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    
        <section class="home">
            <div class="container">
                <div class="home-info">
                    <div class="left">
                        <div class="animate__animated animate__backInLeft">
                        <h3>Hola, soy</h3>
                        <h1>${Name}</h1>
                        <h4>Y soy un <span>${developer}</span></h4>
                        <p> 
                        ${description}
                        </p>
                        </div>
                        <div class="animate__animated animate__backInLeft animate__delay-1s">
                        <div class="social">
                            <a href="${linkedin}"><i class="fab fa-linkedin-in"></i></a>
                            <a href="${Github}"><i class="fab fa-github"></i></a>
                            <a href="${Youtube}"><i class="fab fa-youtube"></i></a>
                        </div>
                        <div class="btn">
                            <button>Descargar CV</button>
                            <button>Contactame</button>
                        </div>
                        </div>
                    </div>
                    <div class="right animate__animated animate__backInRight">
                        <div class="profile">
                            <img src="#" alt="profile-img">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <script src="script.js"></script>
    </body>
    </html>`;

// HTML generado
var generateJavaScript = `// Menu
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
}); 

// dar - light mode 
const darkModeButton = document.getElementById("darkModeButton");
const body = document.body; 

const enbaleDarkMode = () => {
    body.classList.add('dark-mode');
} 

const disableDarkMode = () => {
    body.classList.remove('dark-mode');
}

darkModeButton.addEventListener('change', () => {
    if(darkModeButton.checked) {
        disableDarkMode();
    } else {
        enbaleDarkMode();
    }
}) 


document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.hamburger');
    var menuList = document.querySelector('.list-darkmode-menu ul');

    menuButton.addEventListener('click', function () {
        // Alterna la visibilidad del menú al hacer clic en el botón
        menuList.style.left = (menuList.style.left === '' || menuList.style.left === '-100%') ? '0%' : '-100%';
    });
});
`;

    // Actualizar el contenido de los elementos con el código generado
    document.getElementById('generatedHTML').textContent = generatedHTML;
    document.getElementById('generatedCSS').textContent = generatedCSS;
    document.getElementById('generateJavaScript').textContent = generateJavaScript;

    // Mostrar un mensaje o efecto visual para indicar que el código ha sido generado
    showAlert('Codigo generado con éxito!', 'success');
}

function copyToClipboard(id) {
    var code = document.getElementById(id).textContent;
    navigator.clipboard.writeText(code).then(function() {
        showAlert('Codigo copiado en el portapapeles!', 'info');
    }, function(err) {
        showAlert('Eror al copiar!', 'danger');
    });
} 

function showAlert(message, type) {
    // Crear un elemento div para el alerta
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-' + type;
    alertDiv.innerHTML = message;

    // Agregar el alerta al cuerpo del documento
    // Aquí se asume que tienes un elemento con ID 'alert-container' en tu HTML
    var alertContainer = document.getElementById('alert-container');
    alertContainer.appendChild(alertDiv);

    // Ocultar el alerta después de 5 segundos (5000 milisegundos)
    setTimeout(function() {
        alertDiv.style.display = 'none';
    }, 3000);
}




