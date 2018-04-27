export default function showDialog(dialogEl) {
    $(dialogEl).modal("show");

    return new Promise((resolve, reject) => {
        dialogEl.addEventListener("click", e => {
            const target = e.target;
            if (target.classList.contains("yes")) {
                resolve();
            } else if (target.classList.contains("no")) {
                reject(new Error());
            }
        });
    });
}
