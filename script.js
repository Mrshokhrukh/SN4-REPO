
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        alert("hali ham login qilmadingizmi ??")
    }, 5000)
})


window.addEventListener("keydown", (e) => {
    const p = document.createElement('span');
    p.innerHTML += `${e.key}`;
    document.body.appendChild(p);
})