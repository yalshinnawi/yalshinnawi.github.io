jQuery(document).ready(function($) {
    var modal = document.getElementById("IFStageModal");
    var btn = document.getElementById("IFStageButton");
    var span = document.getElementById("closeButton")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});