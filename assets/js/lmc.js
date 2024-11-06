function prevDayPsPosition() {
    const table = document.getElementById('prevDayPsPositionTable');
    const form = document.getElementById('prevDayPsPositionForm');
    const addBtn = document.getElementById('psPosAddBtn');
    const searchForm = document.getElementById('searchForm');

    form.classList.add('d-none');
    table.classList.remove('d-none');
    addBtn.classList.remove('d-none');
    searchForm.classList.remove('d-none');
}

function psPositionView() {
    const table = document.getElementById('prevDayPsPositionTable');
    const form = document.getElementById('prevDayPsPositionForm');
    const searchForm = document.getElementById('searchForm');
    const addBtn = document.getElementById('psPosAddBtn');

    form.classList.remove('d-none');
    table.classList.add('d-none');
    searchForm.classList.add('d-none');
    addBtn.classList.add('d-none');
}