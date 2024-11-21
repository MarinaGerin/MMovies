// Evento de scroll da página
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50)
        navbar.classList.add('scrolled')
    else
        navbar.classList.remove('scrolled');
})

// opções de acesso da api
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmNlMzA4MDA5MTM4YzExYmQ1ZWMxNTA4NmY2ODQ4MyIsIm5iZiI6MTczMjA0MTEyNy43OTMzNzI2LCJzdWIiOiI2MGMwMGYzMDViMTI0MDAwN2E3NDdiMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7oBmC6vtiAsSMV6Jz0D4Jt_SMiYd8LrnRF39BCVUnSg'
    }
};

