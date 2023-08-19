document.addEventListener("DOMContentLoaded", function () {
    const editor = document.querySelector(".tinput");
    const buttons = document.querySelectorAll(".btn");
    
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = button.value;
            
            if (value === "AC") {
                editor.value = "";
            } else if (value === "C") {
                editor.value = editor.value.slice(0, -1);
            } else if (value === "=") {
                try {
                    editor.value = eval(editor.value);
                } catch (error) {
                    editor.value = "Error";
                }
            } else {
                editor.value += value;
            }
        });
    });
});
