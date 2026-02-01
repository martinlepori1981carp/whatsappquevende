// Manejo de Navegación
function showModule(moduleId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.module-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la seleccionada
    const target = document.getElementById(moduleId);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }

    // Actualizar menú lateral
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-module') === moduleId) {
            item.classList.add('active');
        }
    });

    // Cerrar menú móvil si está abierto
    document.querySelector('.sidebar').classList.remove('open');
}

// Event Listeners para el menú lateral
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const moduleId = item.getAttribute('data-module');
        showModule(moduleId);
    });
});

// Menú Móvil
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('open');
});

// Copiar Texto
function copyText(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('toast');
        toast.style.display = 'block';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 2000);
    });
}

// Cálculo de Progreso
function updateProgress() {
    const totalChecks = document.querySelectorAll('.course-check').length;
    const checked = document.querySelectorAll('.course-check:checked').length;
    const percentage = Math.round((checked / totalChecks) * 100);
    
    document.getElementById('progress-fill').style.width = percentage + '%';
    document.getElementById('progress-text').innerText = 'Progreso: ' + percentage + '%';
}

document.querySelectorAll('.course-check').forEach(check => {
    check.addEventListener('change', updateProgress);
});

// Inicializar progreso
updateProgress();
