function initLikeButtons() {
    const likeCheckboxes = document.querySelectorAll('.con-like input[type="checkbox"].like'); //

    if (likeCheckboxes.length > 0) { //
        likeCheckboxes.forEach(checkbox => { //
            checkbox.checked = false; // Garante que todos os checkboxes comecem desmarcados ao carregar.

            checkbox.addEventListener('change', function() { //
                if (this.checked) { //
                    console.log('Projeto curtido:', this.closest('.projeto-card').querySelector('h3').innerText); //
                } else { //
                    console.log('Projeto descurtido:', this.closest('.projeto-card').querySelector('h3').innerText); //
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', initLikeButtons); //