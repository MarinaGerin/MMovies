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
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWQ1NTI3N2RkMGRmNmZjMDI3Njg4NTMzOTAwNGZkZSIsIm5iZiI6MTczMjU1MzM1NC4xODc3MDAzLCJzdWIiOiI2NzQ0YTdlNDEwMGU0ZjQ1MjRmYmJlMTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rxbueEqFWdBjInwSpojsztEF78KTJCjd8SYh31O_XQs'
    }
};

//formatação de Datas 
function formatarData(data) {
    var d = new Date(data),
        mes = '' + (d.getMonth()+ 1),
        dia = '' + d.getDate(),
        ano = d.getFullYear();

    mes = mes.length < 2 ? '0' + mes : mes; 
    dia = dia.length < 2 ? '0' + dia : dia; 
    return [dia, mes, ano].join('/');
}

//exibir e esconder loading
function toggleLoading() {
    let loader = document.querySelector('.loader');
    loader.style.display = loader.style.display == 'none' ? 'block' : 'none';
}